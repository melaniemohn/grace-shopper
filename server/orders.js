'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const OrderItem = db.model('orderItem')
const { selfOnly } = require('./auth.filters')
const Products = db.model('products')
const localStorage = require('store')

module.exports = require('express').Router()
  // this middleware will load any cart info on local storage
  // actually, do we want the conditional to be if(!req.user) ???
  .use((req, res, next) => {
    req.cart = localStorage.get('cart')
    next()
  })
  .get('/', // adminOnly -- KHCL (MPM: actually, I don't think we even need this route??)
    (req, res, next) =>
      Order.findAll()
        .then(allOrders => res.json(allOrders))
        .catch(next))
  .get('/cart', (req, res, next) => {
    console.log('in the cart!')
    const userId = req.user
    if (userId) {
      Order.findOne({
        where: {status: 'cart'},
        include: [
          {model: OrderItem, include: [{model: Products}]}
        ]
      })
      .then(order => {
        res.json(order)
      })
      .catch(next)
    } else {
      localStorage.set('cart', {status: 'cart'})
      req.cart = localStorage.get('cart')
      res.json(req.cart)
    }
  })
  .get('/:orderId', // route.param here -- KHCL
    (req, res, next) =>
      Order.findOne({ // findById -- KHCL
        where: {id: req.params.orderId},
        include: [
          {model: OrderItem, include: [{model: Products}]}
        ]
      })
        .then(order => {
          console.log(order) // no logs -- KHCL
          res.json(order)
        })
        .catch(next))
  .post('/cart', /* selfOnly, */ (req, res, next) => {
    console.log('in order put')
    console.log(req.body)
    const userId = req.body.user_id
    const productId = req.body.product_id
    const data = req.body
    // if a user is logged update the cart on the data base
    if (userId) {
      Order.findOrCreate({
        where: {
          user_id: userId,
          status: 'cart'
        }
      })
        .spread((order, created) => OrderItem.create({
          order_id: order.id,
          product_id: req.body.product_id,
          quantity: req.body.quantity,
          price: req.body.price
        }))
        .then(orderItem => OrderItem.findAll({
          where: {
            order_id: orderItem.order_id
          },
          include: [Products]
        }))
        .then((items) => {
          console.log('items', items)
          res.json(items)
        })
        .catch(next)
    } else {
      const cart = localStorage.get('cart')
      const items = cart.orderItems || []
    }
  })

  /* else {   // if the user isn't logged go through the guest route
    } */
    .delete('/:orderId', (req, res, next) =>
      Order.destroy({
        where: {id: req.params.orderId}
      })
        .then(() => res.sendStatus(204))
        .catch(next))
