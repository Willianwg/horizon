

class ProductRepository {
    products=[
        {
           id:12345,
           name:"Computer",
           price:5.999,
           description:"Good for gaming"
        }
    ];
    
    async getProductsList(ids){
        
       const products = ids.map(id=> this.products.find(item=>item.id === id ));
       
       return products;
        
    }
    
}

module.exports = ProductRepository;