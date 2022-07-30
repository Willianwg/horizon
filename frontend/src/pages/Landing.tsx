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
                <Product name="Ps5" price={4000} seller="Juan carlos"/>
            </Container>
        </Page>
    )
    
}

const Header = styled("h1",{
    fontFamily:"cursive",
    color:"white",
    height:20,
    fontSize:20,
})

const Container = styled("div",{
    
    height:500,
    backgroundColor:"lightGray",
    padding:10
    
})
    
const Page = styled("div",{
  
})


const Bar = styled("input",{
    borderRadius:5,
    height:30,
    padding:2,
    width:"85%",
})

const Button = styled("button",{
    borderRadius:5,
    height:40,
    width:40,
    padding:2,
})