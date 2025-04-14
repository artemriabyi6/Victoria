import images from "../../utils/images";

const menuItems = [
  "Новини",
  "Клуб",
  "Команда",
  "Матчі",
  "Мультимедіа"
];

const Header = () => {
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
                <a className="messanger"><img src={images.facebook} alt="facebook" /></a>
                <a className="messanger"><img src={images.instagram} alt="instagram" /></a>
                <a className="messanger"><img src={images.youtube} alt="youtube" /></a>
                <a className="messanger"><img src={images.tikTok} alt="tiktok" /></a>
                <a className="messanger"><img src={images.twitter} alt="twitter" /></a>
              </div>
              <div className="header-top-row-center-block">
                <p>З Сумами у серці!</p>
              </div>
              <div className="header-top-row-right-block">
                <div className="partner-logo">
                  <a><img src={images.puma} alt="Puma" /></a>
                </div>
                <div className="lang-switch">Lang-switch</div>
              </div>
            </div>
            <div className="header-bottom-row">
              <div className="main-menu">
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index} className="menu-item">
                      <a>{item}</a>
                      <div className="dropdown">
                        <ul>
                          <li><a href="#">Пункт 1</a></li>
                          <li><a href="#">Пункт 2</a></li>
                          <li><a href="#">Пункт 3</a></li>
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="search-tickets">
                <input type="text" placeholder="Пошук..." />
                <div className="tickets">
                  <a>Tickets</a>
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
