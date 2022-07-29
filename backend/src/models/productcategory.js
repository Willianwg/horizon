const sequelize = require("sequelize");
const database = require("../db/index");

const ProductCategory = database.define("productcategory", {
    
    id:{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    }
    
});


module.exports = ProductCategory;