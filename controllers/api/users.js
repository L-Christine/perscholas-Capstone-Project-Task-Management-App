const User = require('../../models/user')
const jwt = require('jsonwebtoken')

// async function create (req, res) {
//     try {
//         // Add the user to the database
//         const user = await User.create(req.body)
//     } catch (err){
//         res.status(400).json(err)
//     }
// }

async function create(req, res) {
    try {
        //add the user to the DB
        const user = await User.create(req.body)
        //Create JWT token
        const token = createJWT(user)
        //send token to client
        res.json(token)
    } catch (err) {
        res.state(400).json(err)
    }
}

//Helper function for signup and login. It will create JWToken
function createJWT(user) {
    return jwt.sign({ user },process.env.SECRET,{ expiresIn: '24h' })} //user = payload

module.exports = {
    create
}