import { styled } from "../stitches.config";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

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
            <Link to="/" style ={{ textDecoration:"none", cursor:"none" }}><Logo>HORIZON.com</Logo></Link>
            <Options>
              { auth.user && <h3>{ auth.user.name }</h3> }
              { !auth.user?
              <button onClick={logIn}>Login</button>
              :
              <button onClick={logOut}>Sair</button>
              }
            </Options>
            <Links>
            <Click href="http://localhost:5173/signIn"><FaUserCircle size={23}/></Click>
            <Click href="https://amazon.com/"><FaShoppingCart size={23}/></Click>
            </Links>
           </Container>
    )
}

const Container = styled("div",{
  display:"grid",
  width:"100%",
  height:"100%",
 
})

const Logo = styled("h1",{
    fontFamily:["Noto","Sans","Serif"],
    fontWeight:700,
    color:"black",
    height:20,
    fontSize:20,
    marginLeft:5,
})

const Links = styled("div",{
    position:"absolute",
    top:14,
    right:23,
    color:"black",
})

const Click = styled("a",{
    color:"black",
    marginLeft:30,
})

const Options = styled("div", {
    height:20,
    alignItems:"center",
    display:"flex",
    justifyContent:"space-between",
    paddingRight:15,
    paddingLeft:10,
});