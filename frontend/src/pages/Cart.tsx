import { useEffect, useState } from "react";
import api from "../services/api";
import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import { styled, globalStyles} from "../stitches.config";

type SellerProps ={
    name:string;
}

type ProductProps ={
    id:number;
    name:string;
    price:number;
    description:string;
    sellerId:number;
    seller:SellerProps;
    image:string;
    createdAt:string;
    updatedAt:string;
}

export function Cart(){
    
    const [products, setProducts] = useState<ProductProps[]>([]);
    
    useEffect(()=>{
        
        async function loadProducts(){
            
         const test = [{
                id:12,
                name:"Produto Teste",
                price:50.99,
                description:"descricao asdfjksdf asjdfhkasjdfha sdfjksahdfkjashdf aksjdfhkasjfhd sadfjhaskf",
                sellerId:12,
                seller:{ name:"Willian"},
                createdAt:"wksodjdk",
                updatedAt:"sjdkdjdisi",
                image: "product-test-fake-url.jpg"
            }]
            
            setProducts(test);
            
            
        }
        
        loadProducts();
        
    },[])
    
    return (
        <>
          <Header />
          <Label>Carrinho</Label>
          <Container>
          {
             products.map(product=>{
                 return <Product key={ product.id } data={product}/>
             })
          }
          </Container>
        </>
        
        
    )
    
}

const Container = styled("div",{
    height:500,
    borderRadius:5,
    display:"flex",
    flexDirection:"column",
    paddingLeft:20,
})

const Label= styled("h3",{
   marginLeft:15,
})