import { useState, useRef } from "react"
import { useJewelryStore } from "../../store"
import CloseIcon from '@mui/icons-material/Close';
import like from "../../assets/like.png"
import DeleteIcon from '@mui/icons-material/Delete';

export const LikeSideBar = () => {
    const [open, setOpen] = useState(false);
    const likes = useJewelryStore((state) => state.liked);
    const data = useJewelryStore((state) => state.catalog);
    const removeLiked = useJewelryStore((state) => state.removeLiked);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const openLikeMenu = () => {
        if (!likes) return
        if (likes.length > 0) {
            setOpen(true);
            document.body.style.overflow = "hidden";
        }
    }
    const closeLikeMenu = () => {
        setOpen(false);
        document.body.style.overflowY = "auto";
    }
    return (
        <>
            <div className="header__likes" onClick={openLikeMenu}>
                <img src={like} alt="like" />
                {likes ? likes.length > 0 &&
                    <p className="header__likes__p">{likes?.length}</p>
                    : null
                }
            </div>

            {
                open ? (
                    <div className="header__likes__menu" ref={menuRef}>
                        <CloseIcon
                            onClick={() => closeLikeMenu()}
                            sx={{ color: "white" }} />
                        {data.filter((item) => likes?.includes(item)).map((item) => (
                            <div
                                className="header__likes__content__item"
                                key={item.id}
                            >
                                <img src={item.img} alt="like" width={100} height={100} />
                                <div className="header__likes__content">
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                    {/* {basket.includes(item.id) ? (
                                        <>
                                            <button disabled className="header__likes__content__button__basket">В корзине</button>
                                        </>
                                    ) : (
                                        <button className="header__likes__content__button"
                                            onClick={() => handleAddToBasket(item.id)}>
                                            В корзину
                                        </button>
                                    )} */}
                                </div>
                                <DeleteIcon
                                    onClick={() => removeLiked(item.id)} />
                            </div>
                        ))}
                    </div>
                ) : null
            }
        </>
    )
};