import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';

interface INewsletterProps {
    title: string;
    subtitle: string;
    alertMessage?: string;
};

export function Newsletter({ title, subtitle, alertMessage }: INewsletterProps) {
    return (
        <div>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <h6>{alertMessage}</h6>

            <Input
                type="text"
                name="name"
                placeholder="Seu nome"
            />

            <Input
                type="text"
                name="name"
                placeholder="Seu e-mail"
            />

            <Button label="ENVIAR" />
        </div>
    );
}