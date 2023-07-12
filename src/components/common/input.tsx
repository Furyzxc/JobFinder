import {ChangeEvent, FocusEvent, useEffect, useState} from "react";

interface InputProps {
    name: string;
    placeholder: string;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    label: string;
    value: string | null
}

export const Input = ({ name, placeholder, onBlur, label, value }: InputProps) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {   
        value && setInputValue(value)
    }, [value]);
    

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)

    return (
        <div className='form__group'>
            <input
                className='form__field'
                value={inputValue}
                onChange={handleInputChange}
                name={name}
                placeholder={placeholder}
                onBlur={onBlur}
                autoComplete='off'
            />
            <label htmlFor={name} className='form__label'>{label}</label>
        </div>
    );
};