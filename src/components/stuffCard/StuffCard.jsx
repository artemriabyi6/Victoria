import { Link } from 'react-router-dom';
import './stuffCard.css'

const StuffCard = ({ name, position, img, id }) => {
    return ( 
        <div className="stuff-page-coach-card" data-aos="fade-up">
        <Link to={`/stuff/${id}`}>
        <div className="introduce">
        <h4>{name}</h4>
        <p>{position}</p>
        </div>
        <div className="coach-card-img-box">
            <img src={img} alt="Player" />
        </div>
        </Link>
    </div>
     );
}
 
export default StuffCard;