'use strict'

const {STRING, INTEGER, DECIMAL, TEXT, ARRAY} = require('sequelize')

module.exports = db => db.define('products', {
  name: STRING,
  picture: STRING,
  price: {
    type: DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0
  },
  description: TEXT,
  categories: ARRAY(INTEGER), // this is an array of category IDs
  // rating: DECIMAL(10, 1)  // add this later.  and write an instance method for setting average??
  reviews: ARRAY(INTEGER),  // this is an array of review IDs

}, {
  instanceMethods: {
    // add something here later to get average of ratings AND to get reviews??
  }
})

// HEY FIX THIS
// module.exports.associations = (Product, {Review, Category}) => {
//   Product.hasMany(Review)
//   Product.hasMany(Category)
// }
