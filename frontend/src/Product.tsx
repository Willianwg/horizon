import { styled } from "./stitches.config";

type NameProps={
    name: string;
    price: number;
    seller: string;
}


export function Product(props:NameProps) {
    return (
       
       <Container>
        <image />
        <h2>{ props.name }</h2>
        <h3>Price:{ props.price }</h3>
        <p>{ props.seller }</p>
        
       </Container>
       
    )
}

const Container = styled("div",{
    
})