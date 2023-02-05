const Seller = require("../models/seller");
const Product = require("../models/product");
const exampleProducts = require("./products");

module.exports = async () => {
    await Seller.create({
        name: "Willian",
        email: "Willian.wg70@gmail.com",
        password: "test"
    });

    let count = 0;
    const example_products = [];

    while (count < 10) {
        example_products.push(...exampleProducts)


        count++;
    }

    const newProduct = await Product.bulkCreate(example_products);

    return !!newProduct;
}