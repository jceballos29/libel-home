import React from "react";
import "../../css/sections/Results.css";

import libel from "../../images/logo_dot.png";

import ResultS from "../cards/ResultS";
import ResultM from "../cards/ResultM";
import ResultL from "../cards/ResultL";

import blender from "../../images/results/Imagen 9.png";
import avatars from "../../images/results/Group 4225.png";

import image1 from "../../images/results/Ellipse 230 (Mask).png";
import image2 from "../../images/results/Rectangle 419.png";
import image3 from "../../images/results/Rectangle 420.png";
import image4 from "../../images/results/Ellipse 231.png";

import tech1 from "../../images/professional3d/Imagen 8.png";

import decoration1 from "../../images/04.png";
import decoration2 from "../../images/01.png";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Results = () => {
    return (
        <div className="Results">
            <div className="result-container">
                <img
                    src={decoration1}
                    alt="Decoration 1"
                    className="decoration-1"
                />
                <img
                    src={decoration2}
                    alt="Decoration 2"
                    className="decoration-2"
                />
                <div className="results-information">
                    <div className="results-title">
                        <img src={libel} alt="libel" />
                        <h1>
                            RESULTADOS
                            <br />
                            DE ALUMNOS
                        </h1>
                    </div>
                    <div className="results-text">
                        <h2>
                            !Obtén <br />
                            <span className="color">
                                sorprendentes
                                <br />
                                resultados
                            </span>{" "}
                            en <br />
                            corto tiempo¡
                        </h2>
                        <p>
                            No necesitas de conocimientos
                            <br />
                            previos. Solamente tienes que
                            <br />
                            adaptarte a{" "}
                            <span className="underline">
                                nuestro plan de estudios.
                            </span>
                        </p>
                        <a href="/" className="know-more">
                            QUIERO SABER MÁS{" "}
                            <IoChevronForward style={{ marginLeft: "2px" }} />
                        </a>
                    </div>
                </div>
                <div className="results-cards">
                    <div className="result-column1">
                        <img src={avatars} alt="Group" />
                        <ResultL
                            image={image1}
                            author={"Rodrigo"}
                            title={"Oso Espacial"}
                            points={"5.0"}
                            tech={tech1}
                        />
                    </div>
                    <div className="result-column2">
                        <ResultS
                            image={image2}
                            author={"Gilbert"}
                            title={"Videojuegos AAA"}
                        />
                        <ResultS
                            image={image3}
                            author={"Runyo"}
                            title={"Animación"}
                        />
                    </div>
                    <div className="result-column3">
                        <ResultM
                            image={image4}
                            author={"LauraRt"}
                            title={"Rigging para Videojuegos"}
                            points={"4.8"}
                        />
                        <div className="blender">
                            <img src={blender} alt="blender" />
                        </div>
                    </div>
                </div>
                <div className="results-cards-mobile">
                    <div className="mobile-cards">
                        <div className="mobile-card-previous">
                            <button className="mobile-card-button" style={{paddingRight: 5}}>
                                <IoChevronBack />
                            </button>
                        </div>
                        <div className="mobile-card">
                            <ResultL
                                image={image1}
                                author={"Rodrigo"}
                                title={"Oso Espacial"}
                                points={"5.0"}
                                tech={tech1}
                            />
                        </div>
                        <div className="mobile-card-next">
                            <button className="mobile-card-button" style={{paddingLeft: 5}}>
                                <IoChevronForward />
                            </button>
                        </div>
                    </div>
                    <div className="mobile-student">
                        <img src={avatars} alt="Group" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
