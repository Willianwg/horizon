const sequelize = require("sequelize");
const database = require("../db/index");

const Image = database.define("image", {
    
    id:{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    imageName:{
        type:sequelize.STRING
    }
    
});


module.exports = Image;