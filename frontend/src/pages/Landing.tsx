import { useState } from "react";
import { Product } from "../Product";
import { styled, globalStyles} from "../stitches.config";


export function LandingPage(){
    
    globalStyles();
    
    return (
        <>
            <Header>[®] HORIZON.com</Header>
            <Container>
                <Bar placeholder="Pesquisa Horizon.com"/>
                <Button>©</Button>
                <Product name="Ps5 em estado novo" price={4000} seller="Juan carlos"/>
                <Product name="Cartão" price={2} seller="João"/>
                
            </Container>
        </>
    )
    
}

const Header = styled("h1",{
    fontFamily:["Noto","Sans","Serif"],
    fontWeight:500,
    color:"white",
    height:20,
    fontSize:20,

})

const Container = styled("div",{
    
    height:500,
    backgroundColor:"white",
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
    margin:5,
    marginRight:0,
    paddingLeft:5,
    alignSelf:"center",
})

const Button = styled("button",{
    borderRadius:5,
    height:40,
    width:40,
    padding:2,
    backgroundColor:"rgb(250,180,70)"
})