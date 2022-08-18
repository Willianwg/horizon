import { styled } from "../stitches.config";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { SiCashapp } from "react-icons/si";

export function Header(){
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
    function logIn(e){
        e.preventDefault();
        
        navigate("/login");
    }
    
    function logOut(e){
        e.preventDefault();
        
        auth.logOut();
    }
    
    return(
           <Container>
            <Link to="/" style ={{ textDecoration:"none", cursor:"none" }}><Logo><SiCashapp size={14}/> Horizon.br</Logo></Link>
            { 1===2 && <Options>
              { !auth.user?
              <button onClick={logIn}>Login</button>
              :
              <button onClick={logOut}>Sair</button>
              }
            </Options> }
            <Links>
            <Click href="http://localhost:5173/signIn">{ auth.user && <Span>{ auth.user.name }</Span>}<FaUserCircle size={23} color="rgba(250,250,250,0.9)"/></Click>
            <Click href="https://amazon.com/"><FaShoppingCart size={23} color="rgba(250,250,250,0.9)"/></Click>
            </Links>
           </Container>
    )
}

const Container = styled("div",{
  display:"grid",
  width:"100%",
  background:"rgb(0,0,90)",
  marginBottom:25,
})

const Logo = styled("h1",{
    fontWeight:700,
    color:"white",
    height:20,
    fontSize:20,
    marginLeft:10,
})

const Links = styled("div",{
    position:"absolute",
    top:13,
    right:23,
    color:"black",
    alignItems:"center"
})

const Click = styled("a",{
    color:"black",
    marginLeft:30,
    textDecoration:"none",
})

const Options = styled("div", {
    height:20,
    alignItems:"center",
    display:"flex",
    justifyContent:"space-between",
    paddingRight:15,
    paddingLeft:10,
    
});

const Span = styled("span",{
    color:"white",
    position:"relative",
    right:8,
    bottom:6,
    fontWeight:600,
    fontSize:14,
    fontFamily:"Arial"
    
})
