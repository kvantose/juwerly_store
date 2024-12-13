import "./BannerSell.css";
import banner from "../../assets/banner.png";

export default function BannerSell() {
  return (
    <div
      className="bannerSell"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="bannerSell__content">
        <p className="bannerSell__title">Роскошь, доступная вам сегодня</p>
        <div className="bannerSell__container__description">
          <p className="bannerSell__description">
            Продайте свои часы, украшения или сумки по лучшей цене в Москве. Мы
            гарантируем выкуп до 100 000 000 рублей за 15 минут.
          </p>
          <p className="bannerSell__description2">
            Оценка и выплата — быстро и без лишних документов.
          </p>
        </div>
        <button className="bannerSell__button">Продать сейчас</button>
      </div>
    </div>
  );
}
