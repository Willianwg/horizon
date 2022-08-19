const sequelize = require("sequelize");
const database = require("../../db/index");

const Cart = database.define("cart",{
    
    id:{
      primaryKey:true,
      type:sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      unique:true,
    },
    
    price:{
        type:sequelize.DECIMAL,
        allowNull:false
    }
    
});

module.exports = Cart;