import { useState, useEffect } from "react";
import { Product } from "../Product";
import { styled, globalStyles} from "../stitches.config";
import api from "../services/api";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";

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
        
        function getUserId(){
            const id = localStorage.getItem("userId");
            
            if(!id) return;
            
        }
        
        
        async function loadProducts(){
            const response = await api.get<ProductProps[]>("/product");
            
            setProducts(response.data);
        };
        
        getUserId();
        loadProducts();
        
        
    },[]);
    
    
    
    globalStyles();
    
    return (
        <>
          <Header />
          <SearchBar />
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

const Container = styled("div",{
    
    height:500,
    backgroundColor:"white",
    borderRadius:5,
    
})