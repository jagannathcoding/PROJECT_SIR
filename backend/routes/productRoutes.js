const express = require("express");
const Product = require("../models/Product");
const router = express.Router();
// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
// Add a new product (Admin only)
router.post("/", async (req, res) => {
    const { name, price, category, image } = req.body;
    try {
        const newProduct = new Product({
            name,
            price,
            category,
            image,
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router;