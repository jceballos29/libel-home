import React from "react";
import "../../css/sections/AuthorizedDealer.css";

import zbrush from "../../images/logo_zbrush.png";
import Tag from "../buttons/Tag";

import decoration from '../../images/authorized_decoration.png'

const AuthorizedDealer = () => {
    return (
        <div className="AuthorizedDealer">
            <div className="authorized-text">
                <p>
                    Somos{" "}
                    <span>
                        distribuidores
                        <br />
                        autorizados
                    </span>{" "}
                    de
                </p>
            </div>
            <div className="logo-zbrush">

            <img src={zbrush} alt="Logo ZBRUSH" />
            </div>
            <div className="get-now">
                <Tag name={"obtener ahora"} />
            </div>
            <img src={decoration} alt="Authorized Decoration" className="authorized-decoration"/>
        </div>
    );
};

export default AuthorizedDealer;
