import './matchBox.css'
import images from '../../utils/images';


const MatchBox = ( { competiton, logo1, tour, date , time, team1, city1, city2, logo2, team2} ) => {
    return ( 
        <>
           <div className='match-container'>
                <div className='left-block'>
                    <div className='icon-box'>
                        <img src={competiton} alt="" />
                    </div>
                    <div className='competition-tour'>
                        <p className='competition'>Перша ліга</p>
                        <p className='tour'>{tour} Тур</p>
                    </div>
                </div>
                <div className='central-block'>
                        <div className='team-block left'>
                            <div className='team-name'>
                                <h4 className='big-text'>{team1}</h4>
                                <p className='small-text'>{city1}</p>
                            </div>
                            <div className='team-logo'>
                                <img src={logo1} alt="" />
                            </div>
                        </div>

                        <div className='date-time text-center'>
                            <p className='date'>{date} Квітня</p>
                            <p className='text-center time'>{time}</p>
                        </div>


                        <div className='team-block right'>
                        <div className='team-logo'>
                            <img src={logo2} alt="" />
                        </div>
                        <div className='team-name'>
                            <h4 className='big-text'>{team2}</h4>
                            <p className='small-text'>{city2}</p>
                        </div>
                        </div>
                </div>
                <div className='right-block'>
                    <button>
                        Матч-центр
                    </button>
                </div>
           </div>
        </>
     );
}
 
export default MatchBox;