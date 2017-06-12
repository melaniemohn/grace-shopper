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
    name: 'Food',
    image: '/images/food.jpg'
  },
  coffee: {
    name: 'Coffee',
    image: '/images/latte.jpg'
  },
  tea: {
    name: 'Tea',
    image: '/images/tea.jpg'
  },
  juice: {
    name: 'Juice',
    image: '/images/juice.jpg'
  }
})

const products = seed(Product,
// use a function here, instead of a 'rows' object
// the function lets us receive and reference the previously-seeded rows
  ({categories}) => ({
    java: {
      name: 'Cup of Java',
      price: 2.00,
      picture: '/images/java.png',
      description: 'Keep it old school.',
      category_id: categories.coffee.id
    },
    vanillajs: {
      name: 'Vanilla JS Latte',
      price: 3.75,
      picture: '/images/vanilla-js.png',
      description: 'Simple pleasures.',
      category_id: categories.coffee.id
    },
    coffee: {
      name: 'Cold-Brew CoffeeScript',
      price: 4.50,
      picture: '/images/coffee.png',
      description: 'We added a spoonful of syntactic sugar to make our cold-brew the smoothest around.',
      category_id: categories.coffee.id
    },
    expresso: {
      name: 'Express-o',
      price: 2.50,
      picture: '/images/expresso.png',
      description: 'Fast, unopinionated, minimalist caffeine framework for Node.js.',
      category_id: categories.coffee.id
    },
    mocha: {
      name: 'Mocha',
      price: 3.75,
      picture: '/images/mocha.png',
      description: 'Our Mocha passes the test.',
      category_id: categories.coffee.id
    },
    chai: {
      name: 'Chai Tea',
      price: 3.50,
      picture: '/images/chai.png',
      description: 'Our Chai passes the test.',
      category_id: categories.tea.id
    },
    jasmine: {
      name: 'Jasmine Tea',
      price: 3.50,
      picture: '/images/jasmine.png',
      description: 'Our Jasmine tea has a light, clean framework. Er, flavor.',
      category_id: categories.tea.id
    },
    mimosa: {
      name: 'Mimosa',
      price: 8.00,
      picture: '/images/mimosa.png',
      description: 'Relax! Our signature Mimosa.io is a build tool that promises to transform your development workflow... by helping you go with the flow.',
      category_id: categories.juice.id
    },
    ruby: {
      name: 'Ruby Red Grapefruit Juice',
      price: 4.00,
      picture: '/images/ruby.png',
      description: 'This glass of juice is a total gem. Ruby red grapefruit juice, made from only the finest programming language (aside from JavaScript, of course).',
      category_id: categories.juice.id
    },
    rails: {
      name: 'Ruby on Rails',
      price: 6.50,
      picture: '/images/rails.png',
      description: 'For an extra 2.50, order our Ruby red grapefruit juice "on rails"! 21+',
      category_id: categories.juice.id
    },
    waffle: {
      name: 'Belgian Waffle',
      price: 7.00,
      picture: '/images/waffle.png',
      description: 'If your task is eating brunch, we can help you manage it. "Ready" to eat? Order a waffle! Deal with your issues! Done!',
      category_id: categories.food.id
    },
    stack: {
      name: 'Stack (of Pancakes)',
      price: 5.00,
      picture: '/images/stack.png',
      description: 'Last in, first out. Watch out for overflow.',
      category_id: categories.food.id
    },
    fullstack: {
      name: 'Fullstack',
      price: 9.00,
      picture: '/images/pancake.png',
      description: 'Why pick one pancake when you could tackle the full stack?',
      category_id: categories.food.id
    },
    cookie: {
      name: 'Cookie',
      price: 2.00,
      picture: '/images/cookie.png',
      description: 'This site uses cookies. By continuing to browse the menu, you are agreeing to our use of cookies. Options include fortune cookies or chocolate chip.',
      category_id: categories.food.id
    }
  })
)

const orders = seed(Order,
  ({users}) => ({
    order1: {
      user_id: users.melanie.id,
      status: 'completed'
    },
    order2: {
      user_id: users.grace.id,
      status: 'created'
    }
  })
)

const orderItems = seed(OrderItem,
  ({orders, products}) => ({
    vanilla1: {
      order_id: orders.order1.id,
      product_id: products.vanillajs.id,
      price: products.vanillajs.price,
      quantity: 1
    },
    coffee2: {
      order_id: orders.order2.id,
      product_id: products.coffee.id,
      price: products.coffee.price,
      quantity: 1
    },
    cookies2: {
      order_id: orders.order2.id,
      product_id: products.cookie.id,
      price: products.cookie.price,
      quantity: 4
    }
  })
)

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
