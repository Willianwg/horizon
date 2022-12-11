const Seller = require("../models/seller");
const Product = require("../models/product");
const exampleProducts = require("./products");

module.exports = async () => {
    await Seller.create({
        name:"Willian",
        email:"Willian.wg70@gmail.com",
        password:"test"
    });

    const newProduct = await Product.bulkCreate(exampleProducts);

    return !!newProduct;
}