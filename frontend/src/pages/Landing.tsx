import { useState, useEffect } from "react";
import { Product } from "../Product";
import { styled, globalStyles} from "../stitches.config";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import api from "../services/api";



type SellerProps ={
    name:string;
}

type ProductProps ={
    id:string;
    name:string;
    price:number;
    description:string;
    sellerId:number;
    seller:SellerProps;
    createdAt:string;
    updatedAt:string;
}

export function LandingPage(){
    
    const [products, setProducts] = useState<ProductProps[]>([]);
    
    useEffect(()=>{
        
        async function load(){
            const response = await api.get<ProductProps>("/product");
            
            setProducts(response.data);
        };
        
        load();
        
        
    },[]);
    
    
    
    globalStyles();
    
    return (
        <>
           <Header>
            <Logo>HORIZON.com</Logo>
            <Links>
            <Click href="https://amazon.com/"><FaUserCircle size={23}/></Click>
            <Click href="https://amazon.com/"><FaShoppingCart size={23}/></Click>
            </Links>
           </Header>
            <Bar placeholder="Pesquisa Horizon.com"/>
            <Button><BiSearchAlt size={23}/></Button>
            <Container>
            
                {
                    products.map(product=>{
                        return <Product key={product.id} productName={product.name} price={product.price} sellerName={product.seller.name}/>
                    })
                }

            </Container>
        </>
    )
    
}

const Logo = styled("h1",{
    fontFamily:["Noto","Sans","Serif"],
    fontWeight:700,
    color:"black",
    height:20,
    fontSize:20,
    marginLeft:5,

})

const Container = styled("div",{
    
    height:500,
    backgroundColor:"white",
    borderRadius:5,
    
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
    
const Page = styled("div",{
  position:"fixed",
  width:"100%",
  height:"100%"
});

const Header = styled("div",{
  display:"grid",
  width:"100%",
  height:"100%",
 
})



const Bar = styled("input",{
    borderRadius:5,
    height:40,
    padding:2,
    width:"80%",
    margin:3,
    marginRight:0,
    paddingLeft:5,
    alignSelf:"center",
    borderWidth:1,
    borderColor:"rgba(240,240,240,0.4)",
    marginBottom:10,
})

const Button = styled("button",{
    borderRadius:5,
    height:45,
    width:"15%",
    padding:2,
    backgroundColor:"rgb(250,180,70)",
    borderColor:"rgba(240,240,240,0.4)",
    borderWidth:2,
    position:"relative",
    top:5,
    maxWidth:50,
})