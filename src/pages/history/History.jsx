import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import images from "../../utils/images";
import './history.css'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const History = () => {

useEffect(() => {
    AOS.init({ duration: 500, once: false, mirror: true });

    AOS.refresh();
  }, []);


    return ( 
        <>
            <Header/>
            <section className="history-section">
                <div className="container">
                    <h1>Історія клубу</h1>
                </div>
            </section>
            <div className="container">
                <div className="achivment-block" data-aos="fade-up">
                
                     <h2>Досягнення</h2>
                     <div className="achivment-block-wrapper">
                     <div className="achivment-block-card">
                          <div className="achivment-block-card-img-box">
                            <img src={images.uplCup} alt="Cup" />
                          </div> 
                          <h4 className="achivment-name">Кубок Аматорів</h4> 
                          <p className="achivment-year">Чемпіон 2020</p>
                    </div>
                    <div className="achivment-block-card">
                          <div className="achivment-block-card-img-box">
                            <img src={images.uplCup} alt="Cup" />
                          </div> 
                          <h4 className="achivment-name">Кубок Аматорів</h4> 
                          <p className="achivment-year">Чемпіон 2020</p>
                    </div>
                    <div className="achivment-block-card">
                          <div className="achivment-block-card-img-box">
                            <img src={images.uplCup} alt="Cup" />
                          </div> 
                          <h4 className="achivment-name">Кубок Аматорів</h4> 
                          <p className="achivment-year">Чемпіон 2020</p>
                    </div>
                    <div className="achivment-block-card">
                          <div className="achivment-block-card-img-box">
                            <img src={images.uplCup} alt="Cup" />
                          </div> 
                          <h4 className="achivment-name">Кубок Аматорів</h4> 
                          <p className="achivment-year">Чемпіон 2020</p>
                    </div>
                     </div>
                   
                </div>
                <div className="club-history" data-aos="fade-up">
                    <h3>Історія клубу</h3>
                    <div className="club-history-wrapper">
                        <div className="club-history-card" data-aos="fade-up">
                            <img src={images.arturHistory} alt="" />
                            <div className="club-history-card-description">
                                <p className="club-history-card-text">Перехід від аматорського футболу</p>
                            </div>
                        </div>
                        <div className="club-history-card" data-aos="fade-up">
                            <img src={images.arturHistory} alt="" />
                            <div className="club-history-card-description">
                                <p className="club-history-card-text">Перехід від аматорського футболу</p>
                            </div>
                        </div>
                        <div className="club-history-card" data-aos="fade-up">
                            <img src={images.arturHistory} alt="" />
                            <div className="club-history-card-description">
                                <p className="club-history-card-text">Перехід від аматорського футболу</p>
                            </div>
                        </div>
                        <div className="club-history-card" data-aos="fade-up">
                            <img src={images.arturHistory} alt="" />
                            <div className="club-history-card-description">
                                <p className="club-history-card-text">Перехід від аматорського футболу</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default History;