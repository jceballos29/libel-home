import React from "react";
import "../css/Footer.css";

import logo from "../images/logo.png";

import facebook from "../images/005-facebook.png";
import twitch from "../images/020-twitch.png";
import instagram from "../images/008-instagram.png";
import whatsapp from "../images/023-whatsapp.png";
import linkedin from "../images/009-linkedin.png";
import discord from "../images/Trazado 57.png";
import youtube from "../images/025-youtube.png";
import telegram from "../images/018-telegram.png";
import Register from "./buttons/Register";

import decoration from '../images/01_resize.png'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container">
                <img
                    className="decoration"
                    src={decoration}
                    alt="Decoration Footer"
                />
                <div className="footer-information">
                    <ul className="footer-list">
                        <li>cursos</li>
                        <li>masters</li>
                        <li>escuela zbrush</li>
                        <li>escuela blender</li>
                        <li>escuela rigging</li>
                        <li>escuela ilustración</li>
                        <li>licencias</li>
                        <li>resultados</li>
                    </ul>
                    <div className="contact">
                        <img src={logo} alt="Libel Academy" />
                        <h4>CONTACTO</h4>
                        <Register />
                        <p>
                            <a href="/">Trabaja con nosotros</a> <br /> o{" "}
                            <a href="/">solicita ayuda</a>
                        </p>
                        <div className="social-networks">
                            <a href="/">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="/">
                                <img src={twitch} alt="" />
                            </a>
                            <a href="/">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="/">
                                <img src={whatsapp} alt="" />
                            </a>
                            <a href="/">
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="/">
                                <img src={discord} alt="" />
                            </a>
                            <a href="/">
                                <img src={youtube} alt="" />
                            </a>
                            <a href="/">
                                <img src={telegram} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="foo-container">
                    <p style={{ color: "#8f8f8f", textAlign: "left" }}>
                        Términos y condiciones
                    </p>
                    <p style={{ color: "#ffffff" }}>&copy; Copyright 2022</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
