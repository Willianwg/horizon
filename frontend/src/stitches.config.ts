import { createStitches } from "@stitches/react";


import { globalCss } from "@stitches/react";


export const globalStyles = globalCss({
    body:{
        margin:0,
        padding:0,
        background:"#dddd",
        fontFamily:"Segoe UI"
    },
    "*":{
        boxSizing:"border-box",
    }
});

export const { styled, css } = createStitches({
    
    media:{
      sm:"(max-width: 780px)",
      md:"(max-width: 1000px)",
      lg:"(max-width: 1080px)"
    }
    
});