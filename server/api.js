'use strict'

const api = module.exports = require('express').Router()

api
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/orders', require('./orders'))
  .use('/products', require('./products'))
  .use('/categories', require('./categories'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
