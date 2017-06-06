'use strict'

const {STRING, INTEGER, TEXT} = require('sequelize')

module.exports = db => db.define('reviews', {
  // productId: INTEGER,
  // userId: INTEGER,
  stars: {
    type: INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  },
  title: STRING,
  text: TEXT,
})

// FIX THIS?
// we want our association keys (userId, productId) on the review
module.exports.associations = (Review, {Product, User}) => {
  Review.belongsTo(Product)
  Review.belongsTo(User, {as: 'author'})
}
