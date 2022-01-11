import React from 'react'
import '../../css/buttons/Tag.css'
import { IoAdd } from "react-icons/io5";

const Tag = ({name, link="/"}) => {
    return (
        <a
            href={link}
            target={"_blank"}
            rel="noreferrer"
            className="Tag"
            style={{ fontSize: "16px" }}
        >
            <span style={{ margin: "0px 10px" }}>{name}</span>
            <div className="tag-button">
                <IoAdd />
            </div>
        </a>
    );
}

export default Tag
