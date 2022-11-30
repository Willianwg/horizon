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
         <ProductName>Test</ProductName>
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
           <p>Accusantium quo aspernatur expedita rerum assumenda quaerat quisquam officiis, excepturi, inventore recusandae reprehenderit, corporis repellendus adipisci! Natus a aliquam alias ea. Placeat. </p>
         </Description>
         <Button color="dark" onClick={e=>navigate(`${location.pathname}/checkout`)}>Comprar</Button>
         <Button>Adicionar ao carrinho</Button>
        </Container>
        </Page>
    )
}


const Stars = styled("div",{
   
});

const Page = styled("div",{
   
});

const Container = styled("div",{
    boxSizing:"border-box",
    margin:20,
    padding:10,
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    justifyContent:"flex-start",
    background:'red',
    height:'100vh',
});

const Image = styled("img",{
   width:'100%',
   height:'100%',
});

const ProductName = styled("h4", {
   
})


const Price = styled("h3", {
   
})

const Description = styled("p", {
   
})

const C = styled("span", {
   
})
