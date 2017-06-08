'use strict'

const {INTEGER, DECIMAL} = require('sequelize')

// define orders model
module.exports = db => {
  db.define('orderItem', {
    quantity: {
      type: INTEGER,
      deafaultValue: 0
    },
    price: {
      type: DECIMAL(10, 2),
      defaultValue: 0.0
    }

  })
}
