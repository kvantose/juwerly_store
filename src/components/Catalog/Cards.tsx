import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
import { data } from "../../../mock/catalog";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Cards({ filters,
    coast,
    currentPage,
    pageCount,
    setPageCount,
    likes,
    setLikes,
    basket,
    setBasket }: {
        filters: string[],
        coast: number, currentPage: number,
        pageCount: number, setPageCount: Function, likes: number[],
        setLikes: Function, basket: number[], setBasket: Function
    }) {

    const [like, setLike] = useState(false);
        const navigate = useNavigate();

    const handleLike = (id: number) => {
        if (likes.includes(id)) {
            setLikes(likes.filter((item) => item !== id));
        } else {
            setLikes([...likes, id]);
        }
        setLike(!like);
    };

    const filteredProducts = data.filter((item) => {
        const itemPrice = parseInt(item.price.replace(/\s+руб\./, '').replace(/\s/g, ''));

        if (filters.length === 0 && !coast) {
            return true;
        }

        const matchesFilters = filters.length === 0 || filters.some((filterValue) => {
            return (
                item.gender === filterValue ||
                item.size === filterValue ||
                item.category === filterValue ||
                item.material === filterValue ||
                item.insert === filterValue ||
                item.brand === filterValue ||
                item.collection === filterValue
            );
        });
        const matchesPrice = !coast || itemPrice >= coast;
        return matchesFilters && matchesPrice;
    });

    const products = () => {
        const product = filteredProducts.slice((currentPage - 1) * 9, currentPage * 9);
        pageCount = Math.ceil(filteredProducts.length / 9);
        setPageCount(pageCount);
        return product
    }

    const handleDeleteBasketItem = (id: number): void => {
        setBasket(basket.filter((item) => item !== id));
    };


    const handleClickToBasket = () => {
        navigate("/basket");
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex', flexWrap: 'wrap',
                    gap: 10, mt: 5, justifyContent: 'space-between',
                    "@media (max-width: 600px)": {
                        gap: 2, mt: 0
                    }
                }}>

                {products().length > 0 && products().map((item) => (
                    <>
                        <div className="mini__catalog" key={item.id}>
                            {likes.includes(item.id) ? (
                                <FavoriteIcon
                                    color="error"
                                    className="liked"
                                    onClick={() => handleLike(item.id)}
                                    sx={{ zIndex: "1", position: "absolute", mt: 2, ml: 1 }}
                                />
                            ) : (
                                <FavoriteBorderIcon
                                    className="like"
                                    onClick={() => handleLike(item.id)}
                                    sx={{ zIndex: "1", position: "absolute", mt: 2, ml: 1 }}
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

                        <div className="catalog__mobile" key={item.id + "mobile"}>
                            <div className='catalog__mobile__content'>
                                {likes.includes(item.id) ? (
                                    <FavoriteIcon
                                        color="error"
                                        className="liked"
                                        onClick={() => handleLike(item.id)}
                                        sx={{ zIndex: "1", position: "absolute", mt: 2, ml: 1 }}

                                    />
                                ) : (
                                    <FavoriteBorderIcon
                                        className="like"
                                        onClick={() => handleLike(item.id)}
                                        sx={{ zIndex: "1", position: "absolute", mt: 2, ml: 1 }}
                                    />
                                )}
                                <img src={item.img} alt="catalog" />
                                <div className="catalog__mobile__info">
                                    <p className='catalog__mobile__title'>{item.title}</p>
                                    <p className='catalog__mobile__text'>{item.description}</p>
                                    <p className='catalog__mobile__text'>{item.info}</p>
                                    <p className='catalog__mobile__price'>{item.price}</p>
                                </div>
                            </div>
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
                    </>
                )) || <p
                    style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Товары не найдены...</p>}
            </Box>
        </>
    )
}