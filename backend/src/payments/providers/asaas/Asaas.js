const hooks = require("./asaasHooks");


module.exports = {
    
    async process(data){
        
        const { customer, paymentType, billing, transactionCode, total, installments, creditCard } = data;
        
        let clientId;
        
        const clientData = hooks.formatClientData(customer, billing);
        
        const client = await hooks.searchClient(customer.customerDocument);
        
        if(client){
            clientId = client.id;
        } else {
          const register = await hooks.registerClient({ clientData, billing });
          clientId = register.id;
        }
        
        const payment = hooks.applyPayment({ clientData, clientId, paymentType, installments, transactionCode, total, creditCard });
        
    }
}
