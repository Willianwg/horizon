import { useEffect, useState } from "react";
import { styled } from "../stitches.config";

export function Slider() {
    const [currentIndex, setIndex] = useState(0);
    const [translate, setTranslate] = useState('0');
    const [transition, setTransition] = useState('transform 2s');

    const [images, setImages] = useState([
        '../../public/banner01.jpg',
        '../../public/banner02.jpg',
        '../../public/banner03.jpg'
    ]);

    useEffect(() => {

        const interval = setInterval(function () {
            next();
        }, 8000);

        return () => clearInterval(interval);
    }, [])

    function next() {
        setTranslate('-100%');
        setTimeout(reorganize, 2000);
    }


    function reorganize() {
        setImages(image => {
            const [first, second, third] = image;

            return [second, third, first];
        });
        setTransition('none');
        setTranslate("0");

        setTimeout(() => {
            setTransition('transform 2s');
        }, 1000);

    }


    return (
        <Container style={{ transform: `translateX(${translate})`, transition }}>
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
})

const Image = styled("div", {
    display: "inline-block",
    height: 400,
    backgroundSize: "cover",
    width: "100%",
    cursor:"pointer",

    "@sm": {
        display: "none"
    }
})