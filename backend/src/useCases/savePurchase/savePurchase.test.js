const PurchaseRepository = require("../../repositories/inMemory/PurchaseRepository");
const UserRepository = require("../../repositories/inMemory/UserRepository");

const SavePurchase = require("./savePurchase");

describe("testando salvamento de compra", ()=>{
    
    it("Objeto com dados de compra deve ser retornado", async()=>{
        
        const purchaseRepository = new PurchaseRepository();
        const userRepository = new UserRepository();
       
        const savePurchase = new SavePurchase(purchaseRepository, userRepository);
        
        
        const userEmail ="Osvaldo@osvaldo.com";
        const productId = "productId";
        
        await savePurchase.execute(userEmail, productId);
        
        const purchase = await savePurchase.execute(userEmail, productId);
        
        expect(purchase[1]).toHaveProperty("userEmail");
        expect(purchase).toHaveLength(3);
        expect(purchase[1].product).toBe(productId);
        
    })
    
})