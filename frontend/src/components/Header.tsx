import { styled } from "../stitches.config";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { SiCashapp } from "react-icons/si";

export function Header(){
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
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

        <Container>
            <Nav>
                <LogoDiv>
                    <SiCashapp size={ 24 } color='white'/>
                    <a style={{ textDecoration:'none' }} href="/#"> <Logo>Horizon.br</Logo> </a>
                </LogoDiv>
                <Links>
                    <div style={{ alignItems:'center'}}>
                        <Click href={`/user/${1}`}>{ auth.user && <Span>{ auth.user.name }</Span>}</Click>
                    </div>
                  
                        { !auth.user && joinLinks() }
                 
                    <div>
                        <Click href="/cart">Cart</Click>
                    </div>
                </Links>
            </Nav>
        </Container>
       
    )
}

const Container = styled("div",{
  width:"100%",
  background:"rgb(0,0,90)",
  zIndex:50,
  top:0
})

const Nav = styled('nav', {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
})

const LogoDiv = styled("div",{
    marginTop:5,
    display:'flex',
    alignItems:'center',
    marginLeft:10
    
})

const Logo = styled("h1",{
    fontWeight:700,
    color:"white",
    height:20,
    fontSize:20,
    marginLeft:5,
    
})

const Links = styled("div",{
    display:'flex',
    color:"white",
    alignItems:"center",
    alignContent:'space-between'
})

const Click = styled("a",{
    fontWeight:'bold',
    fontFamily:"helvetica",
    color:"white",
    textDecoration:"none",
    margin:'0px 10px',
    padding: '10px 0px',
    fontSize:16,
    '&:hover':{
        color:'rgb(250,180,70)'
    }
})

const Span = styled("span",{
    color:"white",
    fontWeight:600,
    fontSize:16,
    fontFamily:"helvetica",
    '&:hover':{
        color:'rgb(250,180,70)'
    }
})
