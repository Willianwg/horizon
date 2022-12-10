import { useContext, useEffect, useState } from "react";
import { styled, globalStyles } from "../stitches.config";
import { Header } from "../components/Header";
import { useApi } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Button } from "../styles/styles";
import { apiUrl } from '../ApiUrl';
import { AuthContext } from "../contexts/AuthContext";

type Product = {
    name:string;
    description:string;
    price:number;
    image:string;
}

export function Details() {
    const auth = useContext(AuthContext);
    const api = useApi();
    const navigate = useNavigate();
    const location = useLocation();
    const id = getIdFromUrl();

    const [product, setProduct] = useState<Product>({
        name:'Test',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut nulla, reprehenderit aspernatur deleniti earum. Quidem veritatis, nemo vero dolorem hic cupiditate dolor ad debitis placeat libero, facilis nihil at!',
        price:149.99,
        image:'testimage.jpg'
    });

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

    function handleBuy(){
        if(!auth.user){
            return navigate("/login");
        }
        navigate(`${location.pathname}/checkout`)
    }


    globalStyles();

    return (
        <Page>
            <Header />
            <Container>
                <Image style={{ backgroundImage:`url(${ apiUrl +'/files/'+ product.image })` }} />
                <Right>
                    <ProductName>{ product.name }</ProductName>
                    <Stars>
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                    </Stars>
                    <Price><C>R$</C>{ product.price }</Price>
                    <Description>
                        <p>Descrição:</p>
                        <p>{ product.description }</p>
                    </Description>
                    <Buttons>
                    <Button color="dark" onClick={ handleBuy }>Comprar</Button>
                    <Button>Adicionar ao carrinho</Button>
                    </Buttons>
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
    backgroundSize:"cover",
    backgroundRepeat:"repeat",
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

const Buttons = styled("div", {
    width:"100%"
})

const Right = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "@sm":{
        width:"100%",
    }
})


