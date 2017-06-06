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
    defaultValue: 0.0
  },
  description: TEXT,
  categories: ARRAY(INTEGER), // this is an array of category IDs
  // rating: DECIMAL(1, 1)  // add this later.  and write a getter method for setting average????
  // reviews: ARRAY(INTEGER),  // this is an array of review IDs
  // stars: ARRAY(INTEGER),
})

module.exports.associations = (Product, {Review, Category}) => {
  Product.hasMany(Review)
  Product.hasMany(Category)
}
