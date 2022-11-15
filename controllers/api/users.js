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
      // find user on database based on their user id
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

async function getUserInfo(req, res) {
  try{
    const userData = await User.findOne(req.body.email).select('name email')
    return res.status(200).json(userData)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateUserInfo(req, res) {
  try{
    const updateUser = await User.findOneAndUpdate(req.body.email, {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },{
      new: true
    }).select('name email password')
    return res.status(200).json(updateUser)
  } catch (err) {
    res.status(400).json(err)
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
    checkToken,
    getUserInfo,
    updateUserInfo
  };