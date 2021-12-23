import React from "react";
import "../../css/sections/Courses.css";

import libel from "../../images/logo_dot.png";
import Course from "../cards/Course";

import courses from "../../utils/courses";
import Tag from "../buttons/Tag";

const Courses = () => {
    return (
        <div className="Courses">
            <div className="courses-container">
                <div className="courses-header">
                    <div className="courses-title">
                        <img src={libel} alt="libel" />
                        <h1>
                            NUESTROS
                            <br />
                            PROGRAMAS
                        </h1>
                    </div>
                    <div className="courses-navigation">
                        <button>CURSOS</button>
                        <button>MASTERS</button>
                        <button>3D CAMP</button>
                    </div>
                </div>
                <div className="courses-body">
                    {courses.map((course, index) => (
                        <Course
                            key={index}
                            avatar={course.avatar}
                            image={course.image}
                            info={course.info}
                            price={course.price}
                            software={course.software}
                            start={course.start}
                            title={course.title}
                        />
                    ))}
                </div>
                <div className="courses-see-more">
                    <Tag name={"VER MAS"}/>
                </div>
            </div>
        </div>
    );
};

export default Courses;
