import React, { useState } from "react";
import "../../css/sections/Header.css";
import SeeResults from "../buttons/SeeResults";

import decoration from "../../images/03.png";

import Tag from "../buttons/Tag";

import line from "../../images/line.png";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import banners from "../../utils/bannersHeaders";

const Header = () => {
    const [banner, setBanner] = useState(0);

    const nextBanner = () => {
        setBanner(banner === banners.length - 1 ? 0 : banner + 1);
    };

    const previousBanner = () => {
        setBanner(banner === 0 ? banners.length - 1 : banner - 1);
    };

   

    return (
        <div className="Header">
            <div className="header-container">
                <img
                    src={decoration}
                    alt="Decoration banner"
                    className="decoration1"
                />

                <div className="header-information">
                    <div className="header-slider-control">
                        <IoArrowBack
                            className="header-button"
                            onClick={() => {
                                previousBanner();
                            }}
                        />
                        <div className="header-slider-nav">
                            <button
                                className="header-slider-dot"
                                onClick={() => {
                                    setBanner(0);
                                }}
                            ></button>
                            <button
                                className="header-slider-dot"
                                onClick={() => {
                                    setBanner(1);
                                }}
                            ></button>
                            <button
                                className="header-slider-dot"
                                onClick={() => {
                                    setBanner(2);
                                }}
                            ></button>
                        </div>
                        <IoArrowForward
                            className="header-button"
                            onClick={() => {
                                nextBanner();
                            }}
                        />
                    </div>
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
                        onClick={() => {nextBanner()}}
                        src={banners[banner].image}
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
