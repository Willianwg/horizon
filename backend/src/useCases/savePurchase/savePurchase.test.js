const PurchaseRepository = require("../../repositories/inMemory/PurchaseRepository");


const SavePurchase = require("./savePurchase");

describe("testando salvamento de compra", ()=>{
    
    it("Objeto com dados de compra deve ser retornado", async()=>{
        
        const purchaseRepository = new PurchaseRepository();
        const savePurchase = new SavePurchase(purchaseRepository);
        
        const userEmail = "test@test.com";
        const productId = "productId";
        
        await savePurchase.execute(userEmail, productId);
        
        const purchase = await savePurchase.execute(userEmail, productId);
        
        expect(purchase[0]).toHaveProperty("userEmail");
        expect(purchase).toHaveLength(2);
        expect(purchase[0].product).toBe(productId);
        
    })
    
})