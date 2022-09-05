const PurchaseRepository = require("../../repositories/inMemory/PurchaseRepository");
const GetPurchase = require("./getPurchase");
const SavePurchase = require ("../savePurchase/savePurchase");

describe("Testing search of purchases", ()=>{
    
    it("should return purchase made by user", async()=>{
       
       const purchaseRepository = new PurchaseRepository();
       const savePurchase = new SavePurchase(purchaseRepository);
       const getPurchase = new GetPurchase(purchaseRepository);
       
       const product = { id:"2" };
       
       const user = { id:6 }
       
       await savePurchase.execute(user.id, product.id);
       
       const purchases = await getPurchase.execute(user.id);
       
       
       expect(purchases[0].product).toBe("2");
        
        
    })
    
    
})