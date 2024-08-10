const prisma = require("../../db/prisma")

const handleCreation = async (req) => {
    return await prisma.order.create({
        data: {
            fullName: req.body.fullName,
            total: req.body.total,
            deliveryAddress: req.body.deliveryAddress,
            cardNumber: req.body.cardNumber,
            cardExpiration: req.body.cardExpiration,
            cvv: req.body.cvv,
            mobileNumber: req.body.mobileNumber,
        }
    })
}

const postProducts = async (req, res) => {
    const product = await handleCreation(req)
    res.json({
        success: true,
        message: "Order added.",
        data: product
    })
}


module.exports = postProducts