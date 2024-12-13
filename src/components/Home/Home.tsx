import Header from "../Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import MiniCatalog from "./MiniCatalog/MiniCatalog";
import BannerSell from "../BannerSell/BannerSell";
import Advantage from "./Advantage/Advantage";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";



import "../../App.css";
import BannerRegistration from "../BannerRegistration/BannerRegistration";

export default function Home({ open, setOpen, likes, setLikes, basket, setBasket }:
    { open: boolean, setOpen: Function, likes: number[], setLikes: Function, basket: number[], setBasket: Function }) {

    const [like, setLike] = useState(false);
    const [bannerOpen, setBannerOpen] = useState(false);

    const handleLike = (id: number) => {
        if (likes.includes(id)) {
            setLikes(likes.filter((item) => item !== id));
        } else {
            setLikes([...likes, id]);
        }
        setLike(!like);
    };

    useEffect(() => {
        setTimeout(() => {
            setBannerOpen(true);
        }, 2000);
    }, [0])

    useEffect(() => {
        if (bannerOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [bannerOpen])

    return (
        <>
            <Header open={open}
                setOpen={setOpen}
                likes={likes}
                setLikes={setLikes}
                basket={basket}
                setBasket={setBasket} />
            <Main open={open} />
            {bannerOpen && <BannerRegistration setBannerOpen={setBannerOpen} />}
            <div className="app__container">
                <About />
                <MiniCatalog
                    props="Откройте для себя новые шедевры"
                    handleLike={handleLike}
                    likes={likes}
                    basket={basket}
                    setBasket={setBasket}
                    number_start={0}
                    number_end={4}
                />
                <BannerSell />
                <MiniCatalog
                    props="Индивидуальные решения"
                    handleLike={handleLike}
                    likes={likes}
                    basket={basket}
                    setBasket={setBasket}
                    number_start={4}
                    number_end={8}
                />
                <Advantage />
                <MiniCatalog
                    props="Больше украшений в каталоге"
                    handleLike={handleLike}
                    likes={likes}
                    basket={basket}
                    setBasket={setBasket}
                    number_start={8}
                    number_end={12}
                />
            </div>
            <Footer />
        </>
    );
}