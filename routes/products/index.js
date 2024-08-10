const getProducts = require("./getProducts")
const postProducts = require("./postProducts")
const prisma = require("../../db/prisma")
const PrismaClient = require("@prisma/client")
const cors = require("cors")
const corsDelegate = require("../../security/cors")

const productsAPI = async (router) => {
    const products = await prisma.product.findMany()

    router.get('/products', cors(corsDelegate), (req, res, next) => {
        getProducts(req, res, { products })
    });

    router.post('/products', cors(corsDelegate), (req, res,) => {
        postProducts(req, res)
    });
}


module.exports = productsAPI