import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string;
}

export function Button({ label, ...rest }: IButtonProps) {
    return (
        <button {...rest}>
            {label}
        </button>
    );
}