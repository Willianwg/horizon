import { styled } from "./stitches.config";
import { AiFillStar } from "react-icons/ai";

type NameProps={
    name: string;
    price: number;
    seller: string;
}


export function Product(props:NameProps) {
    return (
       
       <Container>
         <DataContainer>
                <Image />
            <Text>
                <ProductName>{ props.name }</ProductName>
                <Seller>por: { props.seller }</Seller>
                <Centralizer>
               <Stars>
                <p><AiFillStar color="orange"/></p>
                <p><AiFillStar color="orange"/></p>
                <p><AiFillStar color="orange"/></p>
                <p><AiFillStar color="orange"/></p>
               </Stars>
                <Price>R${ props.price }</Price>
                </Centralizer>
            </Text>
         </DataContainer>
       </Container>
       
    )
}

const Container = styled("div",{
    width:"100%",
    display:"flex",
    height:100,
    marginBottom:10,
    
})

const Image = styled("img", {
    height:"100%",
    width:120,
    backgroundImage:"url(./IMG-20220730-WA0011.jpeg)",
    backgroundSize:"contain",
    backgroundRepeat:"repeat",
    marginRight:10,
});

const Price = styled("h1",{
    fontSize:20,
    lineHeight:0,
    position:"absolute",
    
});

const Stars = styled("ul",{
    display:"flex",
    height:20,
    width:100,
    padding:1,
    lineHeight:0,
   
});

const ProductName = styled("p",{
    fontSize:16,
    fontWeight:550,
    lineHeight:0.5,
});

const Centralizer = styled("div",{
    position:"relative",
    bottom:22,
});

const Seller = styled("p",{
    fontSize:12,
    fontWeight:400,
    lineHeight:0,
    position:"relative",
   
   
})

const DataContainer = styled("il",{
    background:"white",
    overflow:"hidden",
    display:"flex",
    width:"100%",
    borderColor:"rgba(240,240,240,0.2)",
    borderStyle:"ridge",
    borderWidth:1,
    cursor:"pointer",
    height:100,
    
})

const Text = styled("div",{
    contentHeight:10
})