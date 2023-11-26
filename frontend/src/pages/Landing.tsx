import { useState, useEffect } from "react";
import { Product, ProductProps } from "../components/Product";
import { styled, globalStyles } from "../stitches.config";
import api from "../services/api";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";
import { Slider } from "../components/Slider";
import Loader from "../components/Loader";

export function LandingPage() {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [isLoading, setLoading] = useState(true);
    const example = [{
        id: 12,
        name: "Produto Teste",
        price: 50.99,
        description: "descricao teste",
        sellerId: 12,
        seller: { name: "Willian" },
        createdAt: "wksodjdk",
        updatedAt: "sjdkdjdisi",
        image: "product-test-fake-url.jpg"
    },];

    useEffect(() => {

        async function loadProducts() {
            const response = await api.get<ProductProps[]>("/product");

            setProducts(response.data);
            setLoading(false)
        };

        loadProducts();

    }, []);

    globalStyles();

    if(isLoading) return (
    <Page>
        <Header />
        <SearchBar />
        <Loader />
        <Footer />
    </Page>
    )

    function renderProducts(){
        if(!products.length){
            return example.map(product => {
                return <Product key={product.id} data={ product } />
            })
        }

        return products.map(product => {
            return <Product key={product.id}  data={ product } />
        })
    }

    return (
        <Page>
            <Header />
            <SearchBar />
            <Slider/>
            <Container>

                {
                  renderProducts()
                }

            </Container>
            <Footer />
        </Page>
    )

}


const Page = styled("div", {
    overflow:"hidden",
    display:"flex",
    flexDirection:"column",
})

const Container = styled("div", {
    padding: 30,
    display: "grid",
    gridColumnGap: "10px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridRowGap: "20px",
    justifyItems: "center",
    position:"relative",
    bottom:170,
    maxWidth:1750,
    alignSelf:"center",

    "@sm": {
        display: "flex",
        flexDirection: "column",
        padding: 20,
        position:"static",
    }
})
