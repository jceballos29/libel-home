import React from 'react'
import '../../css/sections/Convert3DPro.css'

import zbrush from '../../images/professional3d/Imagen 1.png'
import maya from '../../images/professional3d/Imagen 4.png'
import marmoset from '../../images/professional3d/Imagen 5.png'
import iclone from '../../images/professional3d/Imagen 6.png'
import blender from '../../images/professional3d/Imagen 7.png'
import substance from '../../images/professional3d/Imagen 8.png'

import line from "../../images/underline.png"

const Convert3DPro = () => {
    return (
        <div className="Convert3DPro">
            <div className="convert-container">
                <div className="convert-title">
                    <h1>
                        CONVIÉRTETE EN <span>PROFESIONAL 3D</span>
                        <img className='convert-underline' src={line} alt="underline"/>
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
                    <img src={zbrush} alt="zbrush" />
                    <img src={blender} alt="blender" />
                    <img src={substance} alt="substance" />
                    <img src={maya} alt="maya" />
                    <img src={marmoset} alt="marmoset" />
                    <img src={iclone} alt="iclone" />
                </div>
            </div>
        </div>
    );
}

export default Convert3DPro
