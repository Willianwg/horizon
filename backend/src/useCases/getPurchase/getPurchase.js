
class GetPurchase {
    
    constructor(purchaseRepository){
        this.purchaseRepository = purchaseRepository;
    }
    
    async execute(userEmail){
        
        const purchases = await this.purchaseRepository.findPurchases(userEmail);
        
        
        return purchases;
        
    }
    
}

module.exports = GetPurchase;