const sequelize = require ("sequelize");
const database = require ("../db/index");
const User = require("./user");
   
const Purchase = database.define("purchase", {
    
    id:{
        autoIncrement:true,
        type:sequelize.INTEGER,
        primaryKey:true
    },
    
    userEmail:{
        type:sequelize.STRING,
        allowNull:false
    },
    
    product:{ type:sequelize.STRING }
    
})

User.hasMany(Purchase, {
    constraint:true,
    foreignKey:"userId"
})

module.exports = Purchase;