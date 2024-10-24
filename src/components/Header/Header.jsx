import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";

import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import like from "../../assets/like.png";
import profile from "../../assets/profile.png";
import basket from "../../assets/basket.png";

import "./Header.css";
import { useState } from "react";

export default function Header({ open, setOpen }) {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleOpenBurgerMenu = () => {
    setOpen(!open);
  };

  const openSearch = () => {
    setSearchOpen(!searchOpen);
  };
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

                <img src={logo} alt="logo"  className="header__logo__img"/>

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
                  <img src={like} alt="like" />
                  <img src={profile} alt="profile" />
                  <img src={basket} alt="basket" />
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
                  <li className="burgerMenu__list">Каталог</li>
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
            <div className="burgerMenu__right"></div>
          </>
        )}
      </header>
    </>
  );
}
