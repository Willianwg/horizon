import { useState } from "react";
import { styled } from "../stitches.config";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export function SearchBar(){
    let navigate = useNavigate();
    
    const [productName, setProductName] = useState("");
    
    function handleSubmit(e){
        
        e.preventDefault();
        
        const textWithoutEmptySpace = productName.trim();
        
        if(!textWithoutEmptySpace) return;
        
        const unaccentedText = textWithoutEmptySpace.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        
        navigate(`/search?pname=${unaccentedText}`);
        
    }
    
    return(
        <>
          <Bar placeholder="Pesquisa Horizon.com" onChange={ e => setProductName(e.target.value) }/>
          <Button onClick={ handleSubmit }><BiSearchAlt size={23}/></Button>
        </>
    )
}

const Bar = styled("input",{
    borderRadius:5,
    height:40,
    padding:2,
    width:"80%",
    margin:3,
    marginRight:0,
    paddingLeft:5,
    alignSelf:"center",
    borderWidth:1,
    borderColor:"rgba(240,240,240,0.4)",
    marginBottom:10,
})

const Button = styled("button",{
    borderRadius:5,
    height:45,
    width:"15%",
    padding:2,
    backgroundColor:"rgb(250,180,70)",
    borderColor:"rgba(240,240,240,0.4)",
    borderWidth:2,
    position:"relative",
    top:5,
    maxWidth:50,
})