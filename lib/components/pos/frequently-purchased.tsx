/* eslint-disable react/no-array-index-key */
import { Box } from '@chakra-ui/react';

import ProductCard from './product-card';
import PsoHeading from './pso-heading';

const frequentlyPurchasedProducts = [
  {
    productName: 'Volts Cannabis CBD Capsules',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
  {
    productName: 'Volts Cannabis CBD Capsules',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
  {
    productName: 'Volts Cannabis CBD Capsules',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
  {
    productName: 'Volts Cannabis CBD Capsules',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
  {
    productName: 'Volts Cannabis CBD Capsules',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
  {
    productName: 'Volts Cannabis CBD Capsules',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
];

const renderProductCards = (data: any) => (
  <Box display="flex" gap="20px" mt="12px">
    {data.map((item: any, index: any) => (
      <ProductCard
        key={index}
        productName={item.productName}
        imageSrc={item.imageSrc}
        price={item.price}
        sku={item.sku}
        quantity={item.quantity}
      />
    ))}
  </Box>
);

const FrequentlyPurchasedProducts = () => {
  return (
    <Box mt="1em">
      <PsoHeading
        fontSize1="20px"
        fontSize2="12px"
        subColor="#E69066"
        heading="Frequently Purchased Products"
        subText="(32 Items)"
      />
      {renderProductCards(frequentlyPurchasedProducts)}
    </Box>
  );
};

export default FrequentlyPurchasedProducts;
