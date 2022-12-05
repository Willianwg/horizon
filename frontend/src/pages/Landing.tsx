import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { styled, globalStyles} from "../stitches.config";
import api from "../services/api";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

type SellerProps ={
    name:string;
}

type ProductProps ={
    id:number;
    name:string;
    price:number;
    description:string;
    image:string;
    sellerId:number;
    seller:SellerProps;
    createdAt:string;
    updatedAt:string;
}

export function LandingPage(){
    const [products, setProducts] = useState<ProductProps[]>([]);
    
    useEffect(()=>{
        
        async function loadProducts(){
            const response = await api.get<ProductProps[]>("/product");
            
            setProducts(response.data);
        };
        
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
                        return <Product key={product.id} productName={product.name} price={product.price} sellerName={product.seller.name} id={product.id} url={product.image}/>
                    })
                }

          </Container>
        </>
    )
    
}

const Container = styled("div",{
    padding:30,
    display:"grid",
    gridColumnGap:"50px",
    gridTemplateColumns:"25fr 25fr 25fr",
    gridRowGap:"20px",
    alignItems:"flex-start",
    justifyContent:"center",

    "@sm":{
        display:"flex",
        flexDirection:"column",
        padding:20,
    }
})