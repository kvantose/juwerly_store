import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { Catalog } from '../../interfaces/catalog';
import { useJewelryStore } from '../../store';

export default function Cards({ filters,
    coast,
    currentPage,
    pageCount,
    setPageCount, }: {
        filters: string[],
        coast: number, currentPage: number,
        pageCount: number, setPageCount: (number: number) => void,
    }) {

    const basket = useJewelryStore((state) => state.basket);
    const likes = useJewelryStore((state) => state.liked);
    const addToBasket = useJewelryStore((state) => state.addToBasket);
    const addToLiked = useJewelryStore((state) => state.addToLiked);
    const removeBasket = useJewelryStore((state) => state.removeBasket);
    const removeLiked = useJewelryStore((state) => state.removeLiked);

    const navigate = useNavigate();

    const data = useJewelryStore((state) => state.catalog);
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

    const handleClickToBasket = () => {
        navigate("/basket");
    }
    const handleLike = (item: Catalog) => {
        if (likes?.includes(item)) {
            removeLiked(item.id);
        } else {
            addToLiked(item);
        }
    };

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
                            {likes?.includes(item) ? (
                                <FavoriteIcon
                                    color="error"
                                    className="liked"
                                    onClick={() => handleLike(item)}
                                    sx={{ zIndex: "1", position: "absolute", mt: 1.5 }}

                                />
                            ) : (
                                <FavoriteBorderIcon
                                    className="like"
                                    onClick={() => handleLike(item)}
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
                                {basket?.includes(item) ? (
                                    <>
                                        <div className='button__catalog__basket__container'>
                                            <button className="button__catalog__basket"
                                                onClick={handleClickToBasket}>
                                                Перейти к оформлению
                                            </button>
                                            <button className="button__catalog__basket__delete"
                                                onClick={() => removeBasket(item.id)}>
                                                Удалить
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <button
                                        className="button__catalog"
                                        onClick={() => addToBasket(item)}>
                                        В корзину
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="catalog__mobile" key={item.id + "mobile"}>
                            <div className='catalog__mobile__content'>
                                {likes?.includes(item) ? (
                                    <FavoriteIcon
                                        color="error"
                                        className="liked"
                                        onClick={() => handleLike(item)}
                                        sx={{ zIndex: "1", position: "absolute", mt: 2, ml: 1 }}

                                    />
                                ) : (
                                    <FavoriteBorderIcon
                                        className="like"
                                        onClick={() => handleLike(item)}
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
                            {basket?.includes(item) ? (
                                <>
                                    <div className='button__catalog__basket__container'>
                                        <button className="button__catalog__basket"
                                            onClick={handleClickToBasket}>
                                            Перейти к оформлению
                                        </button>
                                        <button className="button__catalog__basket__delete"
                                            onClick={() => removeBasket(item.id)}>
                                            Удалить
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <button
                                    className="button__catalog"
                                    onClick={() => addToBasket(item)}>
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