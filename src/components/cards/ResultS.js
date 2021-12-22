import React from 'react'
import '../../css/cards/ResultS.css'

import { IoAdd } from "react-icons/io5";

// import image from '../../images/results/Ellipse 230 (Mask).png'

// const title = "Oso Espacial"
// const author = "Gilbert"

const ResultS = ({image, title, author}) => {
    return (
        <div className="ResultS">
            <div className="result-image">
                <div className="cover-image">
                    <a href='/' className="result-more">
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

export default ResultS
