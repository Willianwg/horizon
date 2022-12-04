import { useState } from "react";
import { styled, globalStyles } from "../stitches.config";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Input, Button, Form, Page } from "../styles/styles";

export function Login() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
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
                <h1>Login</h1>
                <label>Email</label>
                <Input value={email} onChange={e => setEmail(e.target.value)} />
                <label>Password</label>
                <Input value={password} onChange={e => setPassword(e.target.value)} /> <br />
                <Button type="submit" color="dark">Submit</Button>
            </Form>
        </Page>
    )

}
