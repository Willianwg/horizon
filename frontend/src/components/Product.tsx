import { styled } from "../stitches.config";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../ApiUrl';
import { useEffect } from "react";

type NameProps={
    productName: string;
    price: number;
    sellerName: string;
    id:number;
    url:string;
}

export function Product(props:NameProps) {
    const navigate = useNavigate();
    
    const seeDetails = ()=> navigate(`/details/${props.id}`);
    
    useEffect(()=>{
        console.log(`url(${ apiUrl +'/files/'+ props.url})`)
    }, [])

    return (
       
         <DataContainer onClick={ seeDetails } >
            <Image style={{ backgroundImage:`url(${ apiUrl +'/files/'+ props.url})` }}/>
            <Info>
                <ProductName>{ props.productName }</ProductName>
                <Seller>por: { props.sellerName }</Seller>
               <Stars>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
               </Stars>
                <Price>R${ props.price }</Price>
            </Info>
         </DataContainer>
       
    )
}

const DataContainer = styled("div",{
    width:"100%",
    background:"white",
    display:"flex",
    flexDirection:"column",
    cursor:"auto",
    marginBottom:5,
    overflow:"hidden",
    userSelect:"none",
    boxShadow:"0px 10px 45px -20px black",
    fontFamily:"Segoe UI",
    
    "@sm":{
        width:"100%",
    },
    "&:active":{
        backgroundColor:"rgba(100,190,250, 0.3)",   
    },
});

const Image = styled("img", {
    height:200,
    width:'100%',
    backgroundSize:"cover",
    backgroundRepeat:"repeat",
    marginRight:10,
});


const Info = styled("div",{
   paddingLeft:10
});

const Price = styled("p",{
    fontSize:20,
    lineHeight:0,
});

const Stars = styled("div",{
    display:"flex",
    height:20,
});

const ProductName = styled("p",{
    fontSize:16,
    fontWeight:550,
    lineHeight:1,
});

const Seller = styled("p",{
    fontSize:12,
    fontWeight:400,
    lineHeight:0,
    position:"relative",
});
