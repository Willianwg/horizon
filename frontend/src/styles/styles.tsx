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
    borderRadius:5,
    borderWidth:0,
    width:"100%",
    padding:3,
    margin:"8px 0px",
    height:70,
    fontWeight:500,
    color:"white",
    fontSize:18,
    background:"rgb(100,190,250)",
    variants:{
        size:{
           small:{
             height:50,
             width:100
           } 
        },
        color:{
            dark:{
                background:"rgb(100,150,250)",
            }
        }
    }
});