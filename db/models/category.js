'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('products', {
  name: STRING,
})

module.exports.associations = (Category, {Product}) => {
  Category.hasMany(Product)
}
