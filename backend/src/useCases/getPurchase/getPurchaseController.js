

function getPurchaseController(GetPurchase){
    const getPurchase = GetPurchase;
    
    async function handle(req, res){
        
        const { user_email } = req.headers;
        
        const purchases = await getPurchase.execute(user_email);
        
        return res.json(purchases);
        
    }
    
    return {
        handle
    }
    
}

module.exports = getPurchaseController;