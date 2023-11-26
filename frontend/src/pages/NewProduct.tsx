import { styled, globalStyles } from "../stitches.config";
import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header"

import api from "../services/api";

export function NewProduct() {
    const navigate = useNavigate();

    const [thumbnail, setImage] = useState(null);
    const [array, setArray] = useState([]);

    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [sellerId, setId] = useState("");

    const preview = useMemo(() => {
        return (thumbnail ? URL.createObjectURL(thumbnail) : null)
    }, [thumbnail]);

    globalStyles();

    async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
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


    useEffect(() => {
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
        <Page>
            <Header />
            <Container>
                <Form action="/profile" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
                    <Left>
                        <Image src={preview ?? 'https://th.bing.com/th/id/OIP.q8y5slEM6r0N1U-hjtoe6QAAAA?pid=ImgDet&w=238&h=250&rs=1'} id="thumbnail" />
                        <FileUpload type="file" name="image" onChange={event => setImage(event.target.files[0])} />
                    </Left>
                    <Right>
                        <TextInput>
                            <Label><p>Nome</p></Label>
                            <Input onChange={e => setProductName(e.target.value)} />
                        </TextInput>

                        <TextInput>
                            <Label><p>Preço</p></Label>
                            <Input onChange={e => setPrice(e.target.value)} />
                        </TextInput>

                        <TextInput>
                            <Label><p>Descrição</p></Label>
                            <Input onChange={e => setDescription(e.target.value)} />
                        </TextInput>

                        <TextInput>
                            <Label><p>ID do vendedor</p></Label>
                            <Input onChange={e => setId(e.target.value)} />
                        </TextInput>

                        <br /><br />
                        <Button type="submit">Enviar</Button>
                    </Right>
                </Form>
            </Container>
        </Page>
    )

}

const Page = styled("div", {
    background: "white",
    height: "100vh",
    "@md": {
        height: "100%",
    },
    "@sm": {
        height: "100%",
    },

});

const Container = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
});

const Form = styled("form", {
    width: '70vw',
    display: 'flex',
    borderRadius: 10,
    boxShadow: '0px 10px 40px -16px black',
    "@sm": {
        width: "90%",
        flexDirection: "column"
    },
    "@md": {
        width: "70%",
        flexDirection: "column",
    }
});


const Image = styled("img", {
    justifySelf: "center",
    objectFit:'cover',
    objectPosition:'center',
    width: "100%",
    height: 350,
    gridColumn: '1/2',
    "@sm": {
        height: 200,
    },
})

const FileUpload = styled("input", {
    gridColumn: '1/2',
    color:"transparent"
})

const Left = styled("div", {
    boxSizing: "border-box",
    width: "50%",
    padding: 10,
    "@md": {
        width: "100%",
    },
    "@sm": {
        width: "100%",
    },
})

const Right = styled("div", {
    display: "grid",
    gridTemplateColumns: '50fr 50fr',
    gridGap: "0px 15px",
    padding: 10,
    fontFamily: 'Segoe UI',
    "@md": {
        display: 'flex',
        flexDirection: "column"
    },
    
})

const TextInput = styled("div", {
})

const Label = styled("label", {

})
const Input = styled("input", {
    outline: 'none',
    height: 30,
    paddingLeft: 5,
})

const Button = styled("button", {
    marginBottom: 20,
    alignSelf: "flex-end",
    gridColumn: '2/3',
    height: 50,
    marginTop: 10,
    fontWeight: 800,
    background: "rgb(50,100,250)",
    borderWidth: 0,
    color: "white",
    borderRadius: 5,
    cursor: 'pointer',
    "&:hover": {
        background: "rgb(70,100,250)",
    },

    "@sm": {
        width: "100%"
    },
    "@md":{
        justifySelf:'flex-end'
    }
})