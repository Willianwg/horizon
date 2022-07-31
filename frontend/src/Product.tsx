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
                <p >{ props.name }</p>
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
    marginBottom:0,
    
})

const Image = styled("div", {
    height:"90%",
    width:100,
    backgroundImage:"url(./IMG-20220730-WA0011.jpeg)",
    backgroundSize:"contain",
    backgroundRepeat:"repeat",
    margin:5,
    alignSelf:"center"
    
 
});

const Price = styled("h1",{
    fontSize:20,
    lineHeight:0,
})

const DataContainer = styled("div",{
    background:"rgb(240,240,240)",
    overflow:"scroll",
    display:"flex",
    width:"100%",
    borderRadius:10,
    borderColor:"rgb(200,200,250)",
    borderStyle:"solid",
    borderWidth:2,
    cursor:"pointer",
    height:100,
    
})

const Text = styled("div",{
    
})