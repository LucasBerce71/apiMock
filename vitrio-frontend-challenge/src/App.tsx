import React from 'react';

import './index.css';

import { CardProduct } from './components/CardProduct';
import { Newsletter } from './components/Newsletter';

import { formatCurrencyValue } from './utils/formatCureencyValue';

import apiMock from '../../data/catalogo.json';

export const App: React.FC = () => {

  const imageUrl = "https://juliookubo.vteximg.com.br/arquivos/ids/163870/CAZ101VB_1_frontview.jpg";

  return (
    <>
      <h1>{ apiMock[0].brand }</h1>
      <CardProduct
        image={imageUrl}
        title="TAG HEUER FORMULA 1 QUARTZ MASCULINO PRETO"
        price={formatCurrencyValue(1040)}
        priceDetails="10x de R$1.040,00 sem juros"
      />

      <Newsletter 
        title="ASSINE NOSSA NEWSLETTER"
        subtitle="Fique por dentro das nossas novidades e receba 10% de desconto na primeira compra."
        alertMessage="* válido somente para jóias e não acumulativo com outras promoções"
      />
    </>
  );
}