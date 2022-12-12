import { useEffect, useState } from "react";
import api from "../services/api";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import { styled} from "../stitches.config";

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
    createdAt:string;
    updatedAt:string;
    image:string;
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
                 return <Product key={ product.id } productName={ product.name } price={ product.price }  id={ product.id } url={ product.image } sellerName={ product.seller.name }/>
             })
          }
          </Container>
        </>
        
        
    )
    
}

const Container = styled("div",{
    padding: 30,
    display: "grid",
    gridColumnGap: "10px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridRowGap: "20px",
    justifyItems: "center",
    maxWidth:1750,
    alignSelf:"center",

    "@sm": {
        display: "flex",
        flexDirection: "column",
        padding: 20,
        position:"static",
    }
    
})