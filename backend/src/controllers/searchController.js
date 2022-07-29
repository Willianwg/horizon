const Sequelize = require("sequelize");
const Product = require("../models/product");

module.exports = {
    
    async index (req, res){
        
        const { pname } = req.query;
            
        const Op = Sequelize.Op;
        
        const results = await Product.findAll({ where:Sequelize.where(
                    Sequelize.fn(
                        "unaccent",
                        Sequelize.col("name")
                    ),
                    { [Op.iLike]:`%${pname}%`}
                    
                )
            }
        );
        
        return res.json(results);
       
    }
}