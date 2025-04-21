import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PlayerCard from "../../components/playerCard/PlayerCard";
import images from "../../utils/images";
import "./team.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const team = [
  {
    name: 'Артем Рябий',
    position: 'Півзахисник',
    number: '29',
    img: images.player,
    id: 1,
  },
  {
    name: 'Максим Бойко',
    position: 'Півзахисник',
    number: '18',
    img: images.player,
    id: 2,
  },
  {
    name: 'Олександр Лебеденко',
    position: 'Півзахисник',
    number: '11',
    img: images.player,
    id: 3,
  },
  {
    name: 'Данило Книш',
    position: 'Півзахисник',
    number: '10',
    img: images.player,
    id: 4,
  }
]

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
          <div className="team-page-team-box" data-aos="fade-up">
            <div className="team-page-positions goalkeeper">
              <h2>Воротарі</h2>
              <div className="team-page-player-cards" data-aos="fade-up">
              {team.map((item) => (
                <PlayerCard
                key={item.id}
                position={item.position}
                number={item.number}
                id={item.id}
                name={item.name}
                img={item.img}
                team={team}
                />
              ) )}
              </div>
            </div>
            <div className="team-page-positions goalkeeper" data-aos="fade-up">
              <h2>Захисники</h2>
              <div className="team-page-player-cards">
              {team.map((item) => (
                <PlayerCard
                key={item.id}
                position={item.position}
                number={item.number}
                id={item.id}
                name={item.name}
                img={item.img}
                team={team}
                />
              ) )}
              </div>
            </div>
            <div className="team-page-positions goalkeeper" data-aos="fade-up">
              <h2>Півзахисники</h2>
              <div className="team-page-player-cards">
              {team.map((item) => (
                <PlayerCard
                key={item.id}
                position={item.position}
                number={item.number}
                id={item.id}
                name={item.name}
                img={item.img}
                team={team}
                />
              ) )}
              </div>
            </div>
            <div className="team-page-positions goalkeeper" data-aos="fade-up">
              <h2>Нападники</h2>
              <div className="team-page-player-cards">
              {team.map((item) => (
                <PlayerCard
                key={item.id}
                position={item.position}
                number={item.number}
                id={item.id}
                name={item.name}
                img={item.img}
                team={team}
                />
              ) )}
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
