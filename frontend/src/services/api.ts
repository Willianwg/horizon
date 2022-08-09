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
            alert("falhou");
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
    
    async logOut(){
        alert("deslogado com sucesso");
    }
    
})