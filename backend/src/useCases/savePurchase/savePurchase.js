
class SavePurchase {
    
    constructor(purchaseRepository){
        this.purchaseRepository = purchaseRepository;
    }
    
    async execute(userEmail, productId){
        
      const purchase ={
          userEmail,
          product:productId,
          userId:1
      }
      
      await this.purchaseRepository.save(purchase);
      
      const all = await this.purchaseRepository.findPurchases(userEmail);
      
      return all;
      
    }
    
}

module.exports = SavePurchase;