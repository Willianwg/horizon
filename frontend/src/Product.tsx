import { styled } from "./stitches.config";

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
                <p>• • • • •</p>
                <Price>R${ props.price }</Price>
                <p>{ props.seller }</p>
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
});

const ProductName = styled("p",{
    fontSize:16,
    fontWeight:550,
})

const DataContainer = styled("div",{
    background:"white",
    overflow:"scroll",
    display:"flex",
    width:"100%",
    borderColor:"rgba(240,240,240,0.4)",
    borderStyle:"ridge",
    borderWidth:1,
    cursor:"pointer",
    height:100,
    
})

const Text = styled("div",{
    
})