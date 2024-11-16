const express = require("express");
const Cart = require("../models/Cart");
const router = express.Router();
// Add product to cart
router.post("/:userId", async (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (cart) {
            const productIndex = cart.products.findIndex((item) => item.productId == productId);
            if (productIndex > -1) {
                cart.products[productIndex].quantity += quantity;
            } else {
                cart.products.push({ productId, quantity });
            }
        } else {
            cart = new Cart({ userId, products: [{ productId, quantity }] });
        }
        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
// Get user's cart
router.get("/:userId", async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userId }).populate("products.productId");
        res.status(200).json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router;