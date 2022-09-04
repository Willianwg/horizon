const PurchaseRepository = require("../../repositories/inMemory/PurchaseRepository");


const SavePurchase = require("./savePurchase");

describe("testando salvamento de compra", ()=>{
    
    it("Objeto com dados de compra deve ser retornado", async()=>{
        
        const purchaseRepository = new PurchaseRepository();
        const savePurchase = new SavePurchase(purchaseRepository);
        
        const userId = "userId";
        const productId = "productId";
        
        await savePurchase.execute(userId, productId);
        
        const purchase = await savePurchase.execute(userId, productId);
        
        expect(purchase[0]).toHaveProperty("userId");
        expect(purchase).toHaveLength(2);
        expect(purchase[0].product).toBe(productId);
        
    })
    
})