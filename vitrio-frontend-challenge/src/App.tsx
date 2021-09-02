import React, { useState, useEffect } from 'react';

import './index.css';

import { CardProduct } from './components/CardProduct';
import { Newsletter } from './components/Newsletter';

import { formatCurrencyValue } from './utils/formatCureencyValue';

import api from './services/api';
import { formatProductDetail } from './utils/formatProductDetail';

interface IProduct {
  productName: string;
  items: [{
    sellers: [{
      commertialOffer: {
        Price: number;
        Installments: [{
          Value: number;
        }]
      }
    }]
  }];
  itemMetadata: {
    items: [{
      MainImage: string;
    }];
  };
}


export const App: React.FC = () => {

  const [productData, setProductData] = useState<Array<IProduct>>();

  const imageUrl = "https://juliookubo.vteximg.com.br/arquivos/ids/163870/CAZ101VB_1_frontview.jpg";

  async function getValues() {
    const response = await api.get('LucasBerce71/apiMock/main/data/catalogo.json');

    setProductData(response.data);
  }

  useEffect(() => {
    getValues();
  }, []);

  return (
    <>
      {productData?.map((product) => (
        <CardProduct
          image={product?.itemMetadata?.items?.[0]?.MainImage || imageUrl}
          title={product?.productName}
          price={formatCurrencyValue(product?.items[0]?.sellers[0]?.commertialOffer?.Price)}
          priceDetails={formatProductDetail(
            product?.items[0]?.sellers[0]?.commertialOffer?.Installments[0]?.Value
          )}
        />
      ))

      }

      <Newsletter
        title="ASSINE NOSSA NEWSLETTER"
        subtitle="Fique por dentro das nossas novidades e receba 10% de desconto na primeira compra."
        alertMessage="* válido somente para jóias e não acumulativo com outras promoções"
      />
    </>
  );
}