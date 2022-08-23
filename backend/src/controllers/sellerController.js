const SellerRepository = require("../repositories/Postgres/Seller");

function SellerController(repository){
    const database = repository || new SellerRepository();
    
    async function store (req, res){
        
        const { name, email, password } = req.body;
        
        const seller = await database.findOneSeller({ email });
        
        if(seller) return res.status(400).json({ error:"Email já está cadastrado"});
        
        const newSeller = await database.createSeller(name, email, password);
        
        return res.json(newSeller);
        
    }
    
    async function show (req, res){
        const { seller_id } = req.params;
        const seller = await database.findSellerById(seller_id);
        
        return res.json(seller);
    
        
    }
    
    return {
        store, show
    }
    
}

module.exports = SellerController;