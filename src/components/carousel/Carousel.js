import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import casal3 from "../../assets/images/casal3.jpg";
import cafe1 from "../../assets/images/cafe1.jpeg";
import cafe2 from "../../assets/images/cafe2.jpeg";
import "./Carousel.css";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800, // Ajuste para um tempo mais confortável
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src={casal3} alt="Slide 1" className="carousel-img" />
                </div>
                <div>
                    <img src={cafe1} alt="Slide 2" className="carousel-img" />
                </div>
                <div>
                    <img src={cafe2} alt="Slide 3" className="carousel-img" />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;