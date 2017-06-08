  'use strict'

// bcrypt docs: https://www.npmjs.com/package/bcrypt
  const bcrypt = require('bcryptjs')
    , {STRING, VIRTUAL, BOOLEAN} = require('sequelize')

  module.exports = db => db.define('users', {
    name: STRING,
    email: {
      type: STRING,
      validate: {
        isEmail: true,
        notEmpty: true,
      }
    },

  // We support oauth, so users may or may not have passwords.
    password_digest: STRING, // This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
    password: VIRTUAL, // Note that this is a virtual, and not actually stored in DB
    shipAddress: STRING,
    paymentInfo: STRING,  // we might not use this?  think about stripe / paypal as alternative
    isAdmin: {
      type: BOOLEAN,
      defaultValue: false
    },
  }, {
    indexes: [{fields: ['email'], unique: true}],
    hooks: {
      beforeCreate: setEmailAndPassword,
      beforeUpdate: setEmailAndPassword,
    },
    defaultScope: {
      attributes: {exclude: ['password_digest']}
    },
    instanceMethods: {
    // This method is a Promisified bcrypt.compare
      authenticate(plaintext) {
        return bcrypt.compare(plaintext, this.password_digest)
      }
    }
  })

  module.exports.associations = (User, {OAuth, Review}) => {
    User.hasOne(OAuth)
    User.hasMany(Review, { foreignKey: 'author_id' })
  }
  function setEmailAndPassword(user) {
    user.email = user.email && user.email.toLowerCase()
    if (!user.password) return Promise.resolve(user)

    return bcrypt.hash(user.get('password'), 10)
    .then(hash => user.set('password_digest', hash))
  }
