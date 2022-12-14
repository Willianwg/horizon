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
    
    billingAddress:{
        type:sequelize.STRING
    },
    
    billingNumber:{
        type:sequelize.STRING
    },
    
    billingNeighborhood:{
        type:sequelize.STRING
    },
    
    billingCity:{
        type:sequelize.STRING
    },
    
    billingState:{
        type:sequelize.STRING
    },
    
    billingZipCode:{
        type:sequelize.STRING
    }
    
});

module.exports = Transaction;