import { useState } from "react";
import { Product } from "../Product";
import { styled } from "../stitches.config";




export function LandingPage(){
    
    
    return (
        <Page>
            <Header>HORIZON.com</Header>
            <Container>
                <input></input>
                <Product name="Ps5" price={4000} seller="Juan carlos"/>
            </Container>
        </Page>
    )
    
}

const Header = styled("h1",{
    fontFamily:"cursive",
    color:"white"
    
})

const Container = styled("div",{
    
    height:500,
    backgroundColor:"lightGray",
    margin:5,
    padding:10
    
})
    
const Page = styled("div",{
    backgroundColor:"darkBlue",
    padding:5,
    position:"cover"
})