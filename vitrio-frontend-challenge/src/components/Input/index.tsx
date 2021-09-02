import React, { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    name: string;
    placeholder: string;
}

export function Input({ type, name, placeholder, ...rest }: IInputProps) {
    return (
        <input 
            type={type}
            name={name} 
            placeholder={placeholder} 
            {...rest}
        />
    );
}