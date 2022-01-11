import React, { useState } from "react";
import "../../css/sections/Benefits.css";

import line from "../../images/line.png";
import Benefit from "../cards/Benefit";

import decoration from "../../images/10.png";

const benefits = {
    first: [
        {
            title: "puedes aprender desde cero",
            body: "No importa en el nivel en el que te encuentres, nosotros te guiamos en tu proceso de aprendizaje.",
        },
        {
            title: "maestros especializados",
            body: "Especialista en cada una de las áreas y con experiencia en la industria.",
        },
        {
            title: "aprende totalmente online",
            body: "Disfruta de las opciones que tenemos para ti: Acompañamiento en vivo, clases en video con feedback en vivo, o aprende a tu ritmo.",
        },
    ],
    second: [
        {
            title: "Keep simple",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "less is more",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ],
};

const Benefits = () => {
    const [state, setState] = useState("first");
    console.log(benefits[state]);

    const active = { backgroundColor: "#6000de" };

    return (
        <div className="Benefits">
            <div className="benefits-container">
                <h1 className="title">
                    <span>BENEFICIOS</span>
                    <br />
                    LIBEL ACADEMY
                    <img src={line} alt="decoration Line" />
                </h1>
                <div className="benefits-content">
                    {benefits[state].map((benefit, index) => (
                        <Benefit
                            key={index}
                            title={benefit.title}
                            body={benefit.body}
                        />
                    ))}
                </div>
                <div className={`benefits-nav`}>
                    <button
                        style={
                            state === "first"
                                ? active
                                : null
                        }
                        onClick={() => {
                            setState("first");
                        }}
                    ></button>
                    <button
                        style={
                            state === "second"
                                ? active
                                : null
                        }
                        onClick={() => {
                            setState("second");
                        }}
                    ></button>
                </div>
                <img
                    src={decoration}
                    alt="Decoration Benefits"
                    className="benefits-decoration"
                />
            </div>
        </div>
    );
};

export default Benefits;
