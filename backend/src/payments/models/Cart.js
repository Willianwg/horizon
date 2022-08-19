const sequelize = require("sequelize");
const database = require("../../db/index");

const Cart = database.define("cart",{
    
    id:{
      type:sequelize.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    
    code:{
      type:sequelize.STRING,
      allowNull:false,
      unique:true
    },
    
    price:{
        type:sequelize.DECIMAL,
        allowNull:false
    }
    
});

module.exports = Cart;