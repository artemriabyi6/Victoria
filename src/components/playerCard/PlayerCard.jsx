import { useEffect } from 'react';
import './playerCard.css'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


const PlayerCard = ({name, position, number, img, id}) => {
    

     useEffect(() => {
        AOS.init({ duration: 500, once: false, mirror: true });
    
        AOS.refresh();
      }, []);

      

    return ( 
        <div className="team-page-player-card" data-aos="fade-up">
            <Link to={`/player/${id}`}>
            <div className="introduce">
            <h4>{name}</h4>
            <p>{position}</p>
            </div>
            <p className="number">{number}</p>
            <div className="player-card-img-box">
                <img src={img} alt="Player" />
            </div>
            </Link>
        </div>
     );
}
 
export default PlayerCard;