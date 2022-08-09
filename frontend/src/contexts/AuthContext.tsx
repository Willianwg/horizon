import { createContext } from "react";


type User = {
    name:string;
    email: string;
    password?:string;
}



type AuthContextType = {
    user: User | null;
    createAccount:(name:string, email:string, password:string, accountType:string)=> Promise<boolean>;
    logIn:(email:string, password:string)=>Promise<boolean>;
    logOut:()=>void;
}



export const AuthContext = createContext<AuthContextType>(null!);