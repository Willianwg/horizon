
class SavePurchase {
    
    constructor(purchaseRepository, userRepository){
        this.purchaseRepository = purchaseRepository;
        this.userRepository = userRepository;
    }
    
    async execute(userEmail, productId){
        
        const user = await this.userRepository.findOneUser({email:userEmail});
        
      const purchase ={
          userEmail,
          product:productId,
          userId: user.id
      }
      
      await this.purchaseRepository.save(purchase);
      
      const all = await this.purchaseRepository.findPurchases(userEmail);
      
      return all;
      
    }
    
}

module.exports = SavePurchase;