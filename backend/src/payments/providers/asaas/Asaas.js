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
      
        const [monthMM, yearYY] = creditCard.creditCardExpiration.split("/");
        
        const today = hooks.getCurrentDate();
        
        const transactionData = {
          customer: clientId,
          billingType: paymentType.toUpperCase(),
          dueDate: today,
          totalValue: total,
          installmentCount: installments,
          description: 'Pedido na plataforma Horizon',
          externalReference: transactionCode,
          creditCard: {
            holderName: creditCard.creditCardHolderName,
            number: creditCard.creditCardNumber,
            expiryMonth: monthMM ,
            expiryYear: '20' + yearYY,
            ccv: creditCard.creditCardCvv
          },
          creditCardHolderInfo: {
            ...clientData
          }
        }
        
        
        
        
        console.log(transactionData);
    }
}
