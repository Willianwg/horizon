import { useEffect, useState } from "react";
import { styled, globalStyles} from "../stitches.config";
import { Header } from "../components/Header";
import { useApi } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";

export function Details (){
    const api = useApi();
    const navigate = useNavigate();
    const location = useLocation();
    const id = getIdFromUrl();
    
    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        
        async function loadProduct(){
            const data = await api.getProductDetails(id);
            
            setProduct(data);
        }
        
       loadProduct();
       
    },[])
    
    function getIdFromUrl(){
        const parts=location.pathname.split("/");
        const productId = parts[parts.length-1];
        return productId;
    }
    
    
    globalStyles();
    
    return (
        <Page>
        <Header/>
        <Container>
         <ProductName>{product.name}</ProductName>
         <Image style={{ backgroundImage:`url(http://localhost:3000/files/${product.image})` }}/>
         <Price>R${product.price}</Price>
         <Description>
           <p>Descrição:</p>
           <p>{ product.description }</p>
         </Description>
         <Button onClick={e=>navigate(`${location.pathname}/checkout`)}>Comprar</Button>
         <Button>Adicionar ao carrinho</Button>
        </Container>
        </Page>
    )
}

const Page = styled("div",{
    display:"grid",
    height:"100vh",
    alignItems:"center",
});

const Container = styled("div",{
    height:650,
    width:"90%",
    background:"white",
    margin:"auto",
    padding:5,
    
});

const Image = styled("img",{
    height:300,
    width:"100%",
    backgroundSize:"cover",
    border:"1px ridge lightGrey"
});

const ProductName = styled("h3", {
    textWeight:800,
    marginLeft:5,
})

const Button = styled("button",{
    borderRadius:5,
    width:"100%",
    padding:3,
    margin:"8px 0px",
    height:50,
    fontWeight:700,
});

const Price = styled("h3", {
    textWeight:800,
    fontSize:40,
    lineHeight:0,
    
})

const Description = styled("p", {
    
})
