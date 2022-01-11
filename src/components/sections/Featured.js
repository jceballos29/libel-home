import React, { useState } from "react";
import "../../css/sections/Featured.css";
import Feature from "../cards/Feature";

import features from "../../utils/features";

const Featured = () => {
    const [buttonNav, setButtonNav] = useState({
        cursos: 0,
        master: 0,
        camp: 0,
    });
    const [filter, setFilter] = useState("cursos");

    const filtered = features.filter((feature) => feature.tag === filter);
    
    return (
        <div className="Featured">
            <div className="featured-container">
                <div className="featured-header">
                    <h1>DESTACADOS</h1>
                    <div className="featured-navigation">
                        <button
                            className={buttonNav.cursos ? "fActive" : ""}
                            onClick={() => {
                                if (buttonNav.cursos === 0) {
                                    setButtonNav({
                                        cursos: 1,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                } else {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                }
                            }}
                        >
                            CURSOS
                        </button>
                        <button
                            className={buttonNav.master ? "fActive" : ""}
                            onClick={() => {
                                if (buttonNav.master === 0) {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 1,
                                        camp: 0,
                                    });
                                    setFilter("master");
                                } else {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                }
                            }}
                        >
                            MASTERS
                        </button>
                        <button
                            className={buttonNav.camp ? "fActive" : ""}
                            onClick={() => {
                                if (buttonNav.camp === 0) {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 1,
                                    });
                                    setFilter("camp");
                                } else {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                }
                            }}
                        >
                            3D CAMP
                        </button>
                    </div>
                </div>
                <div className="featured-body">
                    {filtered.map((feature, index) => (
                        <Feature
                            key={index}
                            image={feature.image}
                            avatar={feature.avatar}
                            name={feature.name}
                            title={feature.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;
