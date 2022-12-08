import { useState } from "react";
import { styled } from "../stitches.config";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export function HeaderBar(){
    let navigate = useNavigate();
    
    const [productName, setProductName] = useState("");
    
    function handleSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        
        e.preventDefault();
        
        const textWithoutEmptySpace = productName.trim();
        
        if(!textWithoutEmptySpace) return;
        
        const unaccentedText = textWithoutEmptySpace.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        
        navigate(`/search?pname=${unaccentedText}`);
        return 
    }
    
    return(
        <Div>
          <Bar placeholder="Pesquisa Horizon.com" onChange={ e => setProductName(e.target.value) }/>
          <Button onClick={ handleSubmit }><BiSearchAlt size={23}/></Button>
        </Div>
    )
}

const Div = styled('div',{
    display:'flex',
    alignItems: 'center',
    width:'100%',
    margin:'0px 20px',

    '@sm':{
        display:'none'
    }
})

const Bar = styled("input",{
    borderRadius:5,
    height:40,
    padding:2,
    width:"70%",
    margin:2,
    paddingLeft:5,
    borderWidth:1,
    borderColor:"rgba(240,240,240,0.4)",
    outline:'none',
    fontFamily:"Segoe UI",
})

const Button = styled("button",{
    borderRadius:5,
    height:40,
    width:"15%",
    padding:2,
    background:"#E6AE2C",
    borderWidth:0,
    maxWidth:60,
    cursor:'pointer',
})