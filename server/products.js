'use strict'

const db = require('APP/db')
const Product = db.model('products')

module.exports = require('express').Router()
  .get('/products',
    // get all products
    (req, res, next) =>
      Product.findAll()
        .then(products => res.status(200).json(products))
        .catch(next))
    // get one product
  .get('/products/:productId',
    (req, res, next) => {
      let id = req.params.productId
      Product.findById(id)
      .then(product => {
        if (!product) {
          let err = new Error('Product not found')
          err.status(404)
          throw err
        }
        res.json(product)
      })
      .catch(next)
    })
    // ============== THE BELOW ARE ONLY AVAILABLE TO ADMIN USERS ==============
    // creates a product
  .post('/products',
    (req, res, next) =>
      Product.create(req.body)
      .then(product => res.status(201).json(product))
      .catch(next))
    // deletes a product
  .delete('/products/:productId',
    (req, res, next) => {
      let id = req.params.productId
      Product.findById(id)
      .then(product => {
        return product.destroy()
      })
      .catch(next)
    })
    // updates a product
  .put('/products/:productId',
    (req, res, next) => {
      let id = req.params.productId
      Product.findById(id)
      .then(product => {
        product.update(req.body)
        res.status(201).json(product)
      })
      .catch(next)
    })
