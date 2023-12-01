import { globalStyles } from "../stitches.config";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button, Card, Container, Heading, Input, Label, Link, Wrapper } from "../styles/form";


export function SignUp() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [accountType, setAccountType] = useState("Comprar");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!name || !email || !password || !confirmPassword) return alert("Preencha todos os campos");
        if (password !== confirmPassword) return alert("Senhas não batem");

        const sucessfulCreate = await auth.createAccount(name, email, password, accountType);

        if (sucessfulCreate) return navigate("/");

        alert("Erro ao criar uma nova conta, certifique-se de usar um email não cadastrado.");

    }

    globalStyles();
  return (
    <Wrapper className="w-full h-full bg-white dark:bg-gray-900 text-black dark:text-white">
    <Container className="flex flex-col items-center justify-center min-h-screen py-12 px-4 lg:px-6">
        <div className="w-full max-w-md" style={{ width:'100%', maxWidth:'28rem'}}>
            <div className="text-center" style={{ textAlign:'center'}}>
                <Heading className="mt-6 text-3xl font-extrabold">Criar conta</Heading>
            </div>
            <Card className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8" onSubmit={handleSubmit}>
                <div className="p-6" style={{ padding:'1.5rem'}}>
                    <div className="space-y-6" style={{ marginTop: '1.5rem'}}>
                        <div className="space-y-2" style={{ marginTop: '1rem'}}>
                            <Label>Nome</Label>
                            <Input
                                type="text"
                                className="h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full shadow-sm sm:text-sm rounded-md"
                                id="name"
                                required={true}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2" style={{ marginTop: '1rem'}}>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                className="h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full shadow-sm sm:text-sm rounded-md"
                                id="email"
                                required={true}
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="space-y-2" style={{ marginTop: '1rem'}}>
                            <Label>Senha</Label>
                      
                            <Input
                                type="password"
                                className="h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full shadow-sm sm:text-sm rounded-md"
                                id="password"
                                required={true}
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </div>
                        <div className="space-y-2" style={{ marginTop: '1rem'}}>
                            <Label>Confirmar senha</Label>
                            <Input
                                type="password"
                                required={true}
                                onChange={e => setConfirmPassword(e.target.value)} 
                            />
                        </div>
                        <Button
                        type="submit"
                        >
                        Entrar
                        </Button>
                        <div className="mt-4" style={{ marginTop: '1rem', width: '100%', textAlign:'center'}}>
                            <Link
                                href="/login"
                                rel="ugc">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </Container>
</Wrapper>
  )
}