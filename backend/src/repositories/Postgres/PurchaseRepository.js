const Purchase = require("../../models/purchase");
   

class PurchaseRepository {
    
    async save(purchaseData){
        
        const product = await Purchase.create(purchaseData);
       
        return product;
        
    }
    
    async findPurchases(userEmail){
        
        const purchases = await Purchase.findAll({ where:{ userEmail } });
        
        return purchases;
        
    }
    
}

module.exports = PurchaseRepository;