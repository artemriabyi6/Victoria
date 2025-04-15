import images from "../../utils/images";

const Match = ( { date, time, tour, month } ) => {
    return ( 
        <>
               <div className='match-box'>
                        <h3 className='title'>Перша Ліга. {tour} Тур</h3>
                        <div className='event-info flex justify-around'>
                            <div className='event-left-block'>
                            <img src={images.logo} alt="Logo" />
                            </div>
                            <div className='event-central-block'>
                                    <p className='event-date'>{date} {month}</p>
                                    <p className='event-time'>{time}:00</p>
                            </div>
                            <div className='event-right-block'>
                            <img src={images.logo} alt="Logo" />
                            </div>
                        </div>
                    </div>       
        </>
     );
}
 
export default Match;