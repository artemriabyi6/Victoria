import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import images from "../../utils/images";
import  "./stuff.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Stuff = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: false, mirror: true });

    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <section className="stuff-page-title-box">
        <div className="container">
          <h1>Тренерський штаб</h1>
          <div className="stuff-page-stuff-box" data-aos="fade-up">
          <div className="stuff-page-positions goalkeeper" data-aos="fade-up">
              <h2>Тренерський склад</h2>
              <div className="stuff-page-player-cards" data-aos="fade-up">
                <div className="stuff-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                <div className="stuff-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                
              </div>
            </div>
            <div className="stuff-page-positions goalkeeper" data-aos="fade-up">
              <h2>Адміністративний склад</h2>
              <div className="stuff-page-player-cards">
                <div className="stuff-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                <div className="stuff-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default Stuff;