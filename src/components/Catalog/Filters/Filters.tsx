import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, FormLabel } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { data } from "./data_filters"
import "./Filters.css"
import { useState } from 'react';
import List from '@mui/material/List';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const primary = {
    main: "#20CF8F"
};
export default function Filters({ filters, setFilters, coast, setCoast }:
    { filters: string[], setFilters: Function, coast: number, setCoast: Function }) {
    const [open, setOpen] = useState(false);
    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value.replace(/\s/g, ''), 10);
        if (!isNaN(value)) {
            setCoast(value);
        }
    };

    const handleSliderChange = (_event: Event, newValue: number | number[]) => {
        setCoast(newValue as number);
    };

    const handleChangeFilters = (filter: string) => {
        if (filters.includes(filter)) {
            setFilters(filters.filter((item) => item !== filter));
        } else {
            setFilters([...filters, filter]);
        }
    }

    return (
        <>
            <div className='filters__container'>
                {data?.map((item) => (
                    <FormGroup key={item.id} sx={{ mb: 2 }}>
                        <FormLabel>{item.title}</FormLabel>
                        {item.filter.map((i) => (
                            <FormControlLabel
                                key={i.id}
                                control={<Checkbox sx={{ '&.Mui-checked': { color: primary.main } }} />}
                                label={i.name}
                                onChange={() => handleChangeFilters(i.name)}
                                checked={filters.includes(i.name)}
                            />
                        ))}
                    </FormGroup>
                ))
                }

                <Box sx={{
                    width: 200,
                    color: 'primary.main',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <TextField
                        onChange={handleTextFieldChange}
                        id="filled-size-normal"
                        value={coast.toLocaleString()}
                        defaultValue={coast.toLocaleString()}
                        sx={{ width: 200, color: primary.main }}
                    />

                    <TextField
                        disabled
                        value="3 150 000"
                        id="filled-size-normal"
                        sx={{ width: 200, color: primary.main }}
                    />

                </Box>

                <Slider
                    onChange={handleSliderChange}
                    value={coast}
                    min={72_300}
                    max={3_150_000}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    sx={{
                        width: 200,
                        color: primary.main,
                    }}
                />
            </div>
            <Button
                startIcon={<FilterAltIcon />}
                onClick={() => setOpen(true)}
                sx={{
                    color: "#20CF8F",
                    display: "none",
                    "@media (max-width: 600px)": { display: "flex" }
                }}
            >
                Фильтры
            </Button>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onOpen={() => { }}
                onClose={() => setOpen(false)}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 200,
                        padding: 4
                    }}>
                    <List>
                        {data?.map((item) => (
                            <FormGroup key={item.id} sx={{ mb: 2 }}>
                                <FormLabel>{item.title}</FormLabel>
                                {item.filter.map((i) => (
                                    <FormControlLabel
                                        key={i.id}
                                        control={<Checkbox sx={{ '&.Mui-checked': { color: primary.main } }} />}
                                        label={i.name}
                                        onChange={() => handleChangeFilters(i.name)}
                                        checked={filters.includes(i.name)}
                                    />
                                ))}
                            </FormGroup>
                        ))
                        }
                    </List>
                </Box>
            </SwipeableDrawer>
        </>
    )
}