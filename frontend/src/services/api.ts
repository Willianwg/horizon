import axios from "axios";

const api = axios.create({
    
    baseURL:"http://localhost:3000"
    
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
    
    async getProductDetails(id:number){
        const response = await api.get(`/product/${id}`);
        
        return response.data;
    }
})