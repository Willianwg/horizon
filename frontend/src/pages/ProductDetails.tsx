import { useEffect, useState } from "react";
import { styled, globalStyles} from "../stitches.config";
import { useApi } from "../services/api";
import { useLocation } from "react-router-dom";

export function Details (){
    const api = useApi();
    const location = useLocation();
    const id = getIdFromUrl();
    
    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        
        async function loadProduct(){
            const data = await api.getProductDetails(id);
            
            setProduct(data);
            alert(a);
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
        <Container>
         <ProductName>{product.name} <br/></ProductName>
         <Image />
         Price:{product.price}
         
        </Container>
        </Page>
    )
}

const Page = styled("div",{
    display:"grid",
    height:"100%",
    height:"100vh",
    alignItems:"center",
});

const Container = styled("div",{
    height:600,
    width:"90%",
    background:"white",
    margin:"auto",
    
});

const Image = styled("img",{
    height:300,
    width:"100%",
    background:"url(../IMG-20220730-WA0011.jpeg)",
    backgroundSize:"cover",
});

const ProductName = styled("h3", {
    
})