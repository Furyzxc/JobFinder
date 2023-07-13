import {ChangeEvent, FocusEvent, useEffect, useState} from "react";
import {TextField} from "@mui/material";
import Box from '@mui/material/Box';

interface InputProps {
    name: string;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    value: string | null
}

export const Input = ({ name, onBlur, value }: InputProps) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {   
        value && setInputValue(value)
    }, [value]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)

    return (
        <div>
            <TextField
                sx={{width: '400px'}}
                label={name} variant="standard"
                value={inputValue}
                onChange={handleInputChange}
                name={name}
                onBlur={onBlur}
                autoComplete='off'
            />
        </div>
    );
};