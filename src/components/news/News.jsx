import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './news.css'
import images from '../../utils/images';
import { useMediaQuery } from "react-responsive";

const News = () => {

     useEffect(() => {
            AOS.init({ duration: 500, once: false, mirror: true });
        
            AOS.refresh();
        
          }, []);

    const isMobile = useMediaQuery({maxWidth: 767})

    return ( 
      
        
            isMobile ? (
                <div className="container">
                <div className="news-box">
                    <h2>Новини</h2>
                    <a href="">Переглянути всі новини</a>
                </div>
                <div className="news-cards-box" data-aos="fade-up">
                <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
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
            ) : (
                <div className="container">
                <div className="news-box">
                    <h2>Новини</h2>
                    <a href="">Переглянути всі новини</a>
                </div>
                <div className="news-cards-box" data-aos="fade-up">
                <div className="big-card-box" data-aos="fade-up">
                        <div className='big-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='big-card-description'>
                            <p className='date-time'>14.04.2025, 10:47</p>
                            <p className='event'>{`"Вікторія" - "Прикарпаття" (Фото)`}</p>
                        </div>
                    </div>
                    <div className="big-card-box" data-aos="fade-up">
                        <div className='big-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='big-card-description'>
                            <p className='date-time'>14.04.2025, 10:47</p>
                            <p className='event'>{`"Вікторія" - "Прикарпаття" (Фото)`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
                        <div className='regular-card'>
                        <img src={images.slide2} alt="" />
                        </div>
                        <div className='regular-card-description'>
                        <p className='date-time'>15.04.2025, 16:23</p>
                        <p className='event'>{`"Вікторія" - "Прикарпаття": Cтатистика матчу`}</p>
                        </div>
                    </div>
                    <div className="regular-card-box" data-aos="fade-up">
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
            )
        
      
     );
}
 
export default News;