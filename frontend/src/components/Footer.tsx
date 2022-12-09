import { styled } from "../stitches.config";


export function Footer(){
    
    return(
        <Container>
            <Text>Copyright © 2022 by Willian Guedes. All Rights Reserved.</Text>
        </Container>
       
    )
}

const Container = styled("div",{
    background:"black",
    height:100,
    width:"100%",
    marginTop:50,
    padding:20,
    display:"flex",
    justifyContent:"center",
})


const Text = styled("p",{
  color:"white",
  fontSize:"12pt",
})
