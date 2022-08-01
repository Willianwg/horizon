import { createStitches } from "@stitches/react";


import { globalCss } from "@stitches/react";


export const globalStyles = globalCss({
    "*":{
        fontFamily:["Noto","Sans","Serif"],
    },
    body:{
        background:"rgb(10,10,200)",
        margin:0,
        padding:0,
        borderSizing:"borderBox"
        
    }
    
});

export const { styled, css } = createStitches({
    
});