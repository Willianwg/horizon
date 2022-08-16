import { styled, globalStyles} from "../stitches.config";
import { useState, useMemo, useEffect } from "react";
import api from "../services/api";

export function ImageTest() {
    
    const [thumbnail, setImage] = useState(null);
    const [array, setArray] = useState([]);
    
    const preview = useMemo(()=>{
        return (thumbnail?URL.createObjectURL(thumbnail):null)}, [thumbnail] );
        
      globalStyles();  
        
    async function handleSubmit(event){
          event.preventDefault();
          
          if(!thumbnail) return;
          
          const data = new FormData();
          
          data.append("image", thumbnail);
          data.append("Teste", "Funcionou")
          const response = await api.post("/upload", data);
          
          alert("Enviado");
          
    }
        
        
        useEffect(()=>{
            async function load(){
               const response = await api.get("/upload");
               
               const { data } = response;
               
               setArray(data);
            }
            
            load();
        },[])
   
    return (
        <>
        <form action="/profile" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
           <input type="file" name="image" onChange={event=>setImage(event.target.files[0])}/>
           <br/>
           <br/>
           <Image id="thumbnail" style={{backgroundImage:`url(${preview})` }}/>
           
           { thumbnail && JSON.stringify(thumbnail) }
           <button type="submit">MANDAR</button>
        </form>
        { array.map(item=><Image style ={{ backgroundImage:`url(http://localhost:3000/files/${item.imageName})` }} /> ) }

       </>
    )

}

const Image = styled("img", {
    width:500, 
    height:500,
    backgroundSize:"cover",
})