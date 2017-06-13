'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const OrderItem = db.model('orderItem')
const { selfOnly } = require('./auth.filters')
const Products = db.model('products')

module.exports = require('express').Router()
  .get('/', // adminOnly -- KHCL (MPM: actually, I don't think we even need this route yet??)
    (req, res, next) =>
      Order.findAll()
        .then(allOrders => res.json(allOrders))
        .catch(next))
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
  .put('/cart/:productId', selfOnly, (req, res, next) => {
    console.log('in order put')
    const userId = req.query.user
    const productId = req.params.product_id
    const data = req.body
    // if a user is logged update the cart on the data base
    if (userId) {
      Order.update(
        {data},
        {where: {
          user_id: userId,
          status: 'cart'
        }}
      )
        .then(affected => {
          if (!affected) {  // if there is no cart, we need to create it
            return Order.create({data})
          } else {
            return Order.findOne({
              where: {
                status: 'cart'
              }
            })
          }
        })
        .then(order => {
          res.setStatus(201).json(order)
        })
        .catch(next)
    } else {   // if the user isn't logged go through the guest route

    }
  })
  .delete('/:orderId',
    (req, res, next) =>
      Order.destroy({
        where: {id: req.params.orderId}
      })
        .then(() => res.sendStatus(204))
        .catch(next))
