'use strict'

const {INTEGER, DECIMAL} = require('sequelize')

// define orders model
module.exports = db => db.define('orderItem', { // consistency in singular vs plural -- KHCL
  quantity: {
    type: INTEGER,
    deafaultValue: 0
  },
  price: {
    type: DECIMAL(10, 2),
    defaultValue: 0.0
  }
})

module.exports.associations = (OrderItem, {Order, Product}) => {
  OrderItem.belongsTo(Order)
  OrderItem.belongsTo(Product)
}
