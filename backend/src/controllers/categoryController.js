const Category = require("../models/category");
const Product = require ("../models/product");

module.exports = {
    
    async show (req, res){
        
        const { categoryId } = req.params;
        
        const category = await Category.findByPk(categoryId, { include:Product });
        
        return res.json(category);
        
    },
    
    async store (req, res){
        
        const { name } = req.query;
      //  console.log(new_category);
        
        const category = await Category.create({
           name
        });
        
        return res.json(category);
        
    },
    
    async index (req, res){
        
        const categories = await Category.findAll();
        
        return res.json(categories);
        
    }
    
    
}