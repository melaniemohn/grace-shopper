'use strict'

const db = require('APP/db')
    , {User, Product, Order, OrderItem, Category, Review, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    categories: categories(),
  }

  seeded.products = products(seeded)
  seeded.reviews = reviews(seeded)
  seeded.orders = orders(seeded)
  seeded.orderItems = orderItems(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  melanie: {
    email: 'melanie@me.limo',
    name: 'Melanie',
    password: '1234',
    isAdmin: true
  },
  jenna: {
    email: 'jenna@geonna.gum',
    name: 'Jenna',
    password: '1234',
    isAdmin: true
  },
  jasmine: {
    email: 'jasmine@gh.com',
    name: 'Jasmine',
    password: '1234',
    isAdmin: true
  },
  kaisin: {
    email: 'kaisin@gh.com',
    name: 'Kaisin',
    password: '1234',
    isAdmin: true
  },
  grace: {
    email: 'gracehopper@gh.com',
    name: 'Grace Hopper',
    password: '1234',
    shipAddress: '5 Hanover Square, Floor 13',
    isAdmin: false
  },
  barack: {
    email: 'barack@gh.gov',
    name: 'Barack Obama',
    password: '1234',
    shipAddress: '1600 Pennsylvania Avenue',
    isAdmin: false
  },
})

const categories = seed(Category, {
  // add images to categories?
  food: {
    name: 'Food'
  },
  coffee: {
    name: 'Coffee'
  },
  tea: {
    name: 'Tea'
  },
  juice: {
    name: 'Juice'
  }
})

const products = seed(Product,
// use a function here, instead of a 'rows' object
// the function lets us receive and reference the previously-seeded rows
  ({categories}) => ({
    java: {
      name: 'Cup of Java',
      picture: '',
      price: 2.00,
      description: 'Keep it old school.',
      category_id: categories.coffee.id
    },
    vanillajs: {
      name: 'Vanilla JS Latte',
      picture: '',
      price: 3.75,
      description: 'Simple pleasures.',
      category_id: categories.coffee.id
    },
    coffee: {
      name: 'Cold-Brew CoffeeScript',
      picture: '',
      price: 4.50,
      description: 'We added a spoonful of syntactic sugar to make our cold-brew the smoothest around.',
      category_id: categories.coffee.id
    },
    expresso: {
      name: 'Express-o',
      picture: '',
      price: 2.50,
      description: 'Fast, unopinionated, minimalist caffeine framework for Node.js.',
      category_id: categories.coffee.id
    },
    mocha: {
      name: 'Mocha',
      picture: '',
      price: 3.75,
      description: 'Our Mocha passes the test.',
      category_id: categories.coffee.id
    },
    chai: {
      name: 'Chai Tea',
      picture: '',
      price: 3.50,
      description: 'Our Chai passes the test.',
      category_id: categories.tea.id
    },
    jasmine: {
      name: 'Jasmine Tea',
      picture: '',
      price: 3.50,
      description: 'Our Jasmine tea has a light, clean framework. Er, flavor.',
      category_id: categories.tea.id
    },
    mimosa: {
      name: 'Mimosa',
      picture: '',
      price: 8.00,
      description: 'Relax! Our signature Mimosa.io is a build tool that promises to transform your development workflow... by helping you go with the flow.',
      category_id: categories.juice.id
    },
    ruby: {
      name: 'Ruby Red Grapefruit Juice',
      picture: '',
      price: 4.00,
      description: 'This glass of juice is a total gem. Ruby red grapefruit juice, made from only the finest programming language (aside from JavaScript, of course).',
      category_id: categories.juice.id
    },
    rails: {
      name: 'on Rails',
      picture: '',
      price: 6.50,
      description: 'For an extra 2.50, order our Ruby red grapefruit juice "on rails"! 21+',
      category_id: categories.juice.id
    },
    waffle: {
      name: 'Belgian Waffle',
      picture: '',
      price: 7.00,
      description: 'If your task is eating brunch, we can help you manage it. "Ready" to eat? Order a waffle! Deal with your issues! Done!',
      category_id: categories.food.id
    },
    stack: {
      name: 'Stack (of Pancakes)',
      picture: '',
      price: 5.00,
      description: 'Last in, first out. Watch out for overflow.',
      category_id: categories.food.id
    },
    fullstack: {
      name: 'Fullstack (of Pancakes)',
      picture: '',
      price: 9.00,
      description: 'Why pick one pancake when you could tackle the full stack?',
      category_id: categories.food.id
    },
    cookies: {
      name: 'Cookies',
      picture: '',
      price: 2.00,
      description: 'This site uses cookies. By continuing to browse the menu, you are agreeing to our use of cookies. Options include fortune cookies or chocolate chip.',
      category_id: categories.food.id
    }
  })
)

const orders = seed(Order, {
  // orders here
})

const orderItems = seed(OrderItem, {
  // uh oh
})

const reviews = seed(Review,
  // again, use a function here instead of an object
  ({users, products}) => ({
    myVanillaReview: {
      author_id: users.melanie.id,
      product_id: products.vanillajs.id,
      stars: 5,
      title: 'Love it',
      text: 'JavaScript is delicious, with or without mixins.'
    },
    graceStackReview: {
      author_id: users.grace.id,
      product_id: products.stack.id,
      stars: 3,
      title: 'Not enough pancakes',
      text: 'It is often easier to ask for forgiveness than to ask for more pancakes.'
    },
    graceFullstackReview: {
      author_id: users.grace.id,
      product_id: products.fullstack.id,
      stars: 4,
      title: 'Boo',
      text: 'I am a ghost. Fullstack is cool.'
    },
  })
)

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
