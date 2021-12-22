import React from 'react'
import '../../css/buttons/Register.css'
import { IoChevronForward } from "react-icons/io5";


const Register = () => {
    return (
        <div className="Register">
            <h4>CREAR CUENTA</h4>
            <div className="register-button">
                <IoChevronForward style={{ marginLeft: "2px" }} />
            </div>
        </div>
    );
}

export default Register
