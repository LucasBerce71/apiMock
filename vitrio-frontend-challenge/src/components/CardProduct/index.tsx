import React, { useState } from 'react';
import { Button } from '../Button';

import './styles.scss';

interface ICardProductProps {
    image: string;
    title: string;
    price: any;
    priceDetails: string;
}

export function CardProduct({ image, title, price, priceDetails }: ICardProductProps) {
    const [buttonIsHover, setButtonIsHover] = useState<boolean>(false);

    function handleButtonIsHover(isHover: boolean) {
        setButtonIsHover(isHover);
    }

    return (
        <div 
            onMouseOver={() => handleButtonIsHover(true)}
            onMouseOut={() => handleButtonIsHover(false)}
        >
            <img src={image} className="imageProduct" />

            <h4>{title}</h4>
            <p>{price}</p>
            <p>{priceDetails}</p>

            <Button 
                label="COMPRAR"
                className={buttonIsHover ? 'buttonVisible' : 'buttonHidden'} 
            />
        </div>
    );
}