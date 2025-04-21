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
                    <div data-aos="fade-up"><MatchBox logo={images.logo} city={'Ужгород'} team={'Минай'} date={'19'} 
                                                      time={'13:30'} competiton={images.leagueLogo} tour={'14'} /></div>
                    </div>
                  

                    <h1 className="text-white">Матчі</h1>

                    <div className="matches-box">
                    <div data-aos="fade-up"><MatchBox logo={images.logo} city={'Ужгород'} team={'Минай'} date={'19'} 
                                                      time={'13:30'} competiton={images.leagueLogo} tour={'14'} /></div>
                    <div data-aos="fade-up"><MatchBox /></div>
                    <div data-aos="fade-up"><MatchBox /></div>
                    <div data-aos="fade-up"><MatchBox /></div>
                    <div data-aos="fade-up"><MatchBox /></div>
                    <div data-aos="fade-up"><MatchBox /></div>
                    <div data-aos="fade-up"><MatchBox /></div>
                    </div>

                </div>
            </section>
            <div data-aos="fade-up"><Footer /></div>
        </>
     );
}
 
export default Calendar;