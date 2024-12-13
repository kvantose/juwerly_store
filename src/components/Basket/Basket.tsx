import { Box } from "@mui/material";
import Header from "../Header/Header";
import "./Basket.css";
import { data } from "../../../mock/catalog";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from "../Footer/Footer";



interface ProductCount {
    [id: number]: number;
}

const initialProductCount: ProductCount = data.reduce((acc, item) => {
    acc[item.id] = 1;
    return acc;
}, {} as ProductCount);

export default function Basket({ open, setOpen, likes, setLikes, basket, setBasket }:
    { open: boolean, setOpen: Function, likes: number[], setLikes: Function, basket: number[], setBasket: Function }) {
    const [productCount, setProductCount] = useState<ProductCount>(initialProductCount);

    const incrementCount = (id: number): void => {
        setProductCount(prevCount => ({
            ...prevCount,
            [id]: prevCount[id] + 1
        }));
    };

    // Функция для уменьшения количества конкретного товара по его id
    const decrementCount = (id: number): void => {
        setProductCount(prevCount => ({
            ...prevCount,
            [id]: Math.max(prevCount[id] - 1, 1) // Предотвращаем отрицательные значения
        }));
    };
    return (
        <>
            <Header open={open} setOpen={setOpen} likes={likes} setLikes={setLikes} basket={basket} setBasket={setBasket} />
            <Box sx={{ mt: 15 }}></Box>
            <div className="app__container">

                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                }}>
                    <h1>Корзина</h1>
                    <p>{basket.length === 1 ? `${basket.length} товар` :
                        basket.length === 2 || basket.length === 3 || basket.length === 4 ?
                            `${basket.length} товара` :
                            `${basket.length} товаров`}</p>
                </Box>

                {basket.length > 0 ? basket.map((item) => (
                    <>
                        <div className="basket__container" key={item}>
                            <img src={data[item].img} alt="" />
                            <div className="basket__info">
                                <div className="basket__main__container">
                                    <p className="basket__info__description">
                                        {data[item].title}
                                    </p>
                                    <p className="basket__info__description__small">
                                        {data[item].description}
                                    </p>
                                    <p className="basket__info__description__small">
                                        {data[item].info}
                                    </p>

                                </div>
                                {data.map((i) => i.id === item && (
                                    <div className="basket__count" key={i.id}>
                                        <button
                                            className="basket__button"
                                            onClick={() => decrementCount(i.id)}>
                                            -
                                        </button>
                                        <p>{productCount[i.id]}</p>
                                        <button
                                            className="basket__button"
                                            onClick={() => incrementCount(i.id)}>
                                            +
                                        </button>
                                    </div>))}
                                <p className="basket__info__description">
                                    {data[item].price}
                                </p>
                            </div>
                            <DeleteIcon sx={{ cursor: "pointer", fontSize: "30px", "@media (max-width: 500px)": { fontSize: "20px" } }} 
                            onClick={() => setBasket(basket.filter((id) => id !==item))} />
                        </div>
                        <hr />
                    </>
                )) : (
                    <h1 style={{ marginTop: "180px" }}>Корзина пуста</h1>
                )}

                {basket.length > 0 && (
                    <Box sx={{ mt: 20, maxWidth: "500px", display: "flex", flexDirection: "column", gap: 5 }}>
                        <h1>
                            Итого: {basket.length > 0 && basket.reduce((acc, item) =>
                                acc + productCount[item] * parseInt(data[item].price.replace(/\s+руб\./, '')
                                    .replace(/\s/g, ''), 10), 0).toLocaleString('ru-RU') + " ₽"}
                        </h1>
                        <button className="button__catalog">Оплатить</button>
                    </Box>
                )}
            </div>
            <Footer />
        </>
    )
}