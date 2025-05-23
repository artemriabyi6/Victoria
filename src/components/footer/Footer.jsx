import images from "../../utils/images";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import './footer.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileFooter from "../mobile components/footer/MobileFooter";



const Footer = () => {

     useEffect(() => {
        AOS.init({ duration: 500, once: false, mirror: true });
    
        AOS.refresh();
      }, []);

      const isMobile = useMediaQuery({ maxWidth: 767 });


    return ( 
        <footer>
            {isMobile ? (
                <MobileFooter/>
            ): (
                <div className="container">
                <div className="top-row" data-aos="fade-up">
                    <div className="logo-partner">
                        <div className="logo"><img src={images.logo} alt="Logo" /></div>
                        <div className="partner"><img src={images.puma} alt="Puma" /></div>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li>
                                <a href=""><img src={images.facebook} alt="Facebook" /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/fc_viktoria_official/" target='_blank'><img src={images.instagram} alt="Facebook" /></a>
                            </li>
                            <li>
                                <a href=""><img src={images.twitter} alt="Facebook" /></a>
                            </li>
                            <li>
                                <a href=""><img src={images.tikTok} alt="Facebook" /></a>
                            </li>
                            <li>
                                <a href=""><img src={images.youtube} alt="Facebook" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-row" data-aos="fade-up">
                        <ul>
                            <li ><Link className="chapter">Meню</Link></li>
                            <li><Link to="/photos">Фото галереї</Link></li>
                            <li><Link to="/photos">Відео</Link></li>
                        </ul>
                        <ul>
                            <li ><Link  className="chapter">Клуб</Link></li>
                            <li><Link to='/history'>Історія</Link></li>
                       
                        </ul>
                        <ul>
                            <li ><Link href="" className="chapter">Команда</Link></li>
                            <li><Link to="/team">Головна команда</Link></li>
                            <li><Link to="/stuff">Тренерський штаб</Link></li>
                        </ul>
                        <ul>
                            <li ><Link  className="chapter">Матчі</Link></li>
                            <li><Link to="/calendar">Всі матчі</Link></li>
                            <li><Link to="/table">Турнірна таблиця Першої ліги</Link></li>
                        </ul>
                </div>
                <div className="copyright">
                        <p>Copyright © ФК «Вікторія» Суми</p>
                        <div>
                        <p>Політика конфіденційності</p>
                        <p>Угода користувача</p>
                        </div>
                        <p>Розроблено</p>
                </div>
            </div>
            )}
           
        </footer>
 
     );
}
 
export default Footer;