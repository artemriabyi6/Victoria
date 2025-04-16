import images from "../../utils/images";
import './footer.css'


const Footer = () => {
    return ( 
        <footer>
            <div className="container">
            <div className="top-row">
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
            <div className="bottom-row">
                    <ul>
                        <li ><a href="" className="chapter">Meню</a></li>
                        <li><a href="">Новини</a></li>
                        <li><a href="">Фото галереї</a></li>
                        <li><a href="">Відео</a></li>
                        <li><a href="">Квитки</a></li>
                    </ul>
                    <ul>
                        <li ><a href="" className="chapter">Клуб</a></li>
                        <li><a href="">Керівництво</a></li>
                        <li><a href="">Історія</a></li>
                        <li><a href="">Символіка</a></li>
                        <li><a href="">Стадіон</a></li>
                        <li><a href="">Контакти</a></li>
                    </ul>
                    <ul>
                        <li ><a href="" className="chapter">Команда</a></li>
                        <li><a href="">Головна команда</a></li>
                        <li><a href="">Тренерський штаб</a></li>
                    </ul>
                    <ul>
                        <li ><a href="" className="chapter">Матчі</a></li>
                        <li><a href="">Всі матчі</a></li>
                        <li><a href="">Турнірна таблиця Першої ліги</a></li>
                        <li><a href="">Новини</a></li>
                        <li><a href="">Новини</a></li>
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
        </footer>
 
     );
}
 
export default Footer;