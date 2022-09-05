
class GetPurchase {
    
    constructor(purchaseRepository){
        this.purchaseRepository = purchaseRepository;
    }
    
    async execute(userId){
        
        const purchases = await this.purchaseRepository.findPurchases(userId);
        
        
        return purchases;
        
    }
    
}

module.exports = GetPurchase;