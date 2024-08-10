var express = require('express');
var router = express.Router();
const productsAPI = require("./products/index")

router.use((req, res, next) => {
    productsAPI(router);
    next();
})

module.exports.router = router