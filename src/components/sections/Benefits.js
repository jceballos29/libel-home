import React from 'react'
import '../../css/sections/Benefits.css'

import line from '../../images/line.png'
import Benefit from '../cards/Benefit';

import decoration from '../../images/10.png'

const Benefits = () => {
    return (
        <div className="Benefits">
            <div className="benefits-container">
                <h1 className="title">
                    <span>BENEFICIOS</span>
                    <br />
                    LIBEL ACADEMY
                    <img src={line} alt="decoration Line" />
                </h1>
                <div className="benefits-content">
                    <Benefit
                        title={"puedes aprender desde cero"}
                        body={
                            "No importa en el nivel en el que te encuentres, nosotros te guiamos en tu proceso de aprendizaje."
                        }
                    />
                    <Benefit
                        title={"maestros especializados"}
                        body={
                            "Especialista en cada una de las áreas y con experiencia en la industria."
                        }
                    />
                    <Benefit
                        width={400}
                        title={"aprende online desde cualquier lugar del mundo"}
                        body={
                            "Disfruta de las opciones que tenemos para ti: Acompañamiento en vivo, clases en video con feedback en vivo, o aprende a tu ritmo."
                        }
                    />
                </div>
                <img
                    src={decoration}
                    alt="Decoration Benefits"
                    className="benefits-decoration"
                />
            </div>
        </div>
    );
}

export default Benefits
