// 'use strict'
//
// const db = require('APP/db')
//     , {Order} = db
//     , {expect} = require('chai')
// /* global describe it before afterEach */
// describe('Order', () => {
//   before('Await database sync', () => db.didSync)
//   afterEach('Clear the tables', () => db.truncate({ cascade: true }))
//   describe('testing products field', () => {
//     it('products field exists and it is an array', () =>
//     Order.create({products: []})
//           .then(order => {
//             console.log('*****', order)
//             expect(Array.isArray(order.products)).to.be.true
//           }).catch(console.error)
//     )
//     //     it("resolves false if the password doesn't match", () =>
//     //         User.create({ password: 'ok' })
//     //             .then(user => user.authenticate('not ok'))
//     //             .then(result => expect(result).to.be.false))
//   })
// })
// /*
// test1: orders has product
// test2: products is an array
// test3: adding a new product will add is to the end o the array
// test4: order has status and it is deafualt created
// test5: set status to 'complete' and check it is chnged
// test6: has a getter method "product with quantity"
// test7: check that product with quantity returns an object
// test8: check that product with quantity returns an object with our products
// test9: add an existed product again, check to make sure we get its quantity value increamented
// test10: has an instance method deletePoroduct from order
// test11: delete a product, checked it got deleted from the db
// */
