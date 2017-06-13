'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const OrderItem = db.model('orderItem')
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
  .delete('/:orderId',
    (req, res, next) =>
      Order.destroy({
        where: {id: req.params.orderId}
      })
        .then(() => res.sendStatus(204))
        .catch(next))
