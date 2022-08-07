import { styled } from "../stitches.config";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";


export function Header(){
    
    return(
           <Container>
            <Logo>HORIZON.com</Logo>
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