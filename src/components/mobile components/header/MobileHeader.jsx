import images from "../../../utils/images";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { menuItems } from "../../header/Header";
import './mobileHeader.css'

const MobileHeader = () => {
  const [selectedLang, setSelectedLang] = useState("ua");
  const [isOpen, setIsOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      setShowBackdrop(true); // спершу монтуємо елемент
      document.body.style.overflow = "hidden";
    } else {
      setShowBackdrop(false); // приховуємо
      document.body.style.overflow = "auto";
    }
  
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

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-block">
            <Link to="/">
              <img src={images.logo} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="header-wrapper-right-block">
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

            <div onClick={() => setIsOpen(!isOpen)} className="burger-block">
              <img
                className={`burger ${isOpen ? "hidden" : "visible"}`}
                src={images.burger}
              />
              <img
                className={`burger ${isOpen ? "visible" : "hidden"}`}
                src={images.cross}
              />
            </div>
          </div>
        </div>

        {isOpen ? (
          <div className="menu active">
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    {t(item.menuItem)}
                    {item.subItems.length > 0 && (
                      <img
                        src={images.arrowDown}
                        className={`arrow ${
                          openIndex === index ? "open" : ""
                        }`}
                      />
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
          </div>
        ) : (
          <div className="menu">
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href="">{item.menuItem}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* BACKDROP */}
      {isOpen && (
  <div className={`backdrop ${showBackdrop ? "show" : ""}`} onClick={() => setIsOpen(false)} />
)}
    </>
  );
};

 
export default MobileHeader;