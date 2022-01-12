import React, { useRef } from "react";
import "../../css/sections/Convert3DPro.css";

import zbrush from "../../images/professional3d/Imagen 1.png";
import maya from "../../images/professional3d/Imagen 4.png";
import marmoset from "../../images/professional3d/Imagen 5.png";
import iclone from "../../images/professional3d/Imagen 6.png";
import blender from "../../images/professional3d/Imagen 7.png";
import substance from "../../images/professional3d/Imagen 8.png";

import line from "../../images/underline.png";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const technologiesList = [ zbrush, maya, marmoset, iclone, blender, substance]

const Convert3DPro = () => {
    const sliderRef = useRef(null);
    console.log(sliderRef.current);

    return (
        <div className="Convert3DPro">
            <div className="convert-container">
                <div className="convert-title">
                    <h1>
                        CONVIÉRTETE EN <span>PROFESIONAL 3D</span>
                        <img
                            className="convert-underline"
                            src={line}
                            alt="underline"
                        />
                    </h1>
                </div>
                <div className="convert-text">
                    <p>
                        Alcanza el nivel que deseas en menos de un año. Aprende
                        y descubre sobre la industria creativa mas rentable del
                        mercado.
                    </p>
                </div>
                <div className="convert-technologies">
                    <div className="technologies-previous">
                        <button className="technologies-button">
                            <IoChevronBack />
                        </button>
                    </div>
                    <div className="technologies">
                        <div className="technologies-desktop">
                            <img src={zbrush} alt="zbrush" />
                            <img src={blender} alt="blender" />
                            <img src={substance} alt="substance" />
                            <img src={maya} alt="maya" />
                            <img src={marmoset} alt="marmoset" />
                            <img src={iclone} alt="iclone" />
                        </div>
                        <div className="technologies-mobile">
                            <img src={technologiesList[0]} alt="technologies" />
                        </div>
                    </div>
                    <div className="technologies-next">
                        <button className="technologies-button">
                            <IoChevronForward />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Convert3DPro;
