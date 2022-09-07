

function savePurchaseController(SavePurchase){
    const savePurchase = SavePurchase;
    
    async function handle(req, res){
        const { productId } = req.params;
        const { user_email } = req.headers;
       
        const products = await savePurchase.execute(user_email, productId);
        
        return res.json(products);
    }
    
    return { handle }
    
}

module.exports = savePurchaseController;