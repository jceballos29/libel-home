import React from "react";
import "../../css/sections/Header.css";
import SeeResults from "../buttons/SeeResults";

import decoration from "../../images/03.png";
import banner from "../../images/img banner.png";

import Tag from "../buttons/Tag";

// import {
//     CarouselProvider,
//     Slider,
//     Slide,
//     ButtonBack,
//     ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { Carousel } from "react-responsive-carousel";

const Header = () => {

        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        // };
    return (
        <div className="Header">
            <img
                src={decoration}
                alt="Decoration banner"
                className="decoration1"
            />
            <div className="header-information">
                <h1>
                    <span>
                        Academia
                        <br />
                    </span>
                    <span>online</span> aprende 3d desde cero
                </h1>
                <p>
                    Aprende a tu ritmo o con clases en vivo y logra{" "}
                    <span>resultados increíbles.</span>
                </p>
                <SeeResults />
            </div>
            <div className="header-tags">
                <Tag name={"COMPRA TU LICENCIA ZBRUSH"} />
                <Tag name={"ESCUELA DOMINA BLENDER"} />
                <Tag name={"ESCUELA ZBRUSH"} />
                <Tag name={"3D CAMP"} />
                {/* <CarouselProvider
                    naturalSlideWidth={200}
                    naturalSlideHeight={100}
                    totalSlides={3}
                    interval={1000}
                    orientation="horizontal"
                >
                    <Slider>
                        <Slide index={0}>
                            <Tag name={"COMPRA TU LICENCIA ZBRUSH"} />
                        </Slide>
                        <Slide index={1}>
                            <Tag name={"ESCUELA DOMINA BLENDER"} />
                        </Slide>
                        <Slide index={2}>
                            <Tag name={"ESCUELA ZBRUSH"} />
                        </Slide>
                        <Slide index={3}>
                            <Tag name={"3D CAMP"} />
                        </Slide>
                    </Slider>
                </CarouselProvider> */}
                {/* <Slider {...settings} width="100%">
                    <Tag name={"COMPRA TU LICENCIA ZBRUSH"} />
                    <Tag name={"ESCUELA DOMINA BLENDER"} />
                    <Tag name={"ESCUELA ZBRUSH"} />
                    <Tag name={"3D CAMP"} />
                </Slider> */}
            </div>
            <img src={banner} alt="Banner Header" className="header-banner" />
        </div>
    );
};

export default Header;
