const User = require('../../models/userSchema');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function create(req, res) {
    try {
        //add the user to DB
        const user = await User.create(req.body);
        //token will be a string
        const token = createJWT(user);
        //use res.json -> send back a string
        res.json(token);
      } catch (err) {
        res.status(400).json(err);
      }
  }

//query user with an email & verify the pw, if it's matching with the one in DB (using bcrypt compare method)
async function logIn(req, res) {
  try {
      // find user on database based on their email
      const user = await User.findOne({email: req.body.email})

      // use bcrypt -> compare pw (req.body.password=pw you entered, user.password=pw in DB)
      const match = await bcrypt.compare(req.body.password, user.password)

      // if pw match, send the token
      if (match){
        const token = createJWT(user)
        res.json(token)
      }
      
    } catch (err) {
      res.status(400).json('Bad Credentials');
    }
  }

  /* Helper Functions */

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' } //token expiry time
    );
  }

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  //req.exp is from checkToken middleware(server.js)
  res.json(req.exp);
}

  module.exports = {
    create,
    logIn,
    checkToken
  };