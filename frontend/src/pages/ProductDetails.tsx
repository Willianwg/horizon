import { useEffect, useState } from "react";
import { styled, globalStyles} from "../stitches.config";
import { Header } from "../components/Header";
import { useApi } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Button } from "../styles/styles";
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
                        <Stars>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
               </Stars>
         <Image style={{ backgroundImage:`url(http://localhost:3000/files/${product.image})` }}/>
         <Price><C>R$</C>{product.price}</Price>
         <Description>
           <p>Descrição:</p>
           <p>{ product.description }</p>
         </Description>
         <Button color="dark" onClick={e=>navigate(`${location.pathname}/checkout`)}>Comprar</Button>
         <Button>Adicionar ao carrinho</Button>
        </Container>
        </Page>
    )
}


const Stars = styled("div",{
    display:"flex",
    margin:5,
});

const Page = styled("div",{
    height:"100%",
    position:"absolute",
    width:"100%",
});

const Container = styled("div",{
    width:"90%",
    background:"white",
    margin:"auto",
    padding:5,
    marginTop:50,
    
    "@sm":{
        marginTop:10,
    }
 
});

const Image = styled("img",{
    height:700,
    width:"100%",
    backgroundSize:"cover",
    backgroundPosition:"center",
    border:"1px ridge rgba(240,240,240,0.2)",
    
    "@sm":{
      height:300,
    }
});

const ProductName = styled("h4", {
    textWeight:600,
    marginLeft:5,
    height:5,
})


const Price = styled("h3", {
    fontWeight:600,
    fontSize:40,
    lineHeight:0,
    fontFamily:"Serif",
})

const Description = styled("p", {
    fontWeight:300,
})

const C = styled("span", {
    fontWeight:400,
    fontSize:30,
    marginRight:1,
    fontFamily:"Arial",
})
