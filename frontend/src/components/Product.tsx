import { styled } from "../stitches.config";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../ApiUrl';

export type ProductProps = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    sellerId: number;
    seller: {
        name: string
    };
    createdAt: string;
    updatedAt: string;
}

type PropsType = {
    data: ProductProps
}

export function Product({ data }:PropsType) {
    const navigate = useNavigate();
    
    const seeDetails = ()=> navigate(`/details/${data.id}`);
    const imageUrl = apiUrl +'/files/'+ data.image;

    return (
       
         <DataContainer  >
            <Image src={imageUrl} onClick={ seeDetails } />
            <Info>
                <ProductName onClick={ seeDetails }>{ data.name }</ProductName>
                <Seller>por: { data.seller.name }</Seller>
               <Stars>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
                <AiFillStar color="orange"/>
               </Stars>
                <Price onClick={ seeDetails }>{ Number(data.price).toLocaleString('pt-BR', { currency:'BRL', style:'currency' }) }</Price>
                <Description>{data.description ?? ''}</Description>
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
const Description = styled("p",{
    fontSize:14,
    fontWeight:500,
    color:'#666666',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 3,
    textOverflow: 'ellipsis',
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
