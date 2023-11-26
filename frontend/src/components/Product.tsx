import { styled } from "../stitches.config";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../ApiUrl';

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

    return (
       
         <DataContainer  >
            <Image src={apiUrl +'/files/'+ props.url} onClick={ seeDetails } />
            <Info>
                <ProductName onClick={ seeDetails }>{ props.productName }</ProductName>
                <Seller>por: { props.sellerName }</Seller>
               <Stars>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
               </Stars>
                <Price onClick={ seeDetails }>{ Number(props.price).toLocaleString('pt-BR', { currency:'BRL', style:'currency' }) }</Price>
            </Info>
         </DataContainer>
       
    )
}

const DataContainer = styled("div",{
    width:"100%",
    background:"white",
    display:"flex",
    flexDirection:"column",
    marginBottom:5,
    overflow:"hidden",
    userSelect:"none",
    fontFamily:"Segoe UI",
    minWidth:250,
    maxWidth:300,
    paddingBlock:20,

    "@sm":{
        width:"100%",
    },
});

const Image = styled("img", {
    height:200,
    width:'100%',
    objectFit:"contain",
    objectPosition:"center",
    marginRight:10,
    cursor:"pointer",
});


const Info = styled("div",{
   paddingLeft:10
});

const Price = styled("p",{
    fontSize:20,
    fontWeight: 600,
    lineHeight:0,
    cursor:"pointer",
});

const Stars = styled("div",{
    display:"flex",
    height:20,
});

const ProductName = styled("p",{
    fontSize:16,
    fontWeight:550,
    lineHeight:1,
    width:'fit-content',
    cursor:"pointer",

    '&:hover':{
        color: '#E6AE2C'
    }
});

const Seller = styled("p",{
    fontSize:12,
    fontWeight:400,
    lineHeight:0,
    position:"relative",
});
