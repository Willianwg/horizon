import { useEffect, useState } from "react";
import { useApi } from "../services/api";
import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import { styled, globalStyles} from "../stitches.config";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
 
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
    image:string;
    createdAt:string;
    updatedAt:string;
}

export function User(){
    
    const auth = useContext(AuthContext);
    const api = useApi();
    const [products, setProducts] = useState<ProductProps[]>([]);
    
    useEffect(()=>{
        
        async function loadProducts(){
            
            const purchases = await api.getPurchases(auth.user.email);
            
            alert(JSON.stringify(purchases));
            
         const test = [{
                id:12,
                name:"produto",
                price:50.99,
                description:"descricao teste",
                sellerId:12,
                seller:{ name:"Willian"},
                createdAt:"wksodjdk",
                updatedAt:"sjdkdjdisi",
                image:"Screenshot_2022-08-08-01-46-35-281_com.linkedin.android~1660696511252.jpg"
            }]
            
            setProducts(test);
            
            
        }
        
        loadProducts();
        
    },[auth])
    
    return (
        <>
          <Header />
          <Label>Suas compras</Label>
          <Container>
          {
             products.map(product=>{
                 return <Product key={ product.id } productName={ product.name } sellerName={product.seller.name} price={ product.price } id={ product.id } url={ product.image }/>
             })
          }
          </Container>
        </>
        
        
    )
    
}

const Container = styled("div",{
    
    height:500,
    backgroundColor:"white",
    borderRadius:5,
    
})

const Label= styled("h3",{
    
   marginLeft:15,
   
})