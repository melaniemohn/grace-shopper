'use strict'

const {STRING, INTEGER, DECIMAL, TEXT, ARRAY} = require('sequelize')

module.exports = db => db.define('products', {
  name: {
    type: STRING,
    allowNull: false
  },
  picture: {
    type: STRING,
    defaultValue: '/images/default-photo.jpg'
  },
  price: {
    type: DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  description: TEXT
  // add inventory here? and move ratings off the product model?
  // inventory: INTEGER
  // rating: DECIMAL(1, 1)  // add this later.  and write a getter method for setting average????
  // reviews: ARRAY(INTEGER),  // this is an array of review IDs
  // stars: ARRAY(INTEGER),
})

module.exports.associations = (Product, {Review, Category, OrderItem}) => {
  Product.hasMany(Review)
  Product.belongsTo(Category)
  Product.hasMany(OrderItem)
}
