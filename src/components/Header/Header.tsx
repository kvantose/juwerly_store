import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import like from "../../assets/like.png";
import profile from "../../assets/profile.png";
import Iconbasket from "../../assets/basket.png";
import DeleteIcon from '@mui/icons-material/Delete';

import "./Header.css";
import { useEffect, useRef, useState } from "react";
import { data } from "../../../mock/catalog";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ open, setOpen, likes, setLikes, basket, setBasket }:
  { open: boolean, setOpen: any, likes: number[], setLikes: Function, basket: number[], setBasket: Function }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [openLike, setOpenLike] = useState(false);

  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOpenBurgerMenu = () => {
    if (open) {
      setOpen(false);
      document.body.style.overflowY = "auto";
    } else {
      setOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const openSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const openLikeMenu = () => {
    if (likes.length > 0) {
      setOpenLike(true);
      document.body.style.overflow = "hidden";
    }
  }

  const closeLikeMenu = () => {
    setOpenLike(false);
    document.body.style.overflowY = "auto";
  }

  const onClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeLikeMenu();
    }
  };

  const handleAddToBasket = (id: number) => {
    setBasket([...basket, id]);
  }

  const navigator = (page: string) => {
    document.body.style.overflowY = "auto";
    setOpen(false);
    navigate(page);
  }

  useEffect(() => {
    if (openLike) {
      document.addEventListener('mousedown', onClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    }
  }, [openLike]);

  return (
    <>
      <header>
        {!open ? (
          <>
            <div className="header">
              <div className="header__content">
                <MenuIcon
                  sx={{
                    mr: 2,
                    color: "white",
                    ml: "160px",
                    "@media (max-width: 1200px)": { ml: "80px" },
                    "@media (max-width: 600px)": { ml: "20px" },
                  }}
                  onClick={() => handleOpenBurgerMenu()}
                />

                <img src={logo} alt="logo" className="header__logo__img"
                  onClick={() => navigator("/")} />

                <div className="header__right">
                  {searchOpen ? (
                    <>
                      <input
                        className="search__input"
                        type="text"
                        placeholder="Найти..."
                      />
                    </>
                  ) : (
                    <img
                      src={search}
                      alt="search"
                      onClick={() => openSearch()}
                    />
                  )}
                  <div className="header__likes" onClick={openLikeMenu}>
                    <img src={like} alt="like" />
                    {likes.length > 0 &&
                      <p className="header__likes__p">{likes.length}</p>}
                  </div>

                  {openLike ? (
                    <div className="header__likes__menu" ref={menuRef}>
                      <CloseIcon
                        onClick={() => closeLikeMenu()}
                        sx={{ color: "white" }} />
                      {data.filter((item) => likes.includes(item.id)).map((item) => (
                        <div
                          className="header__likes__content__item"
                          key={item.id}
                        >
                          <img src={item.img} alt="like" width={100} height={100} />
                          <div className="header__likes__content">
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            {basket.includes(item.id) ? (
                              <>
                                <button disabled className="header__likes__content__button__basket">В корзине</button>
                              </>
                            ) : (
                              <button className="header__likes__content__button"
                                onClick={() => handleAddToBasket(item.id)}>
                                В корзину
                              </button>
                            )}
                          </div>
                          <DeleteIcon
                            onClick={() => setLikes(likes.filter((id) => id !== item.id))} />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <img src={profile} alt="profile" onClick={() => navigator("/profile")} />
                  <Link to="/basket">
                    <div className="header__basket">
                      <img src={Iconbasket} alt="basket" />
                      {basket.length > 0 && <p className="header__basket__p">{basket.length}</p>}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="burgerMenu">
              <CloseIcon
                onClick={() => handleOpenBurgerMenu()}
                sx={{ mr: 2, color: "white" }}
              />
              <nav>
                <ul className="burgerMenu__list__container">
                  <li className="burgerMenu__list" onClick={() => navigator("/catalog")}>Каталог</li>
                  <div className="line"></div>
                  <li className="burgerMenu__list">Услуги</li>
                  <div className="line"></div>
                  <li className="burgerMenu__list">О нас</li>
                  <div className="line"></div>
                  <li className="burgerMenu__list">Контакты</li>
                  <div className="line"></div>
                  <li className="burgerMenu__list">Доставка и оплата</li>
                  <div className="line"></div>
                  <li className="burgerMenu__list">Продать урашение</li>
                  <div className="line"></div>
                </ul>

                <div className="burgerMenu__bottom">
                  <p className="politics">Политика конфиденциальности</p>
                  <p className="phone">+7 (968) 006-47-99</p>
                  <p className="address">Комсомольский пр-т, д.42 с.2</p>
                </div>
              </nav>
            </div>
            <div className="burgerMenu__right" onClick={() => handleOpenBurgerMenu()}></div>
          </>
        )}
      </header >
    </>
  );
}
