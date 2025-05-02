import Header from "../../components/header/Header";
import MatchBox from "../../components/matchBox/MatchBox";
import Footer from "../../components/footer/Footer";
import images from "../../utils/images";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './calendar.css'

const Calendar = () => {


 useEffect(() => {
        AOS.init({ duration: 500, once: false, mirror: true });
    
        AOS.refresh();
    
      }, []);

    return ( 
        <>
            <Header/>
            <section className="calendar">
            <div className="container">
                    <div className="title-match">
                    <div data-aos="fade-up"><MatchBox logo2={images.logos.podillia} city2={'Хмельницький'} team2={'Поділля'} date={'10'} 
                                                      time={'13:00'} competiton={images.leagueLogo} tour={'24'}
                                                      logo1={images.logo} city1={'Суми'} team1={'Вікторія'}
                                                       /></div>
                    </div>
                  

                    <h1 className="text-white">Матчі</h1>

                    <div className="matches-box">
                  <div data-aos="fade-up"><MatchBox logo1={images.logos.nyva} city1={'Тернопіль'} team1={'Нива'} date={'27'} 
                                                      time={'13:30'} competiton={images.leagueLogo} tour={'23'}
                                                      logo2={images.logo} city2={'Суми'} team2={'Вікторія'} /></div>
                   <div data-aos="fade-up"><MatchBox logo1={images.logos.mynai} city1={'Ужгород'} team1={'Минай'} date={'19'} 
                                                      time={'13:00'} competiton={images.leagueLogo} tour={'22'}
                                                      logo2={images.logo} city2={'Суми'} team2={'Вікторія'}
                                                       /></div>
                   <div data-aos="fade-up"><MatchBox logo2={images.logos.prykarpatia} city2={'Івано-Франківськ'} team2={'Прикарпаття'} date={'11'} 
                                                      time={'13:30'} competiton={images.leagueLogo} tour={'21'}
                                                      logo1={images.logo} city1={'Суми'} team1={'Вікторія'}
                                                      /></div>
                    <div data-aos="fade-up"><MatchBox logo1={images.logos.podillia} city1={'Хмельницький'} team1={'Подділя'} date={'6'} 
                                                      time={'12:00'} competiton={images.leagueLogo} tour={'20'}
                                                      logo2={images.logo} city2={'Суми'} team2={'Вікторія'}
                                                      /></div>
                   <div data-aos="fade-up"><MatchBox logo1={images.logos.bukovyna} city1={'Чернівці'} team1={'Буковина'} date={'1'} 
                                                      time={'13:00'} competiton={images.leagueLogo} tour={'19'} 
                                                      logo2={images.logo} city2={'Суми'} team2={'Вікторія'}
                                                      /></div>
                    </div>

                </div>
            </section>
            <div data-aos="fade-up"><Footer /></div>
        </>
     );
}
 
export default Calendar;