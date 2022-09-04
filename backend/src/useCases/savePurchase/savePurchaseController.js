

function savePurchaseController(SavePurchase){
    const savePurchase = SavePurchase;
    
    async function handle(req, res){
        const { productId } = req.params;
        const { user_id } = req.headers;
       
        const products = await savePurchase.execute(user_id, productId);
        
        return res.json(products);
    }
    
    return { handle }
    
}

module.exports = savePurchaseController;