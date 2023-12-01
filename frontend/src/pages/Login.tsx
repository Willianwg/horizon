import { useContext, useState } from 'react';
import { globalStyles, styled } from '../stitches.config'
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled('div', {
    "width":"100%",
    "height":"100%",
    "color":"#000000",
    "backgroundColor":"#ffffff",

    '&.dark': {
      backgroundColor: 'black',
      color: 'white',
    },
  });
  
  const Container = styled('div', {
   "display":"flex",
   "paddingLeft":"1rem",
   "paddingRight":"1rem",
   "paddingTop":"3rem",
   "paddingBottom":"3rem",
   "flexDirection":"column",
   "justifyContent":"center",
   "alignItems":"center",
   "minHeight":"100vh",
   "@lg":{
    "paddingLeft":"1.5rem",
    "paddingRight":"1.5rem"
    },
  });
  
  const Logo = styled('img', {
    marginBlock: 'auto',
    height: '64px',
    width: '64px',
    aspectRatio: '64/64',
    objectFit: 'cover',
  });
  
  const Heading = styled('h2', {
    marginTop: '1.5rem', 
    fontSize: '1.875rem',
    lineHeight: '2.25rem', 
    fontWeight: 800,
  });
  
  const Card = styled('form', {
    borderRadius: '0.5rem', 
    borderWidth: 1, 
    borderColor:'rgba(0,0,0,0.09)',
    borderStyle:'solid',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.09)'
  });
  
  
  const Label = styled('label', {
    fontSize: '0.875rem',
    lineHeight: '1.25rem', 
    fontWeight: 500, 
    lineWeight: 1, 
  });
  
  const Input = styled('input', {
    "display":"block",
    "paddingTop":"0.5rem",
    "paddingBottom":"0.5rem",
    "paddingLeft":"0.75rem",
    "paddingRight":"0.75rem",
    "borderRadius":"0.375rem",
    "borderStyle":"solid",
    "borderWidth":1,
    "width":"100%",
    "height":"2.5rem",
    "fontSize":"0.875rem",
    "lineHeight":"1.25rem",
    "boxShadow":"0 1px 2px 0 rgba(0, 0, 0, 0.09)",
    "borderColor":'rgba(0,0,0,0.09)',
    "@lg":{"fontSize":"0.875rem","lineHeight":"1.25rem"}
  });
  
  const Link = styled('a', {
    "fontSize":"0.875rem",
    "lineHeight":"1.25rem",
    "color":"#F59E0B",
    "textDecoration":'none',
    "&:hover":{"color":"#B45309"}
  });
  const Button = styled('button', {
    display: 'flex',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.375rem',
    width: '100%',
    height: '2.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 500,
    color: '#ffffff',
    backgroundColor: '#000000',
    transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '100ms',
    marginTop:'1.5rem',
    cursor:'pointer',

    '&:hover': {
    backgroundColor: '#F59E0B',
    borderColor: '#F59E0B'
    }

  });

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