const sequelize = require("sequelize");
const database = require("../db/index");

const Category = database.define("category", {
    id:{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type: sequelize.STRING,
        allowNull: false
    }
    
});


module.exports = Category;