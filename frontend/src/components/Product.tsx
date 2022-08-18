import { styled } from "../stitches.config";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

type NameProps={
    productName: string;
    price: number;
    sellerName: string;
    id:number;
}


export function Product(props:NameProps) {
    const navigate = useNavigate();
    
    const seeDetails = ()=> navigate(`/details/${props.id}`);
    
    return (
       
         <DataContainer onClick={ seeDetails } >
            <Image style={{ backgroundImage:`url(http://localhost:3000/files/${props.url})`}}/>
            <div>
                <ProductName>{ props.productName }</ProductName>
                <Seller>por: { props.sellerName }</Seller>
               <Stars>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
               </Stars>
                <Price>R${ props.price }</Price>
            </div>
         </DataContainer>
       
    )
}


const Image = styled("img", {
    height:"100%",
    width:120,
    backgroundSize:"cover",
    backgroundRepeat:"repeat",
    backgroundPosition:"center",
    marginRight:10,
    
});

const Price = styled("p1",{
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
})

const DataContainer = styled("div",{
    background:"white",
    display:"flex",
    width:"100%",
    borderColor:"rgba(240,240,240,0.2)",
    borderStyle:"ridge",
    borderWidth:1,
    cursor:"auto",
    height:120,
    marginBottom:5,
    overflow:"hidden",
    userSelect:"none",
    
    "&:active":{
        backgroundColor:"rgba(100,190,250, 0.3)",
        
    },
    
})