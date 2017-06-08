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
  // inventory: INTEGER // yes add me in. validation greater than 0 -- KHCL
  // rating: DECIMAL(1, 1)  // add this later.  and write a getter method for setting average???? You CANNOT do async in a getter (I don't think). Either hook or frontend reduce -- KHCL
  // reviews: ARRAY(INTEGER),  // this is an array of review IDs // delete me -- kHCL
  // stars: ARRAY(INTEGER), // delete me -- KHCL
})

module.exports.associations = (Product, {Review, Category, OrderItem}) => {
  Product.hasMany(Review)
  Product.belongsTo(Category)
  Product.hasMany(OrderItem) // I would expect Product.belongsToMany(Order, {through: OrderItem}); need to have the revers in Order. So with this we will have in Sequelize - be able to use include syntax from product to orders (and vice versa if you make the other relation); also get product.addOrders(), which will be nicer when you have Order.addProducts([])
  // NO change to tables in postgres. Just changing Sequelize methods and keywords we can use
}
