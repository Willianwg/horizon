import { styled, globalStyles} from "../stitches.config";

export function Checkout (){
    
    globalStyles();
    
    return (
        <Page>
          <Container>
          <h1>Checkout Page</h1>
          <input />
          <input />
          <input />
          <input />
          <input />
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
