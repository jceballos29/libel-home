import React from "react";
import "../../css/sections/Courses.css";

import libel from "../../images/logo_dot.png";
import Course from "../cards/Course";

import courses from "../../utils/courses";

const Courses = () => {

    return (
        <div className="Courses">
            <div className="courses-header">
                <div className="courses-title">
                    <img src={libel} alt="libel" />
                    <h1>
                        RESULTADOS
                        <br />
                        DE ALUMNOS
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
        </div>
    );
};

export default Courses;
