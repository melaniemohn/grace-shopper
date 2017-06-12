'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('categories', {
  name: STRING,
  image: STRING
})

module.exports.associations = (Category, {Product}) => {
  // Category.belongsToMany(Product, {through: 'ProductCategory'}) // delete me if you don't want this association -- KHCL
  Category.hasMany(Product)
}
