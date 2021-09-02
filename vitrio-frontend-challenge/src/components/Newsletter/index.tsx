import React, { FormEvent, useState, useEffect } from 'react';

import './styles.scss';

import { Button } from '../Button';
import { Input } from '../Input';

interface INewsletterProps {
    title: string;
    subtitle: string;
    alertMessage?: string;
};

export function Newsletter({ title, subtitle, alertMessage }: INewsletterProps) {
    const [inputNameValue, setInputNameValue] = useState<string>('');
    const [inputMailValue, setInputMailValue] = useState<string>('');
    const [inputNameIsRequired, setInputNameIsRequired] = useState<boolean>(false);
    const [inputMailIsRequired, setInputMailIsRequired] = useState<boolean>(false);

    useEffect(() => {
        if (inputNameValue !== "") setInputNameIsRequired(false);

        if (inputMailValue !== "") setInputMailIsRequired(false);

    }, [inputNameValue, inputMailValue]);

    function handleValidateFields() {
        if (inputNameValue === "" && inputMailValue !== "") {
            return 'FIELD_NAME_EMPTY';
        } else if (inputMailValue === "" && inputNameValue !== "") {
            return 'FIELD_MAIL_EMPTY';
        } else if (inputMailValue === "" && inputNameValue === "") {
            return 'FIELD_ALL_EMPTY';
        }
    
        return 'SUCCESS';
    }
    
    function handleSubmitForm(e: FormEvent) {
        e.preventDefault();

        const verifyFields = handleValidateFields();

        if (verifyFields === 'SUCCESS') {
            setInputNameValue("");
            setInputMailValue("");
        } else if (verifyFields === 'FIELD_MAIL_EMPTY') {
            alert('INFORME O CAMPO E-MAIL!');
            setInputMailIsRequired(true);
            handleValidateFields();
        } else if (verifyFields === 'FIELD_NAME_EMPTY') {
            alert('INFORME O CAMPO NOME!');
            setInputNameIsRequired(true);
            handleValidateFields();
        } else {
            alert('INFORME TODOS OS CAMPOS!');
            setInputNameIsRequired(true);
            setInputMailIsRequired(true);
            handleValidateFields();
        }
    }

    return (
        <div>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <h6>{alertMessage}</h6>

            <form onSubmit={handleSubmitForm}>
                <Input
                    className={inputNameIsRequired ? 'inputNameRequired' : ''}
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={inputNameValue}
                    onChange={(e) => setInputNameValue(e.target.value)}
                />

                <Input
                    className={inputMailIsRequired ? 'inputMailRequired' : ''}
                    type="email"
                    name="name"
                    placeholder="Seu e-mail"
                    value={inputMailValue}
                    onChange={(e) => setInputMailValue(e.target.value)}
                />

                <Button 
                    label="ENVIAR"  
                    onClick={() => handleSubmitForm}
                />
            </form>
        </div>
    );
}