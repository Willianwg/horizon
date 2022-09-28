const Product = require("../../models/product");
const Seller = require("../../models/seller");
const Category = require ("../../models/category");

class ProductPGRepository {
    
    async createProduct(name,formatedPrice, description, sellerId, filename){
        
        //const category = await Category.findAll({ where:{ name:categoryName }});

        const newProduct = await Product.create({
            name, price:formatedPrice, description, sellerId, image:filename
        });
        
        //await newProduct.setCategories(category);
  
        return newProduct;
    }
    
    async findProductById(id){
        
       const product = await Product.findByPk(id, { include:[Seller, Category] });
       
       return product;
    }
    
    async findAllProducts(){
        
        const productsList = await Product.findAll({ include:{model:Seller,attributes:["name"]}});
        
        return productsList;
        
    }
    
    async editProduct(id, name, price, description){
        
        const product = await Product.findByPk(id);
        
        product.name = name;
        product.price = price;
        product.description = description;
        
        await product.save();
        
        return product;
    }
    
    async getProductsList(ids){
        
        const productList = await Product.findAll({ where:{ id:ids }, include:{ model:Seller } });
        
        return productList;
        
    }
    
    async deleteProduct(id){
        const product = await Product.findByPk(id);
        
        await product.destroy();
        
        return;
    }
}

module.exports = ProductPGRepository;