'use strict'

const {INTEGER, ARRAY, ENUM} = require('sequelize')

// define orders model
module.exports = db => db.define('orders', {
  status: ENUM('created', 'completed') // if you add pending here, make sure only 1 pending for user. Consider unauthenticated users and how to associate cart with their session - if in the front consider when a user makes a cart and THEN logs in -- KHCL
})

module.exports.associations = (Order, {User, OrderItem}) => {
  Order.belongsTo(User)
  Order.hasMany(OrderItem) // see product notes -- KHCL
}
