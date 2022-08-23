const ProductRepository = require("../repositories/Postgres/Product");


function ProductController(repository) {
    const database = repository || new ProductRepository();

    async function store (req, res){
        
        const { name, price, description, sellerId } = req.body;
        const { filename } = req.file
        
        let formatedPrice = price;
        
        if(formatedPrice.indexOf(",") !== -1){
            formatedPrice = price.replace(",", ".");
        }
        
        if(formatedPrice.indexOf(".") !== -1){
            formatedPrice = parseFloat(formatedPrice);
        }
        
        const newProduct = await database.createProduct(name, formatedPrice, description, sellerId, filename);
        
        console.log(newProduct);
        
        return res.json(newProduct);
        
    }
    
    async function show (req, res){
        
        const { product_id } = req.params;
        const product = await database.findProductById(product_id);
        
        return res.json(product);
        
    }
    
    async function index (req, res){
        
        const productsList = await database.findAllProducts();
        
        return res.json(productsList);
        
    }
    
    async function update (req, res){
        
        const { product_id } = req.params;
        const { name, price, description } = req.body;
        
        
        const product = await database.editProduct(product_id, name, price, description);
        
        return res.json(product);
        
        
    }
    
    async function destroy (req, res){
        
        const { product_id } = req.params;

        await database.deleteProduct(product_id);
        
        return res.status(200).send({ message:"delete ssuccessful" });
    }
        
   return {
       show, store, index, update, destroy
   }    
    
    
}

module.exports = ProductController;