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

describe('User model tests', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Sync and clear database', () => db.sync({force: true}))
})
