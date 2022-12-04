import { styled, globalStyles } from "../stitches.config";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Input, Button } from "../styles/styles";

export function SignUp(){
    const auth = useContext(AuthContext);
    
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("Comprar");
    
    
    
    async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        if(!name || !email || !password) return alert("Preencha todos os campos");
        
        const sucessfulCreate = await auth.createAccount(name, email, password, accountType);
        
        if(sucessfulCreate) return navigate("/");
        
        alert("Erro ao criar uma nova conta, certifique-se de usar um email não cadastrado.");
        
    }
    
    
    globalStyles();
    
    return(
                
          <Page>
            <Container>
               <Form onSubmit={handleSubmit}>
                <label>Name</label>
                <Input onChange={ e=>setName(e.target.value) }/>
                <label>Email</label>
                <Input onChange={ e=>setEmail(e.target.value) }/>
                <label>Password</label>
                <Input type="password" onChange={ e=>setPassword(e.target.value) }/>
                
                <label>Quero: </label>
                <select name="select" onChange={e=>setAccountType(e.target.value)}>
                    <option value="Comprar" selected>Comprar</option>
                    <option value="Vender">Vender</option>
                </select>
                
                <Button size="small" type="submit" css={{ display:"block",marginLeft:"auto" }}>Submit</Button>
               </Form>
            </Container>
          </Page>
        
    )
}


const Page = styled("div",{
    display:"flex",
    width:"100%",
    height:"100vh",
    background:"darkWhite",
    justifyContent:"center",
    alignItems:"center",
    padding:20,
});

const Container = styled("div",{
    display:"flex",
    boxSizing:"border-box",
    width:"80%",
    maxWidth:400,
    height:350,
    background:"white",
    justifySelf:"center",
    boxShadow:"0px 0px 20px black",
    padding:40,
    justifyContent:"center",
    borderRadius:5,
});

const Form = styled("form",{
    
});

const Picture = styled("img",{
    display:"block",
    width:80,
    height:80,
    borderRadius:"50%",
    background:"white",
    boxShadow:" 0px 0px 10px black",
    margin:"auto",
    
    
});

