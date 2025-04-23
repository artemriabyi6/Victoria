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
    name: 'Анатолій Безсметрний',
    position: 'Головний тренер',
    age: '56',
    id: 25,
    citizenship: `Україна`,
    birthday: '17.03.1969',
    height: '185 см',
    weight: '80 кг',
    img: images.player,
  },
  {
    name: 'Анатолій Безсметрний',
    position: 'Головний тренер',
    age: '56',
    id: 25,
    img: images.player,
  },
  {
    name: 'Анатолій Безсметрний',
    position: 'Головний тренер',
    age: '56',
    id: 25,
    img: images.player,
  },
  {
    name: 'Анатолій Безсметрний',
    position: 'Головний тренер',
    age: '56',
    id: 25,
    img: images.player,
  },
  {
    name: 'Анатолій Безсметрний',
    position: 'Головний тренер',
    age: '56',
    id: 25,
    img: images.player,
  },
  {
    name: 'Анатолій Безсметрний',
    position: 'Головний тренер',
    age: '56',
    id: 25,
    img: images.player,
  },
  {
    name: 'Анатолій Безсметрний',
    position: 'Головний тренер',
    age: '56',
    id: 25,
    img: images.player,
  },
  {
    name: 'Анатолій Безсметрний',
    position: 'Головний тренер',
    age: '56',
    id: 25,
    img: images.player,
  }
] 

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
          <div className="stuff-page-positions" data-aos="fade-up">
              <h2>Тренерський склад</h2>
              <div className="stuff-page-player-cards" data-aos="fade-up">
                  {stuff.map((item) => (
                    <StuffCard key={item.id} name={item.name} img={item.img} position={item.position} id={item.id} data-aos="fade-up"/>
                  ))}          
                
              </div>
            </div>
            <div className="stuff-page-positions " data-aos="fade-up">
              <h2>Адміністративний склад</h2>
              <div className="stuff-page-player-cards">
              {stuff.map((item) => (
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