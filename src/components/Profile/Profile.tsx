import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Profile.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from "@mui/material";

export default function Profile({ open, setOpen, likes, setLikes, basket, setBasket }:
    { open: boolean, setOpen: Function, likes: number[], setLikes: Function, basket: number[], setBasket: Function }) {
    return (
        <>
            <Header open={open} setOpen={setOpen} likes={likes} setLikes={setLikes} basket={basket} setBasket={setBasket} />
            <div className="app__container">
                <div className="profile__container">
                    <div className="profile__container__left">
                        <AccountCircleIcon sx={{ fontSize: 200 }} />
                        <Button>Изменить аватар</Button>
                    </div>
                    <div className="profile__container__right">
                        <div className="profile__container__right__text">
                        <p>Имя:</p>
                        <p>undefined</p>
                        </div>
                        <div className="profile__container__right__text">
                        <p>Почта:</p>
                        <p>undefined</p>
                        </div>
                        <div className="profile__container__right__text">
                        <p>Телефон:</p>
                        <p>undefined</p>
                        </div>

                        <p>Бонусы: 0</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}