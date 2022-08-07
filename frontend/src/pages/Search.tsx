import { useEffect, useState } from "react";
import api from "../services/api";
import { useSearchParams } from "react-router-dom";
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
          <SearchBar />
          {
             products.map(product=>{
                 return <p>nome:{product.name} • price:{product.price}</p>
             })
          }
        </>
        
        
    )
    
}