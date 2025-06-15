import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
// import like from "../../assets/like.png";
import profile from "../../assets/profile.png";
import Iconbasket from "../../assets/basket.png";
// import DeleteIcon from '@mui/icons-material/Delete';

import "./Header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useJewelryStore } from "../../store";
import { LikeSideBar } from "./LikeSideBar";
import { useJewelryStore } from "../../store";

export default function Header({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  const [searchOpen, setSearchOpen] = useState(false);
  // const [openLike, setOpenLike] = useState(false);

  const basket = useJewelryStore((state) => state.basket);
  // const likes = useJewelryStore((state) => state.liked);
  // const data = useJewelryStore((state) => state.catalog);
  // const removeLiked = useJewelryStore((state) => state.removeLiked);
  const navigate = useNavigate();
  // const menuRef = useRef<HTMLDivElement | null>(null);

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

  // const onClickOutside = (event: MouseEvent) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //     closeLikeMenu();
  //   }
  // };

  // const handleAddToBasket = (id: number) => {
  //   setBasket([...basket, id]);
  // }

  const navigator = (page: string) => {
    document.body.style.overflowY = "auto";
    setOpen(false);
    navigate(page);
  }

  // useEffect(() => {
  //   if (openLike) {
  //     document.addEventListener('mousedown', onClickOutside);
  //   }
  //   return () => {
  //     document.removeEventListener('mousedown', onClickOutside);
  //   }
  // }, [openLike]);

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

                  <LikeSideBar />
                  <img src={profile} alt="profile" onClick={() => navigator("/profile")} />
                  {/* basket */}
                  <Link to="/basket">
                    <div className="header__basket">
                      <img src={Iconbasket} alt="basket" />
                      {basket ? basket.length > 0 && <p className="header__basket__p">{basket.length}</p> : null}
                    </div>
                  </Link>
                  {/* * */}
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
