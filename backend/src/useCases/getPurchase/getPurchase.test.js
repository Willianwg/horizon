const PurchaseRepository = require("../../repositories/inMemory/PurchaseRepository");
const GetPurchase = require("./getPurchase");

describe("Testing search of purchases", ()=>{
    
    it("should return purchase made by user", async()=>{
       
       const purchaseRepository = new PurchaseRepository();
         
       const getPurchase = new GetPurchase(purchaseRepository);
       
       const user = { email:"Osvaldo@osvaldo.com" }
       
       const purchases = await getPurchase.execute(user.email);
       
       
       expect(purchases[0].product).toBe("2");
        
        
    })
    
    
})