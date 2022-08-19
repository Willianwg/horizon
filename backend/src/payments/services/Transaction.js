const Cart = require("../models/Cart");
const Transaction = require("../models/Transaction");
const PagarmeProvider = require("../providers/pagarme");

class TransactionService {
    paymentProvider;
    
    constructor(paymentProvider){
        this.paymentProvider = paymentProvider || PagarmeProvider;
    }
    
    
    async process(data){
        
        const { customer, cartCode, paymentType, installments, billing, creditCard } = data;
        
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
            ...billing,
            
        })
        
        
       const { code, total } = transaction;
       console.log("jsjsjsiesnesj")
       
       const response = await this.paymentProvider.process({ paymentType, installments, customer, billing, creditCard, transactionCode:code, total });
       
        
        return transaction;
        
    }
    
}

module.exports = TransactionService;