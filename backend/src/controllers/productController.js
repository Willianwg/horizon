const Product = require("../models/product");
const Seller = require("../models/seller");
const Category = require ("../models/category");

module.exports = {

    async store (req, res){
        
        const { name, price, description, sellerId, categoryName } = req.body;
        
        //const category =await Category.findAll({ where:{ name:categoryName }});
        
        const newProduct = await Product.create({
            name, price, description, sellerId
        });
        
       // await newProduct.setCategories(category);
        
        return res.json(newProduct);
        
    },
    
    async show (req, res){
        
        const { product_id } = req.params;
        const product = await Product.findByPk(product_id, { include:[Seller, Category]});
        
        return res.json(product);
        
    },
    
    async index (req, res){
        
        const productsList = await Product.findAll({ include:{model:Seller,attributes:["name"]}});
        
        return res.json(productsList);
        
    },
    
    async update (req, res){
        
        const { product_id } = req.params;
        const { name, price, description } = req.body;
        
        const product = await Product.findByPk(product_id);
        
        product.name = name;
        product.price = price;
        product.description = description;
        
        await product.save();
        
        return res.json(product);
        
        
    },
    
    async destroy (req, res){
        
        const { product_id } = req.params;
        const product = await Product.findByPk(product_id);
        
        console.log(product_id);
        
        await product.destroy();
        
        return res.status(200).send({ message:"delete ssuccessful" });
    }
        
       
    
    
}