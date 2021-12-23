import React from "react";
import "../../css/sections/Counseling.css";

import decorationLeft from "../../images/counseling_decoration_1.png";
import decorationRight from "../../images/counseling_decoration_2.png";

const Counseling = () => {
    return (
        <div className="Counseling">
            <div className="counseling-container">
                <img
                    src={decorationLeft}
                    alt="Decoration Left"
                    className="decoration-left"
                />
                <h1>
                    Asiste a una <span>asesoría</span> grupal gratuita
                    <span>.</span>
                </h1>
                <div className="counseling-content">
                    <a href="/" className="agenda">
                        AGENDA ASESORÍA
                    </a>
                    <a href="/" className="write">
                        ESCRÍBENOS AHORA
                    </a>
                    <p>Te ayudamos y orientamos en tu curva de aprendizaje.</p>
                </div>
                <img
                    src={decorationRight}
                    alt="Decoration Right"
                    className="decoration-right"
                />
            </div>
        </div>
    );
};

export default Counseling;
