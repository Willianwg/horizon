import { useContext, useState } from 'react';
import { globalStyles } from '../stitches.config'
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Heading, Input, Label, Link, Wrapper } from "../styles/form";

export  function Login() {
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
    <Wrapper className="w-full h-full bg-white dark:bg-gray-900 text-black dark:text-white">
    <Container className="flex flex-col items-center justify-center min-h-screen py-12 px-4 lg:px-6">
        <div className="w-full max-w-md" style={{ width:'100%', maxWidth:'28rem'}}>
            <div className="text-center" style={{ textAlign:'center'}}>
                <Heading className="mt-6 text-3xl font-extrabold">Login</Heading>
            </div>
            <Card className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8" onSubmit={handleSubmit}>
                <div className="p-6" style={{ padding:'1.5rem'}}>
                    <div className="space-y-6" style={{ marginTop: '1.5rem'}}>
                        <div className="space-y-2" style={{ marginTop: '1rem'}}>
                            <Label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Email
                            </Label>
                            <Input
                                type="email"
                                className="h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full shadow-sm sm:text-sm rounded-md"
                                id="email"
                                required={true}
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="space-y-2" style={{ marginTop: '1rem'}}>
                        <div className="flex items-center justify-between" 
                            style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center' }}>
                            <Label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            Senha
                            </Label>
                            <Link
                            className="text-sm text-yellow-500 hover:text-yellow-700 dark:hover:text-yellow-300"
                            href="#"
                            rel="ugc"
                            >
                            Esqueceu sua senha?
                            </Link>
                        </div>
                        <Input
                            type="password"
                            className="h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full shadow-sm sm:text-sm rounded-md"
                            id="password"
                            required={true}
                            onChange={e => setPassword(e.target.value)} 
                        />
                        </div>
                        <Button
                        className="items-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 flex justify-center w-full px-4 py-2 text-sm font-medium rounded-md text-white bg-black hover:bg-yellow-500"
                        type="submit"
                        >
                        Entrar
                        </Button>
                        <div className="mt-4" style={{ marginTop: '1rem', width: '100%', textAlign:'center'}}>
                            <Link
                                className="text-sm text-yellow-500 hover:text-yellow-700 dark:hover:text-yellow-300"
                                href="/signup"
                                rel="ugc"
                            >
                                Criar nova conta
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