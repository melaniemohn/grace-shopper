'use strict'

// NOTE: change test info in package.json

const db = require('APP/db')
const User = db.model('user')

import chai from 'chai'
// import chaiProperties from 'chai-properties'
// import chaiThings from 'chai-things'
// chai.use(chaiProperties)
// chai.use(chaiThings)
const expect = chai.expect
import supertest from 'supertest'
import sinon from 'sinon'

/* global describe it before afterEach */

console.log('testing users!')

describe('User', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Sync and clear database', () => db.sync({force: true}))

  describe('User model validations', () => {
    it('requires email', () => {
      const user = User.build()
      return user.validate()
        .then(err => {
          expect(err).to.be.an('object')
        })
    })
  })

  describe('User authentication', () => {
    it('resolves true if the password matches', () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true))

    it("resolves false if the password doesn't match", () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false))
  })
})
