const sequelize = require ("sequelize");
const database = require ("../db/index");

const User = database.define("user", {
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    
    name:{
        type: sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:sequelize.STRING,
        allowNull:false
    },
    password:{
        type:sequelize.STRING,
        allowNull:false
    }
    
    
})

module.exports = User;