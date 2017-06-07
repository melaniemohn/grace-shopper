'use strict'

const db = require('APP/db')
    , {User, Product, Order, Category, Review, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    categories: categories(),
  }

  seeded.products = products(seeded)
  seeded.orders = orders(seeded)
  seeded.reviews = reviews(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  melanie: {
    email: 'melanie@gh.com',
    name: 'Melanie',
    password: '1234',
    isAdmin: true,
  },
  grace: {
    email: 'gracehopper@gh.com',
    name: 'Grace Hopper',
    password: '1234',
    isAdmin: false,
  },
  barack: {
    email: 'barack@gh.gov',
    name: 'Barack Obama',
    password: '1234',
    isAdmin: false,
  },
})

const products = seed(Product, {
  // products here
})

const orders = seed(Order, {
  // orders here
})

const categories = seed(Category, {
  // categories here
})

const reviews = seed(Review, {
  // reviews here
})

// we need to seed our associations, too?
// use a function?  the way bones did with favorites
// something like... ProductCategory (?)

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference other models.

function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

// we might not need ALL of these
module.exports = Object.assign(seed, {users, products, orders, categories, reviews})
