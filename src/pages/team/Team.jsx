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
    citizenship: `Україна`,
    age: '23',
    birthday: '04.08.2001',
    height: '181 см',
    weight: '74 кг'
  },
  {
    name: 'Станіслав Шарай',
    position: 'Півзахисник',
    number: '15',
    img: images.player,
    id: 23,
    citizenship: `Україна`,
    age: '27',
    birthday: '04.08.1998',
    height: '170 см',
    weight: '70 кг'
  },
  {
    name: 'Микола Ярош',
    position: 'Воротар',
    number: '22',
    img: images.player,
    id: 22,
    citizenship: `Україна`,
    age: '20',
    birthday: '04.08.2004',
    height: '187 см',
    weight: '85 кг'
  },
  {
    name: 'Максим Бойко',
    position: 'Півзахисник',
    number: '18',
    img: images.player,
    id: 2,
    citizenship: `Україна`,
    age: '20',
    birthday: '04.08.2004',
    height: '181 см',
    weight: '74 кг'
  },
  {
    name: 'Олександр Лебеденко',
    position: 'Півзахисник',
    number: '11',
    img: images.player,
    id: 3,
    citizenship: `Україна`,
    age: '35',
    birthday: '04.08.1990',
    height: '173 см',
    weight: '64 кг'
  },
  {
    name: 'Данило Книш',
    position: 'Півзахисник',
    number: '10',
    img: images.player,
    id: 4,
    citizenship: `Україна`,
    age: '29',
    birthday: '04.08.1996',
    height: '175 см',
    weight: '70 кг'
  },
  {
    name: 'Георгій Клімов',
    position: 'Воротар',
    number: '10',
    img: images.player,
    id: 21,
    citizenship: `Україна`,
    age: '24',
    birthday: '04.08.2000',
    height: '197 см',
    weight: '90 кг'
  },
  {
    name: 'Олександр Литвиненко',
    position: 'Воротар',
    number: '1',
    img: images.player,
    id: 20,
    citizenship: `Україна`,
    age: '33',
    birthday: '04.08.1992',
    height: '192 см',
    weight: '80 кг'
  },
  {
    name: 'Максим Євпак',
    position: 'Нападник',
    number: '10',
    img: images.player,
    id: 19,
    citizenship: `Україна`,
    age: '22',
    birthday: '04.08.2002',
    height: '188 см',
    weight: '83 кг'
  },
  {
    name: 'Назарій Нич',
    position: 'Нападник',
    number: '10',
    img: images.player,
    id: 18,
    citizenship: `Україна`,
    age: '25',
    birthday: '04.08.1999',
    height: '175 см',
    weight: '75 кг'
  },
  {
    name: 'Олександр Чернов',
    position: 'Півзахисник',
    number: '10',
    img: images.player,
    id: 17,
    citizenship: `Україна`,
    age: '29',
    birthday: '04.08.2002',
    height: '175 см',
    weight: '70 кг'
  },
  {
    name: 'Ярослав Богунов',
    position: 'Півзахисник',
    number: '10',
    img: images.player,
    id: 16,
    citizenship: `Україна`,
    age: '31',
    birthday: '04.08.1994',
    height: '168 см',
    weight: '63 кг'
  },
  {
    name: 'Сулейман Сейтхалілов',
    position: 'Півзахисник',
    number: '7',
    img: images.player,
    id: 15,
    citizenship: `Україна`,
    age: '23',
    birthday: '04.08.2002',
    height: '177 см',
    weight: '75 кг'
  },
  {
    name: 'Артем Шпирьонок',
    position: 'Півзахисник',
    number: '10',
    img: images.player,
    id: 14,
    citizenship: `Україна`,
    age: '22',
    birthday: '04.08.2002',
    height: '179 см',
    weight: '77 кг'
  },
  {
    name: 'Руслан Паламар',
    position: 'Півзахисник',
    number: '8',
    img: images.player,
    id: 13,
    citizenship: `Україна`,
    age: '32',
    birthday: '04.08.1993',
    height: '175 см',
    weight: '70 кг'
  },
  {
    name: 'Денис Долінський',
    position: 'Півзахисник',
    number: '10',
    img: images.player,
    id: 12,
    citizenship: `Україна`,
    age: '27',
    birthday: '04.08.1998',
    height: '185 см',
    weight: '75 кг'
  },
  {
    name: 'Денис Рябий',
    position: 'Захисник',
    number: '28',
    img: images.player,
    id: 11,
    citizenship: `Україна`,
    age: '23',
    birthday: '04.08.1996',
    height: '182 см',
    weight: '77 кг'
  },
  {
    name: 'Юрій Кравчук',
    position: 'Захисник',
    number: '5',
    img: images.player,
    id: 10,
    citizenship: `Україна`,
    age: '32',
    birthday: '04.08.1993',
    height: '197 см',
    weight: '87 кг'
  },
  {
    name: 'Максим Сасовський',
    position: 'Захисник',
    number: '45',
    img: images.player,
    id: 9,
    citizenship: `Україна`,
    age: '23',
    birthday: '19.08.2001',
    height: '184 см',
    weight: '83 кг'
  },
  {
    name: 'Євген Корохов',
    position: 'Захисник',
    number: '10',
    img: images.player,
    id: 8,
    citizenship: `Україна`,
    age: '27',
    birthday: '04.08.1998',
    height: '179 см',
    weight: '80 кг'
  },
  {
    name: 'Дмитро Ульянов',
    position: 'Захисник',
    number: '10',
    img: images.player,
    id: 7,
    citizenship: `Україна`,
    age: '31',
    birthday: '04.08.1994',
    height: '175 см',
    weight: '73 кг'
  },
  {
    name: 'Юрій Дудник',
    position: 'Захисник',
    number: '4',
    img: images.player,
    id: 6,
    citizenship: `Україна`,
    age: '22',
    birthday: '04.08.2002',
    height: '195 см',
    weight: '82 кг'
  },
  {
    name: 'Артур Новотрясов',
    position: 'Захисник',
    number: '16',
    img: images.player,
    id: 5,
    citizenship: `Україна`,
    age: '33',
    birthday: '04.08.1992',
    height: '185 см',
    weight: '80 кг'
  },
]

const Calendar = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: false, mirror: true });

    AOS.refresh();
  }, []);

  const goalkeepers = team.filter((item) => item.position === 'Воротар')
  const defenders = team.filter((item) => item.position === 'Захисник')
  const midfielders = team.filter((item) => item.position === 'Півзахисник')
  const strikers = team.filter((item) => item.position === 'Нападник')


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
              {goalkeepers.map((item) => (
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
              {defenders.map((item) => (
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
              {midfielders.map((item) => (
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
              {strikers.map((item) => (
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
