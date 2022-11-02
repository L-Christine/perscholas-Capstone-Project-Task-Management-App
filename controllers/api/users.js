const User = require('../../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function create(req, res) {
    try {
        // Add the user -> DB
        const user = await User.create(req.body);
        const token = createJWT(user);
        // use res.json -> send back a string
        res.json(token);
      } catch (err) {
        res.status(400).json(err);
      }
  }

async function logIn(req, res) {
  try {
      // find user on database
      const user = await User.findOne({email: req.body.email})

      // use bcrypt -> compare passwords
      const match = await bcrypt.compare(req.body.password, user.password)

      if (match){
        // if pw match, send token
        const token = createJWT(user)
        res.json(token)
      }
      
    } catch (err) {
      res.status(400).json('Bad Credentials');
    }
  }

  function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
      );
    }

  module.exports = {
    create,
    logIn
  };