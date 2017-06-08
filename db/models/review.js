'use strict'

const {STRING, INTEGER, TEXT} = require('sequelize')

module.exports = db => db.define('reviews', { // I usually expect singular table names -- KHCL
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

module.exports.associations = (Review, {Product, User}) => {
  Review.belongsTo(Product)
  Review.belongsTo(User, {as: 'author'})
}
