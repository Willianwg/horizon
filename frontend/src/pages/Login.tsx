import { useState } from "react";
import { styled, globalStyles } from "../stitches.config";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login (){
    const auth = useContext(AuthContext);
    const navigate = useNavigate()
    
    const [ email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function handleSubmit(e){
        e.preventDefault();
        
        if(!email || ! password) return alert("preencha todos os dados");
        
        const login = await auth.login(email, password);
        
        if(!login)
         return alert("Senha ou email incorretos.");
         
        navigate("/");
    }
    
    globalStyles();
    
    return (
        <>
         <Form onSubmit={ handleSubmit }>
          <h1>Login</h1>
          <label>Email</label>
          <input value={email} onChange={ e=> setEmail(e.target.value) }/>
          <label>Password</label>
          <input value={password} onChange={ e=> setPassword(e.target.value) }/> <br/>
          <button type="submit">Submit</button>
         </Form>
        </>
    )
    
}

const Form = styled("form",{
    paddingLeft:20,
    display:"grid",
    width:300,
})