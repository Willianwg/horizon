const PurchaseRepository = require("../../repositories/inMemory/PurchaseRepository");
const GetPurchase = require("./getPurchase");
const SavePurchase = require ("../savePurchase/savePurchase");

describe("Testing search of purchases", ()=>{
    
    it("should return purchase made by user", async()=>{
       
       const purchaseRepository = new PurchaseRepository();
       const savePurchase = new SavePurchase(purchaseRepository);
       const getPurchase = new GetPurchase(purchaseRepository);
       
       const product = { id:"2" };
       
       const user = { email:"test@test.com" }
       
       await savePurchase.execute(user.email, product.id);
       
       const purchases = await getPurchase.execute(user.email);
       
       
       expect(purchases[0].product).toBe("2");
        
        
    })
    
    
})