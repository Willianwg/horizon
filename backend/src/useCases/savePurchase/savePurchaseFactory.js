const SavePurchase = require ("./savePurchase");
const SavePurchaseController = require("./savePurchaseController");
const PurchaseRepository = require ("../../repositories/Postgres/PurchaseRepository");
const UserRepository = require("../../repositories/Postgres/User");

function savePurchaseFactory(){
    const purchaseRepository = new PurchaseRepository();
    const userRepository = new UserRepository();
    const savePurchase = new SavePurchase(purchaseRepository, userRepository);
    const controller = SavePurchaseController(savePurchase);
    
    return controller;
    
    
}

module.exports = savePurchaseFactory;