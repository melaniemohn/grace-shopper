'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const OrderItem = db.model('orderItem')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) =>
      Order.findAll()
        .then(allOrders => res.json(allOrders))
        .catch(next))
  .get('/:orderId',
    (req, res, next) =>
      Order.findOne({
        where: {id: req.params.orderId},
        include: [
          {model: OrderItem, where: {order_id: req.params.orderId}}
        ]
      })
        .then(order => {
          console.log(order)
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
