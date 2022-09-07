

class PurchaseRepository {
    purchases=[];
    
    async save(data){
        
        this.purchases.push(data);
        
        return;
        
    }
    
    async findPurchases(userEmail){
        
       const purchases = this.purchases.filter(item=>item.userEmail === userEmail);
       
       return purchases;
        
    }
    
}

module.exports = PurchaseRepository;