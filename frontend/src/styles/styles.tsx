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
   width:"100%",
   color:'white',
   fontWeight:900,
   fontSize:14,
   height:60,
   borderRadius:5,
   borderWidth:0,
   alignSelf:'flex-end',
   background:"rgb(100,190,250)",
   cursor:'pointer',
   '@sm':{
        marginBottom:5
   },
    variants:{
        size:{
           small:{
            
           } 
        },
        color:{
            dark:{
                background:"rgb(100,150,250)",
            }
        }
    }
});