import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import casal3 from "../../assets/images/casal3.jpg";
import cafe1 from "../../assets/images/cafe1.jpeg";
import cafe2 from "../../assets/images/cafe2.jpeg";
import style from "./carousel.module.css"

export default function Carousel() {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 1000,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 1000,
    };

    return (
        <div className={style.div} >
            
            <Slider {...settings}>
                <div>
                    <img
                        src={casal3}
                        alt="Slide 1"
                        style={{ width: "100%", borderRadius: "10px", objectFit:"cover" }}
                    />
                </div>
                <div>
                    <img
                        src={cafe1}
                        alt="Slide 2"
                        style={{ width: "100%", borderRadius: "10px" }}
                    />
                </div>
                <div>
                    <img
                        src={cafe2}
                        alt="Slide 3"
                        style={{ width: "100%", borderRadius: "10px" }}
                    />
                </div>
            </Slider>
        </div>
    );
}
