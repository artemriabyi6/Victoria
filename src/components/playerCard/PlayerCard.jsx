import './playerCard.css'
import { Link } from 'react-router-dom';
const PlayerCard = ({name, position, number, img, id}) => {
    return ( 
        <div className="team-page-player-card">
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