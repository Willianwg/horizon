const Cart = require("../models/Cart");
const Transaction = require("../models/Transaction");



module.exports= {
    
    async process(data){
        
        const { customer, cartCode, paymentType, installments, boleto, creditCard } = data;
        
        console.log(customer)
        console.log("Interior de customer:", {...customer })
        
        const cart = await Cart.findOne({ where:{ code:cartCode } });
        
        if(!cart) return ;
        
        const transaction = await Transaction.create({
            cartCode:cart.code,
            code:Math.random().toString(),
            total:cart.price,
            paymentType,
            installments,
            status:"started",
            ...customer,
            ...boleto,
            
        })
        
        return transaction;
        
    }
    
    
}