import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectTyp = ({ setTyp, typ }) => {
    const handleChange = (event) => {
        setTyp(event.target.value);
    };
    console.log(typ);
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="typ">Typ</InputLabel>
                <Select
                    labelId="typ"
                    value={typ}
                    label="Typ"
                    onChange={handleChange}
                    sx={{ fontWeight: '600' }}>
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value={'Auftrag'} sx={{ fontWeight: '600' }}>
                        Auftrag
                    </MenuItem>
                    <MenuItem value={'Zähler'} sx={{ fontWeight: '600' }}>
                        Zähler
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectTyp;
