import { useParams } from "react-router-dom";
import { team } from "../team/Team";
import { stuff } from '../stuff/Stuff';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './playerPage.css'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const PlayerPage = () => {


     useEffect(() => {
        AOS.init({ duration: 500, once: false, mirror: true });
    
        AOS.refresh();
      }, []);


    const { id } = useParams()
    const player = id >= 25 ? stuff.find(p => p.id === parseInt(id)) :team.find(p => p.id === parseInt(id))

    if(!player) {
        return <div>Undefined player...</div>
    }

    return ( 
        <>
        <Header/>
        <section className="player-page-section">
            <div className="container">
            <h1>{player.name}</h1>
            <p>{player.position}</p>
            <div className="player-page-section-img-box">
                <img src={player.img} alt="player" />
            </div>
            </div>
        </section>
        <div className="container">
        <div className="player-page-info"  data-aos="fade-up">
            
            <div className="citizenship">
                <p className="player-page-info-first-row">Громадянство</p>
                <p className="player-page-info-second-row">{player.citizenship}</p>
            </div>
            <div className="height">
            <p className="player-page-info-first-row">Зріст</p>
            <p className="player-page-info-second-row">{player.height}</p>
            </div>

            <div className="weight">
            <p className="player-page-info-first-row">Вага</p>
            <p className="player-page-info-second-row">{player.weight}</p>
            </div>

            <div className="birthday">
            <p className="player-page-info-first-row">Дата народження</p>
            <p className="player-page-info-second-row">{player.birthday}</p>
            </div>

            <div className="age">
            <p className="player-page-info-first-row">Вік</p>
            <p className="player-page-info-second-row">{player.age}</p>
            </div>
        </div>
        </div>
     
        <Footer/>
        </>
     );
}
 
export default PlayerPage;