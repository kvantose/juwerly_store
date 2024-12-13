import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./MiniCatalog.css";
import { data } from "../../../../mock/catalog";
import { useNavigate } from "react-router-dom";

const responsive = {
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function MiniCatalog({ props, handleLike, likes, basket, setBasket, number_start, number_end }: {
  props: string,
  handleLike: Function,
  likes: number[],
  basket: number[],
  setBasket: Function,
  number_start: number,
  number_end: number
}) {
  {
    const navigate = useNavigate();
    const handleDeleteBasketItem = (id: number): void => {
      setBasket(basket.filter((item) => item !== id));
    };
    const handleClickToBasket = () => {
      navigate("/basket");
    }
    return (
      <>
        <div className="mini__catalog__title">
          <div className="mini__catalog__header__title">
            <p className="mini__catalog__title__text">{props}</p>
            <a href="#" className="mini__catalog__title__link">перейти в каталог</a>
          </div>
          <div className="mini__catalog__header">
            {data.slice(number_start, number_end).map((item) => (
              <div className="mini__catalog" key={item.id}>
                {likes.includes(item.id) ? (
                  <FavoriteIcon
                    color="error"
                    className="liked"
                    onClick={() => handleLike(item.id)}
                    sx={{ zIndex: "1", position: "absolute", mt: 1.5 }}

                  />
                ) : (
                  <FavoriteBorderIcon
                    className="like"
                    onClick={() => handleLike(item.id)}
                    sx={{ zIndex: "1", position: "absolute", mt: 1.5 }}
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
                  {basket.includes(item.id) ? (
                    <>
                      <div className='button__catalog__basket__container'>
                        <button className="button__catalog__basket"
                          onClick={handleClickToBasket}>
                          Перейти к оформлению
                        </button>
                        <button className="button__catalog__basket__delete"
                          onClick={() => handleDeleteBasketItem(item.id)}>
                          Удалить
                        </button>
                      </div>
                    </>
                  ) : (
                    <button
                      className="button__catalog"
                      onClick={() => setBasket([...basket, item.id])}>
                      В корзину
                    </button>
                  )}
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
              {data.slice(number_start, number_end).map((item) => (
                <div className="mini__catalog__mobile">
                  <img src={item.img} alt="catalog" />
                  <div className="catalog-content">
                    <div className="info">
                      <p className="catalog__title">{item.title}</p>
                      <p className="catalog__description">{item.description}</p>
                    </div>
                  </div>
                  <p className="catalog__info">{item.info}</p>
                  <p className="catalog__price">{item.price}</p>
                  {basket.includes(item.id) ? (
                    <button className="button__catalog__basket"
                      onClick={handleClickToBasket}>
                      Перейти к оформлению
                    </button>
                  ) : (
                    <button
                      className="button__catalog"
                      onClick={() => setBasket([...basket, item.id])}>
                      В корзину
                    </button>
                  )}
                </div>
              ))}
          </Carousel>
        </div>
      </>
    );
  }
}
