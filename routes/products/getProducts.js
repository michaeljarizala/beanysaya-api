const getProducts = (req, res, { products }) => {
    res.json({
        success: true,
        message: "Products fetched.",
        data: products
    })
}


module.exports = getProducts