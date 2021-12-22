import React from 'react'
import '../../css/cards/ResultM.css'

import { IoAdd } from "react-icons/io5";

import star from '../../images/results/Star.png' 

// import image from "../../images/results/Ellipse 230 (Mask).png";
// const title = "Oso Espacial";
// const author = "Gilbert";
// const points = 4.8

const ResultM = ({image, author, title, points}) => {
    return (
        <div className="ResultM">
            <div className="score">
                <img src={star} alt="start" style={{ marginRight: 4 }} />
                {points}
            </div>
            <div className="result-image">
                <div className="cover-image">
                    <a href="/" className="result-more">
                        <IoAdd />
                    </a>
                </div>
                <img src={image} alt="Result" />
            </div>
            <div className="results-author">
                <h3>{title}</h3>
                <p>@{author}</p>
            </div>
        </div>
    );
}

export default ResultM
