import { useEffect } from 'react';
import './carouselCard.css'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


const CarouselCard = ({name, position, number, img, id}) => {
    

     useEffect(() => {
        AOS.init({ duration: 500, once: false, mirror: true });
    
        AOS.refresh();
      }, []);

      

    return ( 
        <div className="carousel-card" data-aos="fade-up">
            <Link to={`/player/${id}`}>
            <div className="introduce">
            <h4>{name}</h4>
            <p>{position}</p>
            </div>
            <p className="number">{number}</p>
            <div className="carousel-card-img-box">
                <img src={img} alt="" />
            </div>
            </Link>
        </div>
     );
}
 
export default CarouselCard;