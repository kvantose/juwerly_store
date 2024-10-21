import img from "../../assets/main_bg.png";

import "./Main.css";

export default function Main({ open }) {
  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: `url(${img})`,
          filter: open ? "brightness(0.5)" : "none",
        }}
      >
        <div className="main__content">
          <p className="title__main">Ювелирный дом на Фрунзенской</p>
          <p className="description__main">Искусство, которое живет</p>
          <button className="button__main">В каталог</button>
        </div>
      </div>
    </>
  );
}