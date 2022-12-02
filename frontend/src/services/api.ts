import axios from "axios";
import { apiUrl } from '../ApiUrl';

const api = axios.create({
    
    baseURL: apiUrl
    
});

export default api;


export const useApi = ()=>({
    
    async verifyToken(token:string){
        
      const config = {
         headers: {
             "Content-type": "application/json",
              "Authorization": `Bearer ${token}`,
         },
      };    
        
        try{
            const response = await api.get("/auth",config);
            return response.data;
            
        }catch(e){
            return false;
        }
        
    },
    
    async signIn(name:string, email:string, password:string, accountTyoe:string){
        
        const newAccount={
            name,
            email,
            password
        }
        
        try{
           const response = await api.post("/user", newAccount);
           return response.data;
        
        }catch(e){
            return { error:"something went wrong" };
        }
        
        
        
    },
    
    async login(email:string, password:string){
        
        try{
         const response = await api.get("/login",{ params:{ email, password } });
         return response.data;
        }catch(err){
            return { error:"Error" }
        }
        
    },
    
    async logOut(){
        alert("deslogado com sucesso");
    },
    
    async getProductDetails(id:string){
        const response = await api.get(`/product/${id}`);
        
        return response.data;
    },
    
    
    async generateCart(price:number){
        
        const code = Math.random().toString();
        
        const data ={
            price,
            code
        }
        
        
        const response = await api.post("/cart", data);
        
        return response.data;
        
        
    },
    
    async pay(transactionData:any){
        try{
        const response = await api.post("/transaction", transactionData )
        
        return response.data;
          
        }catch(err){
            alert(err);
        }
         
     },
     
     async getUserProducts(id:number){
         const response = await api.get(`/user/${id}/products`);
         
         return response.data;
     },
     
     async savePurchase(userEmail:string, productId:number){
         
         const response = await api.post(`/buy/${productId}`,{}, { headers:{ user_email:userEmail } } );
         
         
         return response;
         
     },
     
     async getPurchases(userEmail:string){
         
        const response = await api.get(`/purchase`, { headers:{ user_email:userEmail } } );
          
         
         return response.data;
     },
     
     async getProduct(productId:number){
         
         const response = await api.get(`/product/${productId}`);
         
         return response.data;
         
     }
     
})