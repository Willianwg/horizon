
class GetPurchase {
    
    constructor(purchaseRepository, productRepository){
        this.purchaseRepository = purchaseRepository;
        this.productRepository = productRepository;
    }
    
    async execute(userEmail){
        
        const purchases = await this.purchaseRepository.findPurchases(userEmail);
        
        const ids = purchases.map(item=>item.product);
        
        const products = await this.productRepository.getProductsList(ids)
        
        
        return products;
        
    }
    
}

module.exports = GetPurchase;