import { styled, globalStyles } from "../stitches.config";
import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header"

import api from "../services/api";

export function NewProduct() {
    const navigate = useNavigate();
    
    const [thumbnail, setImage] = useState(null);
    const [array, setArray] = useState([]);
    
    const [productName, setProductName] = useState("");
    const [price, setPrice]= useState("");
    const [description, setDescription]= useState("");
    const [sellerId, setId] = useState("");
    
    const preview = useMemo(()=> {
        return (thumbnail?URL.createObjectURL(thumbnail): null)}, [thumbnail]);

    globalStyles();

    async function handleSubmit(event) {
        event.preventDefault();

        if (!thumbnail || !productName || !price || !description || !sellerId) return;

        const data = new FormData();

        data.append("image", thumbnail);
        data.append("name", productName);
        data.append("price", price);
        data.append("description", description);
        data.append("sellerId", sellerId);
        
        const response = await api.post("/product/create", data);

        navigate("/");

    }


    useEffect(()=> {
        async function load() {
            const response = await api.get("/upload");

            const {
                data
            } = response;

            setArray(data);
        }

        load();
    }, [])

    return (
        <>
        <Header />
        <Form action="/profile" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
        
           <Image id="thumbnail" style={ preview?{ backgroundImage: `url(${preview})` }:{background:"lightGrey"}} />
           <FileUpload type="file" name="image" onChange={event=>setImage(event.target.files[0])} />
           
           <label><p>Nome do produto</p></label>
           <Input onChange={ e=>setProductName(e.target.value) }/>
           
            <label><p>Preço</p></label>
           <Input onChange={ e=>setPrice(e.target.value) } />
           
            <label><p>Descrição</p></label>
           <Input onChange={ e=>setDescription(e.target.value) } />
           
            <label><p>Id de vendedor</p></label>
           <Input onChange={ e=>setId(e.target.value) } />
           
           <br/><br/>
           <button type="submit">MANDAR</button>
        </Form>
        {
            array.map(item=><Image style={ { backgroundImage: `url(http://localhost:3000/files/${item.imageName})` }} />)
        } < />
    )

}

const Image = styled("img", {
    width: "100%",
    height: 200,
    backgroundSize: "cover",
    marginBottom:12,
})

const Form = styled("form", {
    height: 650,
    width: "90%",
    background: "white",
    margin: "auto",
    padding: 10,
    border: "1px solid black",
});

const FileUpload = styled("input", {})

const Input = styled("input", {})