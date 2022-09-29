const PurchaseRepository = require("../../repositories/inMemory/PurchaseRepository");
const ProductRepository = require("../../repositories/inMemory/ProductRepository");

const GetPurchase = require("./getPurchase");

describe("Testing search of purchases", ()=>{
    
    it("should return purchase made by user", async()=>{
       
       const purchaseRepository = new PurchaseRepository();
       const productRepository = new ProductRepository();
       
       const getPurchase = new GetPurchase(purchaseRepository, productRepository);
       
       const user = { email:"Osvaldo@osvaldo.com" }
       
       const purchases = await getPurchase.execute(user.email);
       
       
       expect(purchases[0].price).toBe(5.999);
        
        
    })
    
    
})