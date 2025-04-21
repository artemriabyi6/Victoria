import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import images from "../../utils/images";
import "./team.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Calendar = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: false, mirror: true });

    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <section className="team-page-title-box">
        <div className="container">
          <h1>Основний склад</h1>
          <div className="team-page-team-box">
            <div className="team-page-positions goalkeeper">
              <h2>Воротарі</h2>
              <div className="team-page-player-cards">
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                
              </div>
            </div>
            <div className="team-page-positions goalkeeper">
              <h2>Захисники</h2>
              <div className="team-page-player-cards">
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                
              </div>
            </div>
            <div className="team-page-positions goalkeeper">
              <h2>Півзахисники</h2>
              <div className="team-page-player-cards">
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                
              </div>
            </div>
            <div className="team-page-positions goalkeeper">
              <h2>Воротарі</h2>
              <div className="team-page-player-cards">
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                <div className="team-page-player-card">
                  <div>
                    <h3>Олександр Литвиненко</h3>
                    <p>Воротар</p>
                  </div>
                  <p className="player-number">1</p>
                </div>
                <div className="team-page-player-card">
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

export default Calendar;
