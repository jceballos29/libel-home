import React from "react";
import "../../css/sections/Featured.css";
import Feature from "../cards/Feature";

import feature1 from "../../images/featured/feature1.png";
import feature2 from "../../images/featured/feature2.png";
import feature3 from "../../images/featured/feature3.png";

import avatar1 from "../../images/featured/Avatar.png";
import avatar2 from "../../images/featured/Avatar1.png";
import avatar3 from "../../images/featured/Avatar2.png";

// import Slider from "react-slick";

const Featured = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 2000,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     arrow: true,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true,
    //             },
    //         },
    //         {
    //             breakpoint: 850,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 infinite: true,
    //                 dots: true,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true,
    //                 arrow: false,
    //             },
    //         },
    //     ],
    // };

    return (
        <div className="Featured">
            <div className="featured-container">
                <div className="featured-header">
                    <h1>DESTACADOS</h1>
                    <div className="featured-navigation">
                        <button>CURSOS</button>
                        <button>MASTERS</button>
                        <button>3D CAMP</button>
                    </div>
                </div>
                <div className="featured-body">
                    {/* <Slider {...settings}>
                        <Feature
                            image={feature1}
                            avatar={avatar2}
                            name={"Ricardo"}
                            title={"Personaje para Animación"}
                        />
                        <Feature
                            image={feature2}
                            avatar={avatar1}
                            name={"Mariana"}
                            title={"Personaje en Blender"}
                        />
                        <Feature
                            image={feature3}
                            avatar={avatar3}
                            name={"Lauryu"}
                            title={"Armas en Blender para videojuegos AAA"}
                        />
                        <Feature
                            image={feature1}
                            avatar={avatar2}
                            name={"Ricardo"}
                            title={"Personaje para Animación"}
                        />
                        <Feature
                            image={feature2}
                            avatar={avatar1}
                            name={"Mariana"}
                            title={"Personaje en Blender"}
                        />
                        <Feature
                            image={feature3}
                            avatar={avatar3}
                            name={"Lauryu"}
                            title={"Armas en Blender para videojuegos AAA"}
                        />
                    </Slider> */}
                    <Feature
                        image={feature1}
                        avatar={avatar2}
                        name={"Ricardo"}
                        title={"Personaje para Animación"}
                    />
                    <Feature
                        image={feature2}
                        avatar={avatar1}
                        name={"Mariana"}
                        title={"Personaje en Blender"}
                    />
                    <Feature
                        image={feature3}
                        avatar={avatar3}
                        name={"Lauryu"}
                        title={"Armas en Blender para videojuegos AAA"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Featured;
