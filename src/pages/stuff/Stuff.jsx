import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import images from "../../utils/images";
import  "./stuff.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StuffCard from "../../components/stuffCard/StuffCard";

export const stuff = [
  {
    coach: true,
    name: 'Анатолій Безсметрний',
    position: 'Головний тренер',
    age: '56',
    id: 24,
    citizenship: `Україна`,
    birthday: '17.03.1969',
    height: '185 см',
    weight: '80 кг',
    img: images.player,
  },
  {
    coach: true,
    name: 'Олександр Романенко',
    position: 'Помічник тренера',
    age: '40',
    id: 25,
    img: images.player,
  },
  {
    coach: true,
    name: 'Микола Лихолат',
    position: 'Аналітик',
    age: '40',
    id: 26,
    img: images.player,
  },
  {
    coach: true,
    name: 'Генадій Кватирук',
    position: 'Тренер воротарів',
    age: '52',
    id: 27,
    img: images.player,
  },
  {
    coach: true,
    name: 'Олег Бородай',
    position: 'Тренер з фізпідготовки',
    age: '31',
    id: 28,
    img: images.player,
  },
  {
    coach: false,
    name: 'Олексій Виноградов',
    position: 'Адміністратор',
    age: '40',
    id: 29,
    img: images.player,
  },
  {
    coach: false,
    name: 'Максим Калівод',
    position: 'Масажист',
    age: '26',
    id: 30,
    img: images.player,
  },
  {
    coach: false,
    name: 'Сергій Білоконенко',
    position: 'Головний лікар',
    age: '56',
    id: 31,
    img: images.player,
  },
  {
    coach: false,
    name: 'Анатолій Бойко',
    position: 'Генеральний директор',
    age: '56',
    id: 32,
    img: images.player,
  },
  {
    coach: false,
    name: 'Генадій Безсметрний',
    position: 'Фінансовий директор',
    age: '56',
    id: 33,
    img: images.player,
  },
  {
    coach: false,
    name: 'Олександр Терновенко',
    position: 'Помічник тренера',
    age: '56',
    id: 34,
    img: images.player,
  },
  {
    coach: false,
    name: 'Євген Тітаренко',
    position: 'Фотограф',
    age: '38',
    id: 35,
    img: images.player,
  },
  {
    coach: false,
    name: 'Євген Рева',
    position: 'Водій',
    age: '56',
    id: 34,
    img: images.player,
  }
] 

const Stuff = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: false, mirror: true });

    AOS.refresh();
  }, []);

  const coaches = stuff.filter(item => item.coach)
  const administration = stuff.filter(item => !item.coach)


  return (
    <>
      <Header />
      <section className="stuff-page-title-box">
        <div className="container">
          <h1>Тренерський штаб</h1>
          <div className="stuff-page-stuff-box" data-aos="fade-up">
          <div className="stuff-page-positions" data-aos="fade-up">
              <h2>Тренерський склад</h2>
              <div className="stuff-page-player-cards" data-aos="fade-up">
                  {coaches.map((item) => (
                    <StuffCard key={item.id} name={item.name} img={item.img} position={item.position} id={item.id} data-aos="fade-up"/>
                  ))}          
                
              </div>
            </div>
            <div className="stuff-page-positions " data-aos="fade-up">
              <h2>Адміністративний склад</h2>
              <div className="stuff-page-player-cards">
              {administration.map((item) => (
                    <StuffCard key={item.id} name={item.name} img={item.img} position={item.position} id={item.id}/>
                  ))}         
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