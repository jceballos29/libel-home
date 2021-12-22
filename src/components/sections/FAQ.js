import React from "react";
import "../../css/sections/FAQ.css";

import imagen from "../../images/faq_banner.png";
import Question from "../Question";

import line from "../../images/line.png";

const FAQ = () => {
    return (
        <div className="FAQ">
            <h1 className="faq-title">
                preguntas<span>frecuentes</span>
                <img src={line} alt="underline" />
            </h1>
            <div className="faq-content">
                <div className="faq-images" style={{backgroundImage:`url(${imagen})`}}>
                    {/* <img src={imagen} alt="FAQ Banner" /> */}
                </div>
                <div className="faq-container">
                    <div className="faq-questions">
                        <Question
                            question={"¿Cómo es la metodología de estudio?"}
                            answer={
                                <>
                                    <p>
                                        Tenemos tres metodologías:
                                        <br />
                                        <span>En vivo</span>,{" "}
                                        <span>Escuelas</span>,{" "}
                                        <span>A tu ritmo</span>
                                    </p>
                                    <p>
                                        Consulta lo que ofrecemos en cada
                                        metodología dando click en el menú
                                        superior "Oferta académica".
                                    </p>
                                </>
                            }
                        />
                        <Question
                            question={"¿Dónde se ven las clases?"}
                            answer={
                                <>
                                    <p>
                                        Tenemos tres metodologías:
                                        <br />
                                        <span>En vivo</span>,{" "}
                                        <span>Escuelas</span>,{" "}
                                        <span>A tu ritmo</span>
                                    </p>
                                    <p>
                                        Consulta lo que ofrecemos en cada
                                        metodología dando click en el menú
                                        superior "Oferta académica".
                                    </p>
                                </>
                            }
                        />
                        <Question
                            question={"¿Qué tipo de certificado se obtiene?"}
                            answer={
                                <>
                                    <p>
                                        Tenemos tres metodologías:
                                        <br />
                                        <span>En vivo</span>,{" "}
                                        <span>Escuelas</span>,{" "}
                                        <span>A tu ritmo</span>
                                    </p>
                                    <p>
                                        Consulta lo que ofrecemos en cada
                                        metodología dando click en el menú
                                        superior "Oferta académica".
                                    </p>
                                </>
                            }
                        />
                        <Question
                            question={"¿Qué medios de pago tienen?"}
                            answer={""}
                        />
                        <Question
                            question={"¿Tienen planes de financiación?"}
                            answer={""}
                        />
                    </div>
                    <div className="faq-advisory">
                        <a href="/">SOLICITAR ASESORÍA</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
