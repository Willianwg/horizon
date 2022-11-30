import { styled } from "../stitches.config";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { SiCashapp } from "react-icons/si";
import { HeaderBar } from "./HeaderBar";

export function Header(){
    const auth = useContext(AuthContext);
    
    function logOut(e:Event){
        e.preventDefault();
        
        auth.logOut();
    }

    function joinLinks():JSX.Element{
        return(
            <div>
                <Click href="/signIn">Signin</Click>
                <Click href="/logIn">Login</Click>
            </div>
        )
    }
    
    return(

            <Navbar>
                <LogoDiv>
                    <SiCashapp size={ 24 } color='white'/>
                    <a style={{ textDecoration:'none' }} href="/#"> <Logo>Horizon.br</Logo> </a>
                </LogoDiv> 
                <HeaderBar/>
                <Links>
                    <div style={{ alignItems:'center'}}>
                        <Click href={`/user/${1}`}>{ auth.user && <Span>{ auth.user.name }</Span>}</Click>
                    </div>
                  
                        { !auth.user && joinLinks() }
                        
                    <div>
                        <Click href="/cart">Cart</Click>
                    </div>
                </Links>
            </Navbar>
       
    )
}

const Navbar = styled('nav', {
    background:'linear-gradient(to left, #090C60, #242BAD)',
    color:'#00ff88',
    padding:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    fontFamily:"Segoe UI",
})

const LogoDiv = styled("div",{
  display:'flex',
  alignItems:'center',
})

const Logo = styled("h1",{
   color:'white',
   marginLeft:5,
})

const Links = styled("div",{
    display:'flex',
    alignItems:'center',
    '@sm':{
        display:'none'
    }
})

const Click = styled("a",{
    fontWeight:'bold',
    color:"white",
    textDecoration:"none",
    margin:'0px 10px',
    padding: '10px 0px',
    fontSize:16,
    '&:hover':{
        color:'rgb(250,180,70)'
    }
})
