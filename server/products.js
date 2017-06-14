'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Review = db.model('reviews')

module.exports = require('express').Router()
  .get('/',
    // get all products
    (req, res, next) =>
      Product.findAll()
        .then(products => res.status(200).json(products)) // 200 is default, don't need to describe it -- KHCL
        .catch(next))
    // get one product
  .get('/:productId',
    (req, res, next) => {
      // const id = req.params.productId
      Product.findOne({
        where: {id: req.params.productId},
        include: [{model: Review}]
      })
      .then(product => {
        if (!product) {
          const err = new Error('Product not found')
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
      const id = req.params.productId
      Product.findById(id)
      .then(product => product.destroy() // req.product.destroy() -- KHCL
      ) // never sending response.... 204 -- KHCL
      .catch(next)
    })
    // updates a product
  .put('/:productId',
    (req, res, next) => {
      const id = req.params.productId
      Product.findById(id)
      .then(product => {
        product.update(req.body) // async so return and send response after -- KHCL
        res.status(201).json(product) // 201 created doesn't make sense -- KHCL
      })
      .catch(next)
    })
