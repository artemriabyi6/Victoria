import './matchBox.css'
import images from '../../utils/images';


const MatchBox = ( { competiton, logo, tour, date , time, team, city} ) => {
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
                                <h4 className='big-text'>{team}</h4>
                                <p className='small-text'>{city}</p>
                            </div>
                            <div className='team-logo'>
                                <img src={images.logo} alt="" />
                            </div>
                        </div>

                        <div className='date-time text-center'>
                            <p className='date'>{date} Квітня</p>
                            <p className='text-center time'>{time}</p>
                        </div>


                        <div className='team-block right'>
                        <div className='team-logo'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='team-name'>
                            <h4 className='big-text'>Вікторія</h4>
                            <p className='small-text'>Суми</p>
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