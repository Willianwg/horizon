const sequelize = require("sequelize");
const database = require("../db/index");
const Seller = require("./seller");

const Product = database.define("product", {
    id:{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type: sequelize.STRING,
        allowNull: false
    },
    price:{
        type: sequelize.DECIMAL,
        allowNull: false
    },
    description:{
        type: sequelize.STRING,
        allowNull: false
    }
    
});

Product.belongsTo(Seller, {
    constraint:true
});

Seller.hasMany(Product, {
    constraint:true
});


module.exports = Product;