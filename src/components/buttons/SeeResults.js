import React from 'react'
import '../../css/buttons/SeeResults.css'
import { IoChevronForward } from "react-icons/io5";


const SeeResults = () => {
    return <div className="SeeResults">
        ver resultados
        <div className='see-button'>
            <IoChevronForward style={{marginLeft:"2px"}}/>
        </div>
    </div>;
}

export default SeeResults
