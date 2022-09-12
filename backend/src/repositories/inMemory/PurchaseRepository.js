

class PurchaseRepository {
    purchases=[
        {
           id:8888,
           userEmail:"Osvaldo@osvaldo.com",
           product:"2",
           userId:1818
        }
    ];
    
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