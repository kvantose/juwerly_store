import about from "../../../assets/about.png";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="about__content__left">
          <p className="title__about">
            Ювелирный дом на Фрунзенской — ваш проводник в мир роскоши
          </p>
          <p className="about__description">
            Добро пожаловать в наш мир эксклюзивных ювелирных украшений,
            швейцарских часов и антиквариата.
          </p>
          <p className="about__description">
            Мы предлагаем не только возможность приобрести уникальные изделия,
            но и предоставляем лучшие условия для продажи.
          </p>
          <p className="about__description">
            Вы можете довериться нашему профессионализму, когда решите обменять
            свои драгоценности на максимальную выгоду.
          </p>
        </div>
        <img src={about} alt="about" className="about__img"/>
      </div>
    </>
  );
}
