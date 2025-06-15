import { Box } from "@mui/material";
import Header from "../Header/Header";
import "./Basket.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from "../Footer/Footer";
import { useJewelryStore } from "../../store";
import { Catalog } from "../../interfaces/catalog";

function resultSum(basket: Catalog[]) {
    return basket.reduce((acc, item) => acc + parseInt(item.price.replace(/\s+руб\./, '').replace(/\s/g, '')), 0).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
}
export default function Basket({ open, setOpen }:
    { open: boolean, setOpen: (open: boolean) => void }) {
    const basket = useJewelryStore((state) => state.basket);
    const removeBasket = useJewelryStore((state) => state.removeBasket);

    return (
        <>
            <Header open={open} setOpen={setOpen} />
            <Box sx={{ mt: 15 }} className="app__container">
                <div className="basket__title">
                    <h1>Корзина</h1>
                </div>
                <div className="basket__container">
                    <table className="basket__table">
                        <thead>
                            <tr>
                                <th>Фото</th>
                                <th>Название</th>
                                <th>Цена</th>
                                <th>Удалить</th>
                            </tr>
                        </thead>
                        <hr />
                        <tbody>
                            {basket && basket.length > 0 ? basket.map((item) => (
                                <tr key={item.id} className="basket__item">
                                    <td><img src={item.img} alt={item.title} /></td>
                                    <td>{item.title}<span className="basket__info__title">{item.description}</span></td>
                                    <td>{item.price}</td>
                                    <td><DeleteIcon onClick={() => removeBasket(item.id)} /></td>
                                </tr>
                            )) : (<><h1>Корзина пуста</h1></>)}
                        </tbody>
                    </table>
                </div>

                {basket && basket.length > 0 ? (
                    <>
                        <h1>ИТОГО</h1>
                        <h2>{resultSum(basket)}</h2>
                        <button className="">Оформить заказ</button>
                    </>
                ) : null}

            </Box>

            <Footer />
        </>
    )
}