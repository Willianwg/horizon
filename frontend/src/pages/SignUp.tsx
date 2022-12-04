import { styled, globalStyles } from "../stitches.config";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Input, Button } from "../styles/styles";

export function SignUp() {
    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("Comprar");



    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!name || !email || !password) return alert("Preencha todos os campos");

        const sucessfulCreate = await auth.createAccount(name, email, password, accountType);

        if (sucessfulCreate) return navigate("/");

        alert("Erro ao criar uma nova conta, certifique-se de usar um email não cadastrado.");

    }


    globalStyles();

    return (

        <Page>
                <Form onSubmit={handleSubmit}>
                    <TextInput>
                        <label>Name</label>
                        <Input onChange={e => setName(e.target.value)} />
                    </TextInput>
                    <TextInput>
                        <label>Email</label>
                        <Input onChange={e => setEmail(e.target.value)} type="email" />
                    </TextInput>
                    <TextInput>
                        <label>Password</label>
                        <Input type="password" onChange={e => setPassword(e.target.value)} />
                    </TextInput>

                    <Button color="dark" type="submit" css={{ display: "block", marginLeft: "auto", marginTop:10 }}>Submit</Button>
                </Form>
        </Page>

    )
}


const Page = styled("div", {
    display: "flex",
    width: "100vw",
    height: "100vh",
    background: "#dddd",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:"Segoe UI"
});

const Form = styled("form", {
    padding:20,
    background:"white",
    borderRadius:5,
    boxShadow: '0px 10px 40px -14px black',
    widht:"90%"
});

const TextInput = styled("div", {
    fontWeight:700,
});


