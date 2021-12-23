import React from "react";
import "../../css/sections/Header.css";
import SeeResults from "../buttons/SeeResults";

import decoration from "../../images/03.png";
import banner from "../../images/header1.png";

import Tag from "../buttons/Tag";

import line from "../../images/line.png";
// import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Header = () => {
    return (
        <div className="Header">
            <div className="header-container">
                <img
                    src={decoration}
                    alt="Decoration banner"
                    className="decoration1"
                />

                <div className="header-information">
                    {/* <div className="slider-control">
                        <IoArrowBack />
                        <IoArrowForward />
                    </div> */}
                    <h1>
                        <span>
                            Academia
                            <br />
                        </span>
                        <span>online</span> aprende 3d desde cero
                        <img
                            src={line}
                            alt="header-underline"
                            className="header-underline"
                        />
                    </h1>
                    <p>
                        Aprende a tu ritmo o con clases en vivo y logra{" "}
                        <span>resultados increíbles.</span>
                    </p>
                    <SeeResults />
                </div>
                <div className="header-image">
                    <img
                        src={banner}
                        alt="Banner Header"
                        className="header-banner"
                    />
                </div>
            </div>
            <div className="header-tags">
                <Tag name={"COMPRA TU LICENCIA ZBRUSH"} />
                <Tag name={"ESCUELA DOMINA BLENDER"} />
                <Tag name={"ESCUELA ZBRUSH"} />
                <Tag name={"3D CAMP"} />
            </div>
        </div>
    );
};

export default Header;
