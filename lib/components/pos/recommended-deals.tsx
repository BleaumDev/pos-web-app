/* eslint-disable react/no-array-index-key */
import { Box, Flex } from '@chakra-ui/react';
import recommendedDeals from 'data/recommendedDeals';
import { useState } from 'react';

import ProductCard from './product-card';
import PsoHeading from './pso-heading';

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
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      gap="20px"
      mt="12px"
    >
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

  const displayPages = 3;

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPages }).map(
      (_, index) => index + 1
    );

    if (totalPages <= displayPages) {
      return pageNumbers;
    }

    const displayedPageNumbers = [];

    if (currentPage <= displayPages) {
      displayedPageNumbers.push(...pageNumbers.slice(0, displayPages));
      displayedPageNumbers.push('...');
    } else if (currentPage > totalPages - displayPages) {
      displayedPageNumbers.push('...');
      displayedPageNumbers.push(
        ...pageNumbers.slice(totalPages - displayPages, totalPages)
      );
    } else {
      displayedPageNumbers.push('...');
      const start = currentPage - Math.floor((displayPages - 1) / 2);
      const end = currentPage + Math.ceil((displayPages - 1) / 2);
      displayedPageNumbers.push(...pageNumbers.slice(start - 1, end));
      displayedPageNumbers.push('...');
    }

    return displayedPageNumbers;
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
        <Box onClick={handlePreviousPage}>
          <img src="/images/prev.png" alt="" className="pag-button" />
        </Box>
        {renderPageNumbers().map((page, index) => (
          <Box
            key={index}
            onClick={() => {
              if (page === '...') return;
              setCurrentPage(Number(page));
            }}
            className={`pagination-tag1 ${
              page === currentPage ? 'current' : ''
            }`}
          >
            {page}
          </Box>
        ))}
        <Box onClick={handleNextPage}>
          <img src="/images/next.png" alt="" className="pag-button" />
        </Box>
      </Flex>
    </Box>
  );
};

export default RecommendedDeals;
