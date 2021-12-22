import React, { useEffect, useState } from 'react'
import '../css/Question.css'
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Question = ({question, answer}) => {

    const [show, setShow] = useState(false)
    const [display, setDisplay] = useState("none")

    useEffect(() => {
        if (show) {
            setDisplay("flex")
        } else {
            setDisplay("none")
        }
    }, [show])

    return (
        <div className="Question">
            <div
                className="question-header"
                onClick={() => {
                    setShow(!show);
                }}
            >
                <h4>{question}</h4>
                {show ? (
                    <IoChevronUp
                        style={{ color: "#000000", fontSize: "18px" }}
                    />
                ) : (
                    <IoChevronDown
                        style={{ color: "#000000", fontSize: "18px" }}
                    />
                )}
            </div>
            <div className='question-body' style={{display:`${display}`}}>
                {answer}
            </div>
        </div>
    );
}

export default Question
