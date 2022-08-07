const Seller = require("../models/seller");
const Product = require("../models/product");

module.exports = {
    
    async store (req, res){
        
        const { name, email, password } = req.body;
        
        const seller = await Seller.findOne({where:{ email }});
        
        if(seller) return res.status(400).json({ error:"Email já está cadastrado"});
        
        const newSeller = await Seller.create({
            name, email, password
        });
        
        return res.json(newSeller);
        
    },
    
    async show (req, res){
        const { seller_id } = req.params;
        const seller = await Seller.findByPk(seller_id, { include:Product });
        
        return res.json(seller);
    
        
    }
    
}