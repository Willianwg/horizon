import { useEffect, useState } from "react";
import api from "../services/api";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import { styled, globalStyles} from "../stitches.config";

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

export function Search(){
    const [searchParams] = useSearchParams();
    
    const [products, setProducts] = useState<ProductProps[]>([]);
    
    useEffect(()=>{
        
        async function loadProducts(){
            
        const response = await api.get<ProductProps[]>(`/search?${ searchParams }`);
        setProducts(response.data);
           
        }
        
        loadProducts();
        
    },[searchParams])
    
    return (
        <>
          <Header />
          <SearchBar />
          <Container>
          {
             products.map(product=>{
                 return <Product key={product.id} productName={product.name} price={product.price} />
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