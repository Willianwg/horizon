import { createStitches } from "@stitches/react";


import { globalCss } from "@stitches/react";


export const globalStyles = globalCss({
    body:{
        background:"rgb(245,245,245)",
        margin:0,
        padding:0,
        borderSizing:"borderBox"
        
    }
});

export const { styled, css } = createStitches({
    
    media:{
      sm:"(max-width: 600px)"
    }
    
});