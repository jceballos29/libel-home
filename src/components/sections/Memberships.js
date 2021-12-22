import React from 'react'
import "../../css/sections/Memberships.css";

import { IoChevronForward } from "react-icons/io5";
import Membership from '../cards/Membership';

import membershipImage1 from '../../images/memberships/Enmascarar grupo 7.png'
import membershipImage2 from "../../images/memberships/Enmascarar grupo 6.png";
import membershipImage3 from "../../images/memberships/Enmascarar grupo 5.png";
import membershipImage4 from "../../images/memberships/Enmascarar grupo 4.png";

import membershipIcon1 from '../../images/memberships/diamond.png'
import membershipIcon2 from "../../images/memberships/first.png";
import membershipIcon3 from "../../images/memberships/second.png";
import membershipIcon4 from "../../images/memberships/third.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Memberships = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="Memberships">
            <div className="memberships-header">
                <h1>
                    NUESTRAS
                    <br />
                    MEMBRESÍAS
                </h1>
                <a href="/">
                    VER TODAS{" "}
                    <IoChevronForward style={{ marginLeft: "10px" }} />
                </a>
            </div>
            <div className="memberships-cards">
                <Slider {...settings}>
                    <Membership
                        image={membershipImage1}
                        icon={membershipIcon1}
                        name={"Packs"}
                        price={"99.00"}
                        courses={31}
                        url={"/"}
                    />
                    <Membership
                        image={membershipImage2}
                        icon={membershipIcon2}
                        name={"Recargada"}
                        price={"199.00"}
                        courses={42}
                        url={"/"}
                    />
                    <Membership
                        image={membershipImage3}
                        icon={membershipIcon3}
                        name={"Black"}
                        price={"149.00"}
                        courses={23}
                        url={"/"}
                    />
                    <Membership
                        image={membershipImage4}
                        icon={membershipIcon4}
                        name={"Intermedio"}
                        price={"49.00"}
                        courses={7}
                        url={"/"}
                    />
                </Slider>
                {/* <Membership
                    image={membershipImage1}
                    icon={membershipIcon1}
                    name={"Packs"}
                    price={"99.00"}
                    courses={31}
                    url={"/"}
                />
                <Membership
                    image={membershipImage2}
                    icon={membershipIcon2}
                    name={"Recargada"}
                    price={"199.00"}
                    courses={42}
                    url={"/"}
                />
                <Membership
                    image={membershipImage3}
                    icon={membershipIcon3}
                    name={"Black"}
                    price={"149.00"}
                    courses={23}
                    url={"/"}
                />
                <Membership
                    image={membershipImage4}
                    icon={membershipIcon4}
                    name={"Intermedio"}
                    price={"49.00"}
                    courses={7}
                    url={"/"}
                /> */}
            </div>
        </div>
    );
}

export default Memberships
