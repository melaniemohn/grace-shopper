'use strict'

const db = require('APP/db')
const Product = db.model('products')

module.exports = require('express').Router()
  .get('/',
    // get all products
    (req, res, next) =>
      Product.findAll()
        .then(products => res.status(200).json(products)) // 200 is default, don't need to describe it -- KHCL
        .catch(next))
    // get one product
  // route.param
  .param('productId', (req, res, next, id) => { // id === req.params.productId
    // findit
    // error handling
    // set on request -- req.product = product
    // next()
  })
  .get('/:productId',
    (req, res, next) => {
      let id = req.params.productId
      Product.findById(id)
      .then(product => {
        if (!product) {
          let err = new Error('Product not found')
          err.status = 404
          throw err
        }
        res.json(product)
      })
      .catch(next)
    })
    // ============== THE BELOW ARE ONLY AVAILABLE TO ADMIN USERS ============== // lies -- KHCL
    // creates a product
  .post('/',
    (req, res, next) =>
      Product.create(req.body)
      .then(product => res.status(201).json(product))
      .catch(next))
    // deletes a product
  .delete('/:productId',
    (req, res, next) => {
      let id = req.params.productId
      Product.findById(id)
      .then(product => { 
        return product.destroy() // req.product.destroy() -- KHCL
      }) // never sending response.... 204 -- KHCL
      .catch(next)
    })
    // updates a product
  .put('/:productId',
    (req, res, next) => {
      let id = req.params.productId
      Product.findById(id)
      .then(product => {
        product.update(req.body) // async so return and send response after -- KHCL
        res.status(201).json(product) // 201 created doesn't make sense -- KHCL
      })
      .catch(next)
    })
