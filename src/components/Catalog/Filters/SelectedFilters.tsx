import { Box, Chip } from "@mui/material";
import "./SelectedFilters.css"

export default function SelectedFilters({ filters, setFilters }: { filters: string[], setFilters: Function}) {
    const handleDeleteFilter = (filter: string) => {
        filters = filters.filter(item => item !== filter)
        setFilters(filters)
    }

    return (
        <>

            <div className="selected__filters__container">
                <div className="selected__filters__button">
                    <a href="#" onClick={() => setFilters([])}
                        className="selected__filters__link">Сбросить все</a>
                    <form className="selected__filters__form">
                        <select className="selected__filters__select" >
                            <option value="Сначала популярные">Сначала популярные</option>
                            <option value="С большей скидкой">С большей скидкой</option>
                            <option value="Сначала дорогие">Сначала дорогие</option>
                            <option value="Сначала дешёвые">Сначала дешёвые</option>
                        </select>
                    </form>
                </div>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 5 }}>
                    {filters.map((item) => (
                        <div className="selected__filters" key={item}>
                            <Chip
                                sx={{ borderRadius: "5px" }}
                                label={item} variant="outlined"
                                onDelete={() => handleDeleteFilter(item)} />
                        </div>
                    ))}
                </Box>
            </div>
        </>
    )
}