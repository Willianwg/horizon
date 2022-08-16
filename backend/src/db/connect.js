async function connection(){
    const database = require("./index");
    const User = require("../models/user");
    const Seller = require("../models/seller");
    const Product = require("../models/product");
    const ImageTest = require("../models/ImageTest");
    
    await database.sync();
    
    
}

module.exports = connection;