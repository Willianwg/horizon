
class SavePurchase {
    
    constructor(purchaseRepository){
        this.purchaseRepository = purchaseRepository;
    }
    
    async execute(userId, productId){
        
      const purchase ={
          userId,
          product:productId
      }
      
      await this.purchaseRepository.save(purchase);
      
      const all = await this.purchaseRepository.findPurchases(userId);
      
      return all;
      
    }
    
}

module.exports = SavePurchase;