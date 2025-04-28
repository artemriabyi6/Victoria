import images from "../../../utils/images";
import { Link } from "react-router-dom";

import { menuItems } from "../../header/Header";

import './mobileFooter.css'
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MobileFooter = () => {

    const [openIndex, setOpenIndex] = useState(null);
    

    useEffect(() => {
       AOS.init({ duration: 500, once: false, mirror: true });
   
       AOS.refresh();
     }, []);

    

     const toggleAccordion = (index) => {
       setOpenIndex(prev => (prev === index ? null : index));
     };



    return ( 
        <>
           <div className="container">
                <div className="top-row" data-aos="fade-up">
                    <div className="logo-partner">
                        <div className="logo"><img src={images.logo} alt="Logo" /></div>
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
      {menuItems.map((item, index) => (
        <div key={index} className="footer-accordion">
          <div
            className="footer-accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            {item.menuItem}
          </div>
          <ul className={`footer-submenu ${openIndex === index ? "open" : ""}`}>
            {item.subItems.map((subItem, subIndex) => (
              <li key={subIndex}>
                <Link to={subItem.path}>{subItem.item}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
                <div className="copyright">
                        <p>Copyright © ФК «Вікторія» Суми</p>
                        <div>
                        <p>Політика конфіденційності</p>
                        <p>Угода користувача</p>
                        </div>
                </div>
            </div>
        </>
     );
}
 
export default MobileFooter;