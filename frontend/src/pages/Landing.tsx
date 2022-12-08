import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { styled, globalStyles } from "../stitches.config";
import api from "../services/api";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import banner from "../../public/banner01.jpg";

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

    useEffect(() => {

        async function loadProducts() {
            const response = await api.get<ProductProps[]>("/product");

            setProducts(response.data);
        };

        loadProducts();

    }, []);

    globalStyles();

    return (
        <>
            <Header />
            <SearchBar />
            <Image src={banner} />
            <Container>
                {
                    products.map(product => {
                        return <Product key={product.id} productName={product.name} price={product.price} sellerName={product.seller.name} id={product.id} url={product.image} />
                    })
                }

            </Container>
        </>
    )

}

const Container = styled("div", {
    padding: 30,
    paddingTop: 250,
    display: "grid",
    gridColumnGap: "10px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridRowGap: "20px",
    justifyItems: "center",

    "@sm": {
        display: "flex",
        flexDirection: "column",
        padding: 20,
    }
})

const Image = styled("div", {
    backgroundImage: "linear-gradient(to top, rgba(221,221,221,1), rgba(221,221,221,0), rgba(0,0,0,0)), url(../../public/banner01.jpg)",
  height: 400,
  backgroundSize:"cover",
    width: "100%",
    position: "absolute",
    zIndex: -1,

    "@sm": {
    display: "none"
}
})