import { createStitches } from "@stitches/react";


import { globalCss } from "@stitches/react";


export const globalStyles = globalCss({
    body:{
        background:"rgb(245,245,245)",
        margin:0,
        padding:0,
        borderSizing:"borderBox",
        fontFamily:"Segoe UI"
    }
});

export const { styled, css } = createStitches({
    
    media:{
      sm:"(max-width: 600px)",
      md:"(max-width: 1000px)",
      lg:"(max-width: 1080px)"
    }
    
});