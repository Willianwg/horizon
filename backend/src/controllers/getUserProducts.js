const UserRepository = require("../repositories/Postgres/User");

function getUserProducts(repository){
    const database = repository || new UserRepository();
    
    async function execute(req, res){
        const { id } = req.params;
        const products = await database.getUserProducts(id);
        
        return products;
    }
    
    return { execute }
    
}

module.exports = getUserProducts;