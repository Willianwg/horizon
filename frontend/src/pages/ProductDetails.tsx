import { useEffect, useState } from "react";
import { styled, globalStyles } from "../stitches.config";
import { Header } from "../components/Header";
import { useApi } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Button } from "../styles/styles";
export function Details() {
    const api = useApi();
    const navigate = useNavigate();
    const location = useLocation();
    const id = getIdFromUrl();

    const [product, setProduct] = useState({});

    useEffect(() => {

        async function loadProduct() {
            const data = await api.getProductDetails(id);

            setProduct(data);
        }

        loadProduct();

    }, [])

    function getIdFromUrl() {
        const parts = location.pathname.split("/");
        const productId = parts[parts.length - 1];
        return productId;
    }


    globalStyles();

    return (
        <Page>
            <Header />
            <Container>
                <Image style={{ backgroundImage: `url(http://localhost:3000/files/${product.image})` }} />
                <Right>
                    <ProductName>Test</ProductName>
                    <Stars>
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                    </Stars>
                    <Price><C>R$</C>{55.99}</Price>
                    <Description>
                        <p>Descrição:</p>
                        <p>Accusantium quo aspernatur expedita rerum assumenda quaerat quisquam officiis, excepturi, inventore recusandae reprehenderit, corporis repellendus adipisci! Natus a aliquam alias ea. Placeat. </p>
                    </Description>
                    <Button color="dark" onClick={e => navigate(`${location.pathname}/checkout`)}>Comprar</Button>
                    <Button>Adicionar ao carrinho</Button>
                </Right>
            </Container>
        </Page>
    )
}


const Stars = styled("div", {

});

const Page = styled("div", {

});

const Container = styled("div", {
    boxSizing: "border-box",
    margin: 15,
    padding: 20,
    display: 'grid',
    gridTemplateColumns: '70fr 30fr',
    gridGap: '10px',
    '@sm': {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    }
});

const Image = styled("img", {
    width: '100%',
    height: 500,
    '@sm':{
        height:300,
    }
});

const ProductName = styled("h2", {
    margin:0,
})


const Price = styled("h3", {
    margin:0,
    fontSize:'25pt',
    fontWeight:500,
})

const Description = styled("p", {
    '@md':{
        fontSize:'14px'
    }
})

const C = styled("span", {

})

const Right = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
})


