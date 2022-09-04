const Purchase = require("../../models/purchase");
   

class PurchaseRepository {
    
    async save(purchaseData){
        
        const product = await Purchase.create(purchaseData);
        
        return product;
        
    }
    
    async findPurchases(userId){
        
        const purchases = await Purchase.findAll({ where:{ userId } });
        
        return purchases;
        
    }
    
}

module.exports = PurchaseRepository;