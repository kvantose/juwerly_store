import "./MiniCatalog.css";
import { data } from "../../../mock/mock_catalog.js";

// import like from "../../assets/heart.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import catalog1 from "../../assets/catalog/catalog1.jpg";
import catalog2 from "../../assets/catalog/catalog2.png";
import catalog3 from "../../assets/catalog/catalog3.png";
import catalog4 from "../../assets/catalog/catalog4.png";

const responsive = {
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function MiniCatalog({props}) {
  const [like, setLike] = useState(false);
  const [liked, setLiked] = useState([]);

  const handleLike = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id));
    } else {
      setLiked([...liked, id]);
    }
    setLike(!like);
  };

  return (
    <>
      <div className="mini__catalog__title">
        <div className="mini__catalog__header__title">
          <p className="mini__catalog__title__text">{props}</p>
          <a href="#" className="mini__catalog__title__link">перейти в каталог</a>
        </div>
        <div className="mini__catalog__header">
          {data.map((item) => (
            <div className="mini__catalog" key={item.id}>
              {liked.includes(item.id) ? (
                <FavoriteIcon
                  color="error"
                  className="liked"
                  onClick={() => handleLike(item.id)}
                />
              ) : (
                <FavoriteBorderIcon
                  className="like"
                  onClick={() => handleLike(item.id)}
                />
              )}
              <div className="catalog-content">
                <img src={item.img} alt="catalog" />
                <div className="info">
                  <p className="catalog__title">{item.title}</p>
                  <p className="catalog__description">{item.description}</p>
                </div>
              </div>
              <div className="extra-info">
                <p className="catalog__info">{item.info}</p>
                <p className="catalog__price">{item.price}</p>
                <button className="button__catalog">В корзину</button>
              </div>
            </div>
          ))}
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
        >
          <div className="mini__catalog__mobile">
            <img src={catalog1} alt="catalog" />
            <div className="catalog-content">
              <div className="info">
                <p className="catalog__title">Chopard</p>
                <p className="catalog__description">Happy Hearts</p>
              </div>
            </div>
            <p className="catalog__info">кулон, розовое золото, бриллианты</p>
            <p className="catalog__price">1 150 000 руб.</p>
            <button className="button__catalog">В корзину</button>
          </div>
          <div className="mini__catalog__mobile">
            <img src={catalog2} alt="catalog" width={300} height={300} />
            <div className="catalog-content">
              <div className="info">
                <p className="catalog__title">Chopard</p>
                <p className="catalog__description">Happy Hearts</p>
              </div>
            </div>
            <p className="catalog__info">кулон, розовое золото, бриллианты</p>
            <p className="catalog__price">1 150 000 руб.</p>
            <button className="button__catalog">В корзину</button>
          </div>
          <div className="mini__catalog__mobile">
            <img src={catalog3} alt="catalog" width={300} height={300} />
            <div className="catalog-content">
              <div className="info">
                <p className="catalog__title">Chopard</p>
                <p className="catalog__description">Happy Hearts</p>
              </div>
            </div>
            <p className="catalog__info">кулон, розовое золото, бриллианты</p>
            <p className="catalog__price">1 150 000 руб.</p>
            <button className="button__catalog">В корзину</button>
          </div>
          <div className="mini__catalog__mobile">
            <img src={catalog4} alt="catalog" width={300} height={300} />
            <div className="catalog-content">
              <div className="info">
                <p className="catalog__title">Chopard</p>
                <p className="catalog__description">Happy Hearts</p>
              </div>
            </div>
            <p className="catalog__info">кулон, розовое золото, бриллианты</p>
            <p className="catalog__price">1 150 000 руб.</p>
            <button className="button__catalog">В корзину</button>
          </div>
        </Carousel>
      </div>
    </>
  );
}
