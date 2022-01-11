import React, { useState } from "react";
import "../../css/sections/Courses.css";

import libel from "../../images/logo_dot.png";
import Course from "../cards/Course";

import courses from "../../utils/courses";
import Tag from "../buttons/Tag";

const Courses = () => {
    const [buttonNav, setButtonNav] = useState({
        cursos: 0,
        master: 0,
        camp: 0,
    });
    const [filter, setFilter] = useState("");
    const filtered = courses.filter((course) => course.tag === filter);

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
                        <button
                            className={buttonNav.cursos ? "bActive" : ""}
                            onClick={() => {
                                if (buttonNav.cursos === 0) {
                                    setButtonNav({
                                        cursos: 1,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                } else {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("");
                                }
                            }}
                        >
                            CURSOS
                        </button>
                        <button
                            className={buttonNav.master ? "bActive" : ""}
                            onClick={() => {
                                if (buttonNav.master === 0) {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 1,
                                        camp: 0,
                                    });
                                    setFilter("master");
                                } else {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("");
                                }
                            }}
                        >
                            MASTERS
                        </button>
                        <button
                            className={buttonNav.camp ? "bActive" : ""}
                            onClick={() => {
                                if (buttonNav.camp === 0) {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 1,
                                    });
                                    setFilter("camp");
                                } else {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("");
                                }
                            }}
                        >
                            3D CAMP
                        </button>
                    </div>
                </div>
                <div className="courses-body">
                    {filter
                        ? filtered.map((course, index) => (
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
                          ))
                        : courses.map((course, index) => (
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
                    <Tag
                        name={"VER MAS"}
                        link="https://cursos.libelacademy.org/"
                        
                    />
                </div>
            </div>
        </div>
    );
};

export default Courses;
