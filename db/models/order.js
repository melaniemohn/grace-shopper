'use strict'

const {INTEGER, ARRAY, ENUM} = require('sequelize')

// define orders model
module.exports = db => {
  db.define('orders', {
    status: ENUM('created', 'completed')
  })
}

module.exports.associations = (Order, {User, OrderItem}) => {
  Order.belongsTo(User)
  Order.hasMany(OrderItem)
}
