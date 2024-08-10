
const dotenv = require("dotenv")

dotenv.config()

const corsWhitelist = process.env.CORS_WHITELIST

const cors = (req, callback) => {
    var corsOptions
    if (corsWhitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true }
    } else {
        corsOptions= { origin: false }
    }
    callback(null, corsOptions)
}

module.exports = cors