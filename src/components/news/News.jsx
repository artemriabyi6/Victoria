import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './news.css'
import images from '../../utils/images';
import { useMediaQuery } from "react-responsive";
import NewsCard from '../newsCard/NewsCard';

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
                    <NewsCard img={images.slide1} date='08.04.2025' time='12:07' desc='Вікторія" - "Поділля": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.arturHistory} date='27.04.2025' time='11:23' desc='Вікторія" - "Нива Тернопіль": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.slide2} date='15.04.2025' time='16:23' desc='Вікторія" - "Прикарпаття": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.slide3} date='21.04.2025' time='18:41' desc='Вікторія" - "Минай": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.slide1} date='08.04.2025' time='12:07' desc='Вікторія" - "Поділля": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.arturHistory} date='27.04.2025' time='11:23' desc='Вікторія" - "Нива Тернопіль": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.slide3} date='21.04.2025' time='18:41' desc='Вікторія" - "Минай": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.slide1} date='08.04.2025' time='12:07' desc='Вікторія" - "Поділля": Cтатистика матчу' cardWidth={'regular'}/>
                </div>
            </div>
            ) : (
                <div className="container">
                <div className="news-box">
                    <h2>Новини</h2>
                    <a href="">Переглянути всі новини</a>
                </div>
                <div className="news-cards-box" data-aos="fade-up">
                    <NewsCard img={images.slide1} date='08.04.2025' time='12:07' desc='Вікторія" - "Поділля": Cтатистика матчу' cardWidth={'big'}/>
                    <NewsCard img={images.arturHistory} date='27.04.2025' time='11:23' desc='Вікторія" - "Нива Тернопіль": Cтатистика матчу' cardWidth={'big'}/>
                    <NewsCard img={images.slide2} date='15.04.2025' time='16:23' desc='Вікторія" - "Прикарпаття": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.slide3} date='21.04.2025' time='18:41' desc='Вікторія" - "Минай": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.slide1} date='08.04.2025' time='12:07' desc='Вікторія" - "Поділля": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.arturHistory} date='27.04.2025' time='11:23' desc='Вікторія" - "Нива Тернопіль": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.slide3} date='21.04.2025' time='18:41' desc='Вікторія" - "Минай": Cтатистика матчу' cardWidth={'regular'}/>
                    <NewsCard img={images.slide1} date='08.04.2025' time='12:07' desc='Вікторія" - "Поділля": Cтатистика матчу' cardWidth={'regular'}/>
                </div>
            </div>
            )
        
      
     );
}
 
export default News;