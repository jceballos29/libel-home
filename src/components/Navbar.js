import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

import logo from "../images/logo.png";
import { IoSearch, IoCaretDown, IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [showMenu, setShowMenu] = useState("none");

    useEffect(() => {
        if (menu) {
            setShowMenu("flex");
        } else {
            setShowMenu("none");
        }
    }, [menu]);

    return (
        <div className="Navbar">
            <div className="container nav-container">
                <div className="logo">
                    <img src={logo} alt="Libel Academy" />
                </div>
                <div className="navigation">
                    <div className="search">
                        <IoSearch className="search-icon" />
                        <input type="text" name="search" placeholder="Buscar" />
                    </div>
                    <div className="shortcuts">
                        <a href="/">Licencias</a>
                        <a href="/" className="nav-courses">
                            Cursos{" "}
                            <IoCaretDown
                                style={{
                                    marginLeft: "10px",
                                    fontSize: "12 px",
                                }}
                            />
                        </a>
                    </div>
                </div>
                <div className="academy">
                    <a href="/" className="register">
                        Crear cuenta
                    </a>
                    <a href="/" className="login">
                        ENTRAR
                    </a>
                    <div className="menu-icon">
                        <IoMenu
                            onClick={() => {
                                setMenu(!menu);
                            }}
                        />
                    </div>
                </div>
                <ul className="menu-list" style={{ display: `${showMenu}` }}>
                    <div className="menu-academy">
                        <li>Crear cuenta</li>
                        <li>Entrar</li>
                    </div>
                    <div className="menu-shortcuts">
                        <li>Licencias</li>
                        <li>Cursos</li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
