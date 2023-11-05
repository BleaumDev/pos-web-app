/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-array-index-key */
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import recommendedDeals from 'data/recommendedDeals';
import { useState } from 'react';

import ProductCard from './product-card';
import PsoHeading from './pso-heading';

interface Product {
  productName: string;
  imageSrc: string;
  price: string;
  sku: string;
  quantity?: string;
  isSimpleProduct?: boolean;
  isComplexProduct?: boolean;
}

const totalPages = Math.ceil(recommendedDeals.length / 6); // Default products per page

const RecommendedDeals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const displayPages = 3;

  // Use media queries to determine the screen size
  const [isLargeScreen] = useMediaQuery('(min-width: 1280px)');
  const [isMedium] = useMediaQuery(
    '(min-width: 1024px) and (max-width: 1279px)'
  );
  const [isTablet] = useMediaQuery(
    '(min-width: 768px) and (max-width: 1023px)'
  );
  const [isMobile] = useMediaQuery('(min-width: 300px) and (max-width: 767px)');

  // Determine the number of products to display per page based on screen size
  let productsPerPage = 6;
  if (isLargeScreen) {
    productsPerPage = 6;
  } else if (isMedium) {
    productsPerPage = 4;
  } else if (isTablet) {
    productsPerPage = 3;
  } else if (isMobile) {
    productsPerPage = 1;
  }

  const renderProductCards = (data: Product[], currentPage: number) => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = data.slice(startIndex, endIndex);

    return (
      <Box
        display="flex"
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
            isSimpleProduct={item.isSimpleProduct}
            isComplexProduct={item.isComplexProduct}
            outStock={!item.quantity}
          />
        ))}
      </Box>
    );
  };

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
        subText={`(${recommendedDeals.length} Items)`}
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
