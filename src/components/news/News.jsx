import './news.css'
import images from '../../utils/images';

const News = () => {
    return ( 
        <div className="container">
            <div className="news-box">
                <h2>Новини</h2>
                <a href="">Переглянути всі новини</a>
            </div>
            <div className="news-cards-box">
            <div className="big-card-box">
                    <div className='big-card'>
                    <img src={images.slide2} alt="" />
                    </div>
                    <div className='big-card-description'>
                        <p className='date-time'>14.04.2025, 10:47</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття" (Фото)`}</p>
                    </div>
                </div>
                <div className="big-card-box">
                    <div className='big-card'>
                    <img src={images.slide2} alt="" />
                    </div>
                    <div className='big-card-description'>
                        <p className='date-time'>14.04.2025, 10:47</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття" (Фото)`}</p>
                    </div>
                </div>
                <div className="regular-card-box">
                    <div className='regular-card'>
                    <img src={images.slide2} alt="" />
                    </div>
                    <div className='regular-card-description'>
                    <p className='date-time'>15.04.2025, 16:23</p>
                    <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                    </div>
                </div>
                <div className="regular-card-box">
                    <div className='regular-card'>
                    <img src={images.slide2} alt="" />
                    </div>
                    <div className='regular-card-description'>
                    <p className='date-time'>15.04.2025, 16:23</p>
                    <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                    </div>
                </div>
                <div className="regular-card-box">
                    <div className='regular-card'>
                    <img src={images.slide2} alt="" />
                    </div>
                    <div className='regular-card-description'>
                    <p className='date-time'>15.04.2025, 16:23</p>
                    <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                    </div>
                </div>
                <div className="regular-card-box">
                    <div className='regular-card'>
                    <img src={images.slide2} alt="" />
                    </div>
                    <div className='regular-card-description'>
                    <p className='date-time'>15.04.2025, 16:23</p>
                    <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                    </div>
                </div>
                <div className="regular-card-box">
                    <div className='regular-card'>
                    <img src={images.slide2} alt="" />
                    </div>
                    <div className='regular-card-description'>
                    <p className='date-time'>15.04.2025, 16:23</p>
                    <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                    </div>
                </div>
                <div className="regular-card-box">
                    <div className='regular-card'>
                    <img src={images.slide2} alt="" />
                    </div>
                    <div className='regular-card-description'>
                    <p className='date-time'>15.04.2025, 16:23</p>
                    <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default News;