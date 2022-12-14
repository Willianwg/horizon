const api = require("../../services/api");

const token = process.env.SANDBOX_TOKEN;


module.exports = {
    
    async searchClient( cpfCnpj ){
        
        const listClientsURL = `https://sandbox.asaas.com/api/v3/customers?cpfCnpj=${ cpfCnpj }`;
        
        const response = await api.get( listClientsURL, { headers:{ access_token:token } } );
        
        const { data } = response.data;
        
        return data.length > 0 ? data[0] : false;
        
    },
    
    async registerClient ({ clientData, billing }){
        
        const registerClientURL = `https://sandbox.asaas.com/api/v3/customers`;
          
        const registerConfig = {
            notificationDisabled: false,
            observations: 'Cliente HORIZON'
        }
        
        const registerData ={
            ...clientData,
            ...registerConfig
        }
        
        const response = await api.post( registerClientURL, registerData, { headers:{ access_token:token } } );
        const { id } = response.data;
        
        console.log("REGISTRADO COM SUCESSO! ID:", id);
        
        return { id, clientData };
        
    },
    
    async applyPayment({ clientId, clientData, paymentType, installments, transactionCode, total, creditCard }){
        
        const paymentURL = `https://sandbox.asaas.com/api/v3/payments`;
        
        
        const [monthMM, yearYY] = creditCard.creditCardExpiration.split("/");
        
        const today = this.getCurrentDate();
        
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
        
        const response = await api.post( paymentURL, transactionData, { headers:{ access_token:token } } );
        const { data } = response;
        console.log("VENDA REALIZADA COM SUCESSO!!", data);
        
        return data;
        
    },
    
    getCurrentDate(){
        
        const date = new Date();
        const formatedDate = date.toISOString();
        const today = formatedDate.split("T")[0];
        
        return today;
        
    },
    
    formatClientData(customer, billing){
        
        const clientData = {
            name: customer.customerName, 
            email: customer.customerEmail,
            mobilePhone: customer.customerMobile, 
            cpfCnpj: customer.customerDocument, 
            postalCode: billing.billingZipCode, 
            address: billing.billingAddress, 
            addressNumber: billing.billingNumber
         } 
        
        return clientData;
    }
    
    
}