const sequelize = require("sequelize");
const database = require("../db/index");

const Seller = database.define("seller", {
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
    email:{
        type: sequelize.STRING,
        allowNull: false
    },
    password:{
        type: sequelize.STRING,
        allowNull: false
    }
    
}, {
    defaultScope: {
        attributes: { exclude: ['password'] },
    }
    
})

module.exports = Seller;