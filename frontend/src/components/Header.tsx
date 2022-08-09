import { styled } from "../stitches.config";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function Header(){
    const auth = useContext(AuthContext);
    
    function handleText(e){
        e.preventDefault();
        
        auth.logOut();
    }
    
    return(
           <Container>
            <Link to="/" style ={{ textDecoration:"none", cursor:"none" }}><Logo>HORIZON.com</Logo></Link>
            <Links>
            <Click href="http://localhost:5173/singIn"><FaUserCircle size={23}/></Click>
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