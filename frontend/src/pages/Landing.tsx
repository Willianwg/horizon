import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { styled, globalStyles } from "../stitches.config";
import api from "../services/api";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";
import { Slider } from "../components/Slider";

type SellerProps = {
    name: string;
}

type ProductProps = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    sellerId: number;
    seller: SellerProps;
    createdAt: string;
    updatedAt: string;
}

export function LandingPage() {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const example = [{
        id: 12,
        name: "produto",
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
        };

        loadProducts();

    }, []);

    globalStyles();

    return (
        <Page>
            <Header />
            <SearchBar />
            <Slider/>
            <Container>

                {
                    products.length === 0 && (example.map(product => {
                        return <Product key={product.id} productName={product.name} price={product.price} sellerName={product.seller.name} id={product.id} url={product.image} />
                    }))
                }

                {
                    products.map(product => {
                        return <Product key={product.id} productName={product.name} price={product.price} sellerName={product.seller.name} id={product.id} url={product.image} />
                    })
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
