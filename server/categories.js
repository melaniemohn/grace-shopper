'use strict'

const db = require('APP/db')
const Category = db.model('categories')
const Product = db.model('products')

module.exports = require('express').Router()
  .param('id', (req, res, next, id) => {
    Category.findById(id)
    .then(category => {
      if (!category) {
        const err = Error('Category was not found')
        err.status = 404
        throw err
      }
      req.category = category
      next()
      return null // for bluebird?
    })
    .catch(next)
  })
  .get('/', (req, res, next) => {
    Category.findAll()
    .then(categories => res.json(categories))
    .catch(next)
  })
  .get('/:id', (req, res, next) => {
    res.json(req.category)
  })
  // note that the following routes should only be accessible to admins
  .post('/', (req, res, next) => {
    Category.create(req.body)
    .then(category => {
      res.status(201).json(category)
    })
    .catch(next)
  })
  .put('/:id', (req, res, next) => {
    req.category.update(req.body)
    .then(category => {
      res.status(200).json(category)
    })
    .catch(next)
  })
  .delete('/:id', (req, res, next) => {
    req.category.destroy()
    .then(() => {
      res.status(204).end()
    })
    .catch(next)
  })
