import "./Footer.css";
import logo from "../../assets/logo.png";
import whatsapp from "../../assets/whatsapp.png";
import tg from "../../assets/tg.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__right">
          <img
            src={whatsapp}
            alt="whatsapp"
            className="footer__top__right__img"
          />
          <img src={tg} alt="tg" className="footer__top__right__img" />
        </div>
        <img src={logo} alt="logo" className="footer__top__img" />
        <div className="footer__top__left">
          <p>+7 (968) 006-47-99</p>
          <p>Комсомольский пр-т, д.42 с.2</p>
        </div>
      </div>

      <div className="footer__center">
        <div className="line__footer"></div>
        <div className="footer__center__content">
          <ul>
            <li>Каталог</li>
            <li>Услуги</li>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Доставка и оплата</li>
            <li>Продать украшение</li>
          </ul>
        </div>
        <div className="line__footer"></div>
      </div>

      <div className="footer__bottom">
        <ul>
          <li>Политика конфиденциальности</li>
        </ul>
      </div>
    </div>
  );
}
