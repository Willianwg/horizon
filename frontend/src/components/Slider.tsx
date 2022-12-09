import { useEffect, useState } from "react";
import { styled } from "../stitches.config";

export function Slider() {
    const [currentIndex, setIndex] = useState(0);
    const images = [
        '../../public/banner01.jpg',
        '../../public/banner02.jpg'
    ];

    useEffect(() => {

        function up() {
            currentIndex === 0 ? setIndex(1) : setIndex(0);
        }

        setTimeout(up, 10000);
    }, [])

    return (
        <Container style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {
                images.map((image, index) => (
                    <Image key={index} style={{ backgroundImage: `linear-gradient(to top, rgba(221,221,221,1), rgba(221,221,221,0), rgba(0,0,0,0)), url(${image})` }} />
                ))
            }
        </Container>
    )
}


const Container = styled("div", {
    whiteSpace: "nowrap",
    transition: "transform 2s",
})

const Image = styled("div", {
    display: "inline-block",
    height: 400,
    backgroundSize: "cover",
    width: "100%",

    "@sm": {
        display: "none"
    }
})