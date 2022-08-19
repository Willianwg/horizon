const sequelize = require("sequelize");
const database = require("../../db/index");

const Transaction = database.define("transaction",{
    
    id:{
      type:sequelize.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    
    cartCode:{
        type:sequelize.STRING,
        allowNull:false
    },
    
    code:{
      type:sequelize.STRING,
      allowNull:false,
      unique:true
    },
    
    status:{
        type:sequelize.ENUM("started","processing","pending","approved","refused","refunded","chargeback","error"),
        allowNull:false
    },
    
    paymentType:{
        type:sequelize.ENUM("boleto","credit_card")
    },
    
    installments:{
        type:sequelize.INTEGER
    },
    
    total:{
        type:sequelize.DECIMAL
    },
    
    transactionId:{
        type:sequelize.INTEGER
    },
    
    processorResponse:{
        type:sequelize.STRING
    },
    
    customerEmail:{
        type:sequelize.STRING
    },
    
    customerName:{
        type:sequelize.STRING
    },
    
    customerMobile:{
        type:sequelize.STRING
    },
    
    customerDocument:{
        type:sequelize.STRING
    },
    
    boletoAdress:{
        type:sequelize.STRING
    },
    
    boletoNumber:{
        type:sequelize.STRING
    },
    
    boletoNeighborhood:{
        type:sequelize.STRING
    },
    
    boletoCity:{
        type:sequelize.STRING
    },
    
    boletoState:{
        type:sequelize.STRING
    },
    
    boletoZipCode:{
        type:sequelize.STRING
    }
    
});

module.exports = Transaction;