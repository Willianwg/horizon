import { useState } from "react";
import { Product } from "../Product";
import { styled } from "../stitches.config";




export function LandingPage(){
    
    
    return (
        <Page>
            <Header>[®] HORIZON.com</Header>
            <Container>
                <Bar placeholder="Pesquisa Horizon.com"/>
                <Button>©</Button>
                <Product name="Ps5 em estado novo" price={4000} seller="Juan carlos"/>
                <Product name="Cartão" price={2} seller="João"/>
                
            </Container>
        </Page>
    )
    
}

const Header = styled("h1",{
    fontFamily:"sans",
    fontWeight:500,
    color:"white",
    height:20,
    fontSize:20,

})

const Container = styled("div",{
    
    height:500,
    backgroundColor:"lightGray",
    borderRadius:5,
    
})
    
const Page = styled("div",{
  backgorund:"red",
  position:"fixed",
  width:"100%",
  height:"100%"
})


const Bar = styled("input",{
    borderRadius:5,
    height:30,
    padding:2,
    width:"85%",
    marginBottom:5,
    paddingLeft:5,
    boxSizing:"borderBox",
})

const Button = styled("button",{
    borderRadius:5,
    height:40,
    width:40,
    padding:2,
})