const sequelize = require("sequelize");
const database = require("../db/index");
const Seller = require("./seller");
const Category = require ("./category");
const ProductCategory = require("./productcategory");
const Purchase = require("./purchase");
const User = require("./user");

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
    },
    image:{
        type:sequelize.STRING
    }
    
});


Product.belongsTo(Seller, {
    constraint:true
});

Seller.hasMany(Product, {
    constraint:true
});

Product.belongsToMany(Category,{
    through:{
        model:ProductCategory
    },
    constraint:true
});

Category.belongsToMany(Product,{
    through:{
        model:ProductCategory
    },
    constraint:true
});


Product.hasMany(ProductCategory);

ProductCategory.belongsTo(Product);

Category.hasMany(ProductCategory);

ProductCategory.belongsTo(Category);


User.hasMany(Purchase, {
    constraint:true
})

Purchase.belongsTo(User,{
    constraint:true
})

module.exports = Product;