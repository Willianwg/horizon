


module.exports ={
    
    async process(data){
        const { transactionCode, total, paymentType, customer, billing, creditCard, installments, items } = data;
        
        const boletoParams={
            payment_method:"boleto",
            amount:total*100
        }
        
        const creditCardParams={
            payment_method:"credit_card",
            amount:total*100,
            installments,
            card_number: creditCard.creditCardNumber,
            card_expiration_date: creditCard.creditCardExpiration,
            card_cvv: creditCard.creditCardCvv,
            capture:true
       }
       
       let paymentParams;
       
       if(paymentType === "boleto"){
           paymentParams = boletoParams;
       }
       if(paymentType === "credit_card"){
           paymentParams = creditCardParams;
       }
        
       const customerParams = {
         customer:{
           external_id: customer.customerEmail,
           email: customer.customerEmail,
           name: customer.customerName,
           type:"individual",
           country:"br",
           phone_numbers:[customer.customerMobile],
           documents:[{
               type:"cpf",
               number:customer.customerDocument
           }]
         }
       }
       
       const billingParams = billing?.billingZipCode?{
           billing:{
               name:"Casa",
               address:{
                   country:"br",
                   state:billing.billingState,
                   city:billing.billingCity,
                   neighborhood:billing.billingNeighborhood,
                   street:billing.billingAdress,
                   street_number:billing.billingNumber,
                   zipcode:billing.billingZipCode,
               }
           }
       }: {};
        
        const itemsParams = {
           items:[{
            id:"828282$",
            title:"random product",
            unit_price:total*100,
            quantity:1,
            tangible:true
           }]
        }
        
        transactionParams = {
            async:false,
            ...paymentParams,
            ...customerParams,
            ...billingParams,
            ...itemsParams
        }
        
       console.debug(transactionParams);
       // return res.status(200).json(creditCardParams);
    }
    
    
}