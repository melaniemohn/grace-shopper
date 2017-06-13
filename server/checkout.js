// const keyPublishable = process.env.PUBLISHABLE_KEY
// const keySecret = process.env.SECRET_KEY
// const stripe = require('stripe')(keySecret)

// module.exports = require('express').Router()
// .get("/", (req, res, next) =>
//   res.send("hello")
//   //res.render("index", {keyPublishable}))
//
// .post("/charge", (req, res, next) => {
//     let amount = 500
//
//     stripe.customers.create({
//        email: req.body.stripeEmail,
//       source: req.body.stripeToken
//     })
//     .then(customer =>
//       stripe.charges.create({
//         amount,
//         description: "Sample Charge",
//            currency: "usd",
//            customer: customer.id
//       }))
//     .then(charge => res.render("charge.pug"))
//     .catch(next)
//   })
