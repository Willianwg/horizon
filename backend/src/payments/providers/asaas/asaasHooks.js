


module.exports = {
    
    async searchClient( cpfCnpj ){
        
        
        const requisition = ()=>{
            
            if(cpfCnpj === '52084444888'){
              return { totalCount:1, data:[{ id:"seuId"}] }
            }
            
            return { totalCount:0, data:[] };
        };
        
        
        const response = requisition();
        const { data } = response;
        
        return data.length > 0 ? data[0] : false;
        
    },
    
    async registerClient ({ clientData, billing }){
        
        const registerConfig = {
            notificationDisabled: false,
            observations: 'Cliente HORIZON'
        }
        
        const registerData ={
            ...clientData,
            ...registerConfig
        }
        
        const response = { id:"123e" };
        const { id } = response;
        
        return { id, clientData };
        
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