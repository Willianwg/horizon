const Seller = require("../../models/seller");
const Product = require("../../models/product");

class SellerPGRepository {
    
    async createSeller(name, email, password){
        
        const newSeller = await Seller.create({
            name,
            email,
            password
        });
        
        return newSeller;
    }
    
    async findOneSeller(query){
        
        const seller = await Seller.findOne({ where:query });
        
        return seller;
        
    }
    
    async findSellerById(id){
        
       const seller = await Seller.findByPk(id, { include:Product });
       
       return seller;
    }
    
    
}

module.exports = SellerPGRepository;