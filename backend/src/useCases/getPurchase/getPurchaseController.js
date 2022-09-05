

function getPurchaseController(GetPurchase){
    const getPurchase = GetPurchase;
    
    async function handle(req, res){
        
        const { user_id } = req.headers;
        
        const purchases = await getPurchase.execute(user_id);
        
        return res.json(purchases);
        
    }
    
    return {
        handle
    }
    
}

module.exports = getPurchaseController;