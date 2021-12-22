import React from 'react'
import '../../css/cards/Benefit.css'

const Benefit = ({title, body, width=300}) => {
    return <div className="Benefit" style={{width:`${width}px`}}>
        <div className='benefit-header'>{title}:</div>
        <div className='benefit-body'>{body}</div>
    </div>;
}

export default Benefit
