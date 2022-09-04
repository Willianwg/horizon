async function connection(){
    const database = require("./index");
    const User = require("../models/user");
    const Seller = require("../models/seller");
    const Product = require("../models/product");
    const Cart = require("../payments/models/Cart");
    const Transaction = require("../payments/models/Transaction");
    const Purchase = require("../models/purchase");
   
    await database.sync();
    
    
}

module.exports = connection;