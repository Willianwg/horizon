import { styled, globalStyles } from "../stitches.config";

globalStyles()


export const Wrapper = styled('div', {
    "width":"100%",
    "height":"100%",
    "color":"#000000",
    "backgroundColor":"#ffffff",

    '&.dark': {
      backgroundColor: 'black',
      color: 'white',
    },
  });
  
  export const Container = styled('div', {
   "display":"flex",
   "paddingLeft":"1rem",
   "paddingRight":"1rem",
   "paddingTop":"3rem",
   "paddingBottom":"3rem",
   "flexDirection":"column",
   "justifyContent":"center",
   "alignItems":"center",
   "minHeight":"100vh",
   "@lg":{
    "paddingLeft":"1.5rem",
    "paddingRight":"1.5rem"
    },
  });
  
  export const Logo = styled('img', {
    marginBlock: 'auto',
    height: '64px',
    width: '64px',
    aspectRatio: '64/64',
    objectFit: 'cover',
  });
  
  export const Heading = styled('h2', {
    marginTop: '1.5rem', 
    fontSize: '1.875rem',
    lineHeight: '2.25rem', 
    fontWeight: 800,
  });
  
  export const Card = styled('form', {
    borderRadius: '0.5rem', 
    borderWidth: 1, 
    borderColor:'rgba(0,0,0,0.09)',
    borderStyle:'solid',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.09)'
  });
  
  
  export const Label = styled('label', {
    fontSize: '0.875rem',
    lineHeight: '1.25rem', 
    fontWeight: 500, 
    lineWeight: 1, 
  });
  
  export const Input = styled('input', {
    "display":"block",
    "paddingTop":"0.5rem",
    "paddingBottom":"0.5rem",
    "paddingLeft":"0.75rem",
    "paddingRight":"0.75rem",
    "borderRadius":"0.375rem",
    "borderStyle":"solid",
    "borderWidth":1,
    "width":"100%",
    "height":"2.5rem",
    "fontSize":"0.875rem",
    "lineHeight":"1.25rem",
    "boxShadow":"0 1px 2px 0 rgba(0, 0, 0, 0.09)",
    "borderColor":'rgba(0,0,0,0.09)',
    "@lg":{"fontSize":"0.875rem","lineHeight":"1.25rem"}
  });
  
  export const Link = styled('a', {
    "fontSize":"0.875rem",
    "lineHeight":"1.25rem",
    "color":"#F59E0B",
    "textDecoration":'none',
    "&:hover":{"color":"#B45309"}
  });
  export const Button = styled('button', {
    display: 'flex',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.375rem',
    width: '100%',
    height: '2.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 500,
    color: '#ffffff',
    backgroundColor: '#000000',
    transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '100ms',
    marginTop:'1.5rem',
    cursor:'pointer',

    '&:hover': {
    backgroundColor: '#F59E0B',
    borderColor: '#F59E0B'
    }

  });