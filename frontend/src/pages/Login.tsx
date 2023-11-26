import { useState } from "react";
import { styled, globalStyles } from "../stitches.config";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Input, Button, Form, Page, SignLinkContainer, SignLink, Label } from "../styles/styles";

export function Login() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!email || !password) return alert("preencha todos os dados");

        const login = await auth.login(email, password);

        if (!login)
            return alert("Senha ou email incorretos.");

        navigate("/");
    }

    globalStyles();

    return (
        <Page>
            <Form onSubmit={handleSubmit}>
                <h1 style={{ textAlign:'center'}}>Login</h1>
                <Label>Email</Label>
                <Input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Digite seu email"
                />
                <Label>Senha</Label>
                <Input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                /> <br />
                <Button type="submit" color="dark">Entrar</Button>

                <SignLinkContainer>
                    <SignLink href="/signup">Não possui conta? Cadastre-se</SignLink>
                </SignLinkContainer>
            </Form>
        </Page>
    )

}
