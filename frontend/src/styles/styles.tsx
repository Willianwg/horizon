import { styled, globalStyles } from "../stitches.config";

globalStyles()

export const Input = styled("input",{
    display:"block",
    width:280,
    height:30,
    marginBottom:15,
    border:"1px black solid",
    padding:5,
});

export const Button = styled("button",{
   
   // background:"rgb(100,190,250)",
    variants:{
        size:{
           small:{
            
           } 
        },
        color:{
            dark:{
                // background:"rgb(100,150,250)",
            }
        }
    }
});