

class PurchaseRepository {
    purchases=[];
    
    async save(data){
        
        this.purchases.push(data);
        
        return;
        
    }
    
    async findPurchases(userId){
        
       const purchases = this.purchases.filter(item=>item.userId === userId);
       
       return purchases;
        
    }
    
}

module.exports = PurchaseRepository;