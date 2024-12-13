import "./Advantage.css";
import { data } from "../../../../mock/data_advantage";

export default function Advantage() {
  return (
    <div className="advantage__container">
      <p className="advantage__title">Почему выбирают нас?</p>
      <div className="advantage__content__container">
        {data.map((item) => (
          <div className="advantage__content" key={item.id}>
            <div className="advantage__item">
              <p className="advantage__title__text">{item.title}</p>
              <p className="advantage__text">{item.advantage}</p>
              <p className="advantage__description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
