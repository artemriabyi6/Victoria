import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DropDown from "../dropDown/DropDown";
import images from "../../utils/images";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./header.css";

export const menuItems = [
  { menuItem: "Клуб", subItems: [{ item: "Історія", path: "/history" }] },
  {
    menuItem: "Команда",
    subItems: [
      { item: "головна комнада", path: "/team" },
      { item: "Тренерський штаб", path: "/stuff" },
    ],
  },
  {
    menuItem: "Матчі",
    subItems: [
      { item: "всі матчі", path: "/calendar" },
      { item: "таблиця", path: "/table" },
    ],
  },
  {
    menuItem: "Мультимедія",
    subItems: [
      { item: "фото", path: "/photos" },
      { item: "відео", path: "/videos" },
    ],
  },
];

const Header = () => {
  const [selectedLang, setSelectedLang] = useState("ua");
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const { t, i18n } = useTranslation();


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    // Очищення при розмонтажі
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };

  const renderFlag = (lang) => {
    switch (lang) {
      case "ua":
        return (
          <p className="lang-text">
            Українська
            <img src={images.ua} alt="UA" />
          </p>
        );
      case "en":
        return (
          <p className="lang-text">
            Англійська
            <img src={images.en} alt="EN" />
          </p>
        );
      default:
        return null;
    }
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <header>
      {isMobile ? (
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-block">
              <Link to="/">
                <img src={images.logo} alt="logo" className="logo" />
              </Link>
            </div>
            <div className="header-wrapper-right-block">
              {/* <div className="partner-logo">
                <a>
                  <img src={images.puma} alt="Puma" />
                </a>
              </div> */}

              <div className="lang-switch">
                <div className="selected-lang">{renderFlag(selectedLang)}</div>
                <div className="lang-dropdown">
                  <ul>
                    <li onClick={() => handleLangChange("ua")}>
                      <img src={images.ua} alt="UA" />
                      UA
                    </li>
                    <li onClick={() => handleLangChange("en")}>
                      <img src={images.en} alt="EN" />
                      EN
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`burger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

            {isOpen ? (
               <div className="menu active">
               <ul>
               <ul>
  {menuItems.map((item, index) => (
    <li key={index}>
      <div
        className="accordion-header"
        onClick={() => toggleAccordion(index)}
      >
        {t(item.menuItem)}
        {item.subItems.length > 0 && (
          <span className={`arrow ${openIndex === index ? "open" : ""}`}>▼</span>
        )}
      </div>

      {openIndex === index && (
        <ul className="accordion-submenu">
          {item.subItems.map((sub, subIndex) => (
            <li key={subIndex}>
              <Link to={sub.path}>{sub.item}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>

               </ul>
             </div>
            ) : (
              <div className="menu">
              <ul>
              {menuItems.map((item, index) => (
                  <li key={index}><a href="">{item.menuItem}</a></li>
                 ))}
              </ul>
            </div>
            )}
         
        </div>
      ) : (
        <div className="container">
          <div className="header-wrapper">
            <Link to="/">
              <img src={images.logo} alt="logo" className="logo" />
            </Link>
            <div className="header-content">
              <div className="header-top-row">
                <div className="header-top-row-left-block">
                  <a className="messanger">
                    <img src={images.facebook} alt="facebook" />
                  </a>
                  <a className="messanger">
                    <img src={images.instagram} alt="instagram" />
                  </a>
                  <a className="messanger">
                    <img src={images.youtube} alt="youtube" />
                  </a>
                  <a className="messanger">
                    <img src={images.tikTok} alt="tiktok" />
                  </a>
                  <a className="messanger">
                    <img src={images.twitter} alt="twitter" />
                  </a>
                </div>
                <div className="header-top-row-center-block">
                  <p>{t("slogan")}</p>
                </div>
                <div className="header-top-row-right-block">
                  <div className="partner-logo">
                    <a>
                      <img src={images.puma} alt="Puma" />
                    </a>
                  </div>

                  <div className="lang-switch">
                    <div className="selected-lang">
                      {renderFlag(selectedLang)}
                    </div>
                    <div className="lang-dropdown">
                      <ul>
                        <li onClick={() => handleLangChange("ua")}>
                          <img src={images.ua} alt="UA" />
                          UA
                        </li>
                        <li onClick={() => handleLangChange("en")}>
                          <img src={images.en} alt="EN" />
                          EN
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-bottom-row">
                <div className="main-menu">
                  <ul>
                    {menuItems.map((item, index) => (
                      <li key={index} className="menu-item">
                        <a className="category">{t(item.menuItem)}</a>
                        <DropDown array={item.subItems} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="search-tickets">
                  <div className="tickets">
                    <a>{t("tickets")}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
