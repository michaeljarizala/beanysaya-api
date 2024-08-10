const express = require('express')
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()


const app = express()
const host = process.env.HOST
const port = process.env.PORT
const isDev = process.env.NODE_ENV === "development"

app.use(cors())
app.use(express.json())
app.use( "/api",
require('./routes/index').router)

app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`)
})

module.exports = app