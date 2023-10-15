/* eslint-disable react/no-array-index-key */
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { useState } from 'react';

import ProductCard from './product-card';
import PsoHeading from './pso-heading';

const recommendedDeals = [
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
  {
    productName: 'adada',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
  {
    productName: 'Volts adadad',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
  {
    productName: 'Volts Cannabisadadad',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
  {
    productName: 'Volts Cannabis CBD adada',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
  {
    productName: 'Volts adada CBD Capsules',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
  {
    productName: 'Volts Cannabis adadad Capsules',
    imageSrc: '/images/bottle.png',
    price: '$68.00',
    sku: '1426384',
    quantity: '88',
  },
];

interface Product {
  productName: string;
  imageSrc: string;
  price: string;
  sku: string;
  quantity: string;
}

const ProductsPerPage = 6;
const totalPages = Math.ceil(recommendedDeals.length / ProductsPerPage);

const renderProductCards = (data: Product[], currentPage: number) => {
  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;
  const productsToShow = data.slice(startIndex, endIndex);

  return (
    <Box display="flex" flexWrap="wrap" gap="20px" mt="12px">
      {productsToShow.map((item, index) => (
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
};

const RecommendedDeals = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Box mt="1em">
      <PsoHeading
        fontSize1="20px"
        fontSize2="12px"
        subColor="#E69066"
        heading="Recommended Deals"
        subText="(25 Items)"
      />
      {renderProductCards(recommendedDeals, currentPage)}
      <Flex justifyContent="end">
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous Page"
          variant="ghost"
          isDisabled={currentPage === 1}
          onClick={handlePreviousPage}
        />
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next Page"
          variant="ghost"
          isDisabled={currentPage === totalPages}
          onClick={handleNextPage}
        />
      </Flex>
    </Box>
  );
};

export default RecommendedDeals;
