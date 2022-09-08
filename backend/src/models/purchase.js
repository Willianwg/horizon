const sequelize = require ("sequelize");
const database = require ("../db/index");
   
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


module.exports = Purchase;