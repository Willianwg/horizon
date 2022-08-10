import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../services/api";

type User = {
    name:string;
    email: string;
    password?:string;
}


export function AuthProvider ({ children }:{ children:JSX.Element }){
    
    const api = useApi();
    const [user, setUser] = useState<User | null>(null);
    
    
    useEffect(()=>{
        
        async function verifyToken(){
            const token = localStorage.getItem("token");
            
            if(!token) return;
            
            const data = await api.verifyToken(token);
                
            if(data.user){
              setUser(data.user);
            }
         
        }
        
        verifyToken();
        
    },[])
    
    
    
    
    
    async function createAccount(name:string, email:string, password:string, accountTyoe:string){
        
        const response = await api.signIn(name, email, password, accountTyoe);
        
        const { user, token } = response;
        
        if(!user) return false;
        
        setUser({ name, email });
        
        setToken(token);
           
        return true;
        
    }
    
    async function login(email:string, password:string){
        
        const data = await api.login(email, password)
        
        if(!data.user) return false;
        
        setUser(data.user);
        setToken(data.token);
        
        return true
    }
    
    async function logOut(){
        
        setUser(null);
        setToken("");
        window.location.href = window.location.href;
        
    }
    
    function setToken(token:string){
        localStorage.setItem("token", token);
    }
    
    return(
        <AuthContext.Provider value={{ user, createAccount, login, logOut }}>
           { children }
        </AuthContext.Provider>
        
    )
    
}