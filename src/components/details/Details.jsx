import './details.css'
// import images from '../../utils/images'
import Match from '../matchCard/MatchCard';

const Details = () => {
    return ( 
        <>
        <div className="details-container">
                <h2>Календар матчів</h2>
                <div className='matches-wrapper'> 
                        <Match tour="24" date={19} month='квітня' time={16} />
                        <Match tour="25" date={27} month='квітня' time={12} />
                        <Match tour="26" date={10} month='травня' time={13} />

                </div>
        </div>
        </>
     );
}
 
export default Details;