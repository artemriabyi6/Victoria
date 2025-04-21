import { useState } from "react";
import DropDown from "../dropDown/DropDown";
import images from "../../utils/images";
import { useTranslation } from "react-i18next";
import "./header.css";

const menuItems = [
  { menuItem: "news" },
  { menuItem: "club", subItem1: { item: "history", path: "/history" } },
  {
    menuItem: "team",
    subItem1: { item: "main team", path: "/team" },
    subItem2: { item: "stuff", path: "/stuff" },
  },
  {
    menuItem: "matches",
    subItem1: { item: "all matches", path: "/matches" },
    subItem2: { item: "table", path: "/table" },
  },
  {
    menuItem: "multimedia",
    subItem1: { item: "photos", path: "/photos" },
    subItem2: { item: "videos", path: "/videos" },
  },
];

const Header = () => {
  const [selectedLang, setSelectedLang] = useState("ua");
  const { t, i18n } = useTranslation();

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

  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <a href="">
            <img src={images.logo} alt="logo" className="logo" />
          </a>
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
                      <a className="category">{t(item)}</a>
                      {/* <DropDown array={menuItems}/> */}
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
    </header>
  );
};

export default Header;
