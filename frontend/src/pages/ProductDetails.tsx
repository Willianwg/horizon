import { useContext, useEffect, useState } from "react";
import { styled, globalStyles } from "../stitches.config";
import { Header } from "../components/Header";
import { useApi } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Button } from "../styles/styles";
import { apiUrl } from '../ApiUrl';
import { AuthContext } from "../contexts/AuthContext";
import { Footer } from "../components/Footer";
import LoaderComponent from "../components/Loader";

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
    const [isLoading, setLoading] = useState(true);

    const [product, setProduct] = useState<Product>({
        name:'Test',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut nulla, reprehenderit aspernatur deleniti earum. Quidem veritatis, nemo vero dolorem hic cupiditate dolor ad debitis placeat libero, facilis nihil at!',
        price:149.99,
        image:'product-test-fake-url.jpg'
    });

    useEffect(() => {
        window.scrollTo(0,0);
        async function loadProduct() {
            const data = await api.getProductDetails(id);

            setProduct(data);
            setLoading(false);
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

    if(isLoading)
        return (
            <Page>
                <Header />
                <LoaderComponent />
                <Footer/>
            </Page>
        )

    return (
        <Page>
            <Header />
            <Container>
                <Image src={apiUrl +'/files/'+ product.image}/>
                <Right>
                    <div>
                    <ProductName>{ product.name }</ProductName>
                    <Stars>
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                        <AiFillStar color="orange" />
                    </Stars>
                    </div>
                    <Price>
                        { 
                            Number(product.price).toLocaleString('pt-BR', { 
                                style: 'currency',
                                currency: 'BRL' ,
                                minimumFractionDigits: 2, 
                                maximumFractionDigits: 2
                            })
                        }
                    </Price>
                    <DescriotionContainer>
                        <Description>Descrição:</Description>
                        <Description>{ product.description }</Description>
                    </DescriotionContainer>
                    <Buttons>
                    <Button color="dark" onClick={ handleBuy }>Comprar</Button>
                    <Button color="light">Adicionar ao carrinho</Button>
                    </Buttons>
                </Right>
            </Container>
            <Footer/>
        </Page>
    )
}


const Stars = styled("div", {
    "@sm":{
        marginBottom:5,
    }
});

const Page = styled("div", {
    display: "flex",
    flexDirection: "column",
});

const Container = styled("div", {
    alignSelf:"center",
    width:"80%",
    boxSizing: "border-box",
    margin: 15,
    padding: 20,
    display: 'grid',
    gridTemplateColumns: '70fr 30fr',
    gridGap: '10px',
    background:"white",
    
    '@sm': {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width:"90%",
    }
});

const Image = styled("img", {
    width: '100%',
    objectFit:"contain",
    objectPosition:"center",
    height: 500,
    '@sm':{
        height:300,
    }
});

const ProductName = styled("h2", {
    margin:"9px 0px",
})


const Price = styled("h3", {
    margin:0,
    fontSize:'25pt',
    fontWeight:400,
})


const DescriotionContainer = styled("section", {
   marginBottom:20,
})
const Description = styled("p", {
    fontSize:16,
    fontWeight:500,
    color:'#666666',
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


