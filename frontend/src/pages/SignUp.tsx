import { styled, globalStyles } from "../stitches.config";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Page, Input, Button, Form } from "../styles/styles";

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
                <h1>Sign up</h1>
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

                <Button color="dark" type="submit" css={{ display: "block", marginLeft: "auto", marginTop: 10 }}>Submit</Button>
            </Form>
        </Page>

    )
}

const TextInput = styled("div", {
});


