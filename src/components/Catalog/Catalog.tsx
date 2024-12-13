import Header from "../Header/Header";
import Filters from "./Filters/Filters";
import Footer from "../Footer/Footer";
import BannerSell from "../BannerSell/BannerSell";
import SelectedFilters from "./Filters/SelectedFilters";
import Cards from "./Cards";
import Pagination from '@mui/material/Pagination';

import "./Catalog.css";

import { Breadcrumbs, Link } from "@mui/material";

import { useEffect, useState } from "react";
import { data } from "../../../mock/catalog";

const primary = {
    main: "#20CF8F"
};


export default function Catalog({ open, setOpen, likes, setLikes, basket, setBasket }:
    { open: boolean, setOpen: Function, likes: number[], setLikes: Function, basket: number[], setBasket: Function }) {

    const [filters, setFilters] = useState<string[]>([]);
    const [coast, setCoast] = useState<number>(72_300);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 9;
    const [pageCount, setPageCount] = useState(1);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number): void => {
        window.scrollTo(0, 0);
        setCurrentPage(page);
    };

    useEffect(() => {
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [currentPage]);

    return (
        <>
            <Header open={open} setOpen={setOpen} likes={likes} setLikes={setLikes} basket={basket} setBasket={setBasket} />
            <div className="app__container">
                <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 15, mb: 5 }}>
                    <Link
                        underline="hover"
                        color="inherit" href="/"
                        sx={{ fontSize: 20, fontWeight: 400, "@media (max-width: 600px)": { fontSize: 12 } }}>
                        Главная
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/catalog"
                        sx={{ fontSize: 20, fontWeight: 400, "@media (max-width: 600px)": { fontSize: 12 } }}
                    >
                        Каталог
                    </Link>
                </Breadcrumbs>

                <div className="wrapper__catalog">
                    <div className="wrapper__catalog__filters">
                        <Filters
                            filters={filters}
                            setFilters={setFilters}
                            coast={coast}
                            setCoast={setCoast} />
                    </div>
                    <div className="wrapper__catalog__selected">
                        <SelectedFilters
                            filters={filters}
                            setFilters={setFilters} />
                    </div>
                    <div className="wrapper__catalog__cards">
                        <Cards
                            filters={filters}
                            coast={coast}
                            currentPage={currentPage}
                            pageCount={pageCount}
                            setPageCount={setPageCount}
                            likes={likes}
                            setLikes={setLikes}
                            basket={basket}
                            setBasket={setBasket}
                        />
                    </div>
                </div>


                <BannerSell />
                <Pagination
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 5,
                        mb: 5,
                        "& .MuiButtonBase-root": {
                            border: "1px solid #000",
                            borderRadius: "10px",
                            fontFamily: "Montserrat",
                            fontSize: "24px",
                            fontWeight: 400
                        },
                        "& .MuiButtonBase-root:hover": {
                            backgroundColor: primary.main,
                        },
                        "& .MuiPaginationItem-previousNext": {
                            border: "none"
                        },
                        "& .MuiButtonBase-root.Mui-selected": {
                            backgroundColor: primary.main,
                        }
                    }}
                    size="large"
                    shape="rounded"
                    defaultPage={1}
                    page={currentPage}
                    count={pageCount}
                    onChange={handlePageChange} />
            </div>
            <Footer />
        </>
    );
}