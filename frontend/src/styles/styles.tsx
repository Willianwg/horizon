import { styled, globalStyles } from "../stitches.config";

globalStyles()

export const Input = styled("input",{
    display:"block",
    width:280,
    height:30,
    marginBottom:15,
    border:"1px black solid",
    padding:10,
    outline:"none",
    borderRadius:3,
    borderColor:"grey",
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
   marginBottom:5,
    variants:{
        size:{
           small:{
            
           } 
        },
        color:{
            dark:{
                background: "rgb(50,100,250)",
            },
            light:{
                background: "rgb(220,220,250)",
                color:"rgb(50,100,250)",
            }
        }
    }
});

export const Page = styled("div", {
    display: "flex",
    width: "100vw",
    height: "100vh",
    background: "#dddd",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:"Segoe UI"
});

export const Form = styled("form", {
    padding:20,
    background:"white",
    borderRadius:5,
     boxShadow: '0px 10px 40px -14px gray',
    widht:"90%"
});

export const SignLinkContainer = styled("div", {
    width:"100%",
    marginTop:10,
    textAlign:"center",
})

export const SignLink = styled("a", {
    color:"blue",
    "&:hover":{
        color:"red"
    }
})

export const Label = styled("label", {
    fontWeight:600,
})

