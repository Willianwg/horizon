import { styled, globalStyles} from "../stitches.config";
import { Input } from "../styles/styles";

export function Checkout (){
    
    globalStyles();
    
    return (
        <Page>
         <Container>
          <h1>Checkout Page</h1>
          <Input  placeholder="Complete name"/>
          <Input type="email" placeholder="Complete email"/>
          <Input type="tel" placeholder="mobile phone"/>
          <Input type="number" placeholder="Document (cpf/cnpj)"/>
          <h3>Credit Card</h3>
          <Input  placeholder="Credit Card Holder Name"/>
          <Input type="number" placeholder="Credit Card Number"/>
          <Input  placeholder="Credit Expiration (MM/YY)"/>
          <Input type="number" placeholder="Credit Card Cvv"/>
          
         </Container>
        </Page>
    )
}

const Page = styled("div",{
    display:"grid",
    height:"100vh",
    alignItems:"center",
});

const Container = styled("form",{
    height:600,
    width:"90%",
    background:"white",
    margin:"auto",
    border:"1px solid grey",
    padding:5,
    
});
