/* eslint-disable react/no-array-index-key */
import { Box, Flex } from '@chakra-ui/react';
import PosSidenav from '@lib/components/Layout/Sidebar/PosSidenav';
import CartPage from '@lib/components/pos/cart';
import PosFloatingHeader from '@lib/components/pos/floating-header';
import PosSearch from '@lib/components/pos/pos-search';
import ProductCard from '@lib/components/pos/product-card';
import PsoHeading from '@lib/components/pos/pso-heading';
import SmallCard from '@lib/components/pos/small-card';
import React from 'react';

const categoryData = [
  { title: 'All Items', image: '/images/all-items.png' },
  { title: 'Capsules', image: '/images/capsules.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
  { title: 'Tinctures', image: '/images/tinture.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
  { title: 'Flowers', image: '/images/flowers.png' },
  { title: 'Drinks', image: '/images/drinks.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
];

const manufacturerData = [
  { title: 'All Items', image: '/images/all-items.png' },
  { title: 'Capsules', image: '/images/capsules.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
  { title: 'Tinctures', image: '/images/tinture.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
  { title: 'Flowers', image: '/images/flowers.png' },
  { title: 'Drinks', image: '/images/drinks.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
];

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
];

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
];

const renderSmallCards = (data: any) => (
  <Flex gap="4px" mt="12px">
    {data.map((item: any, index: any) => (
      <SmallCard key={index} title={item.title} image={item.image} />
    ))}
  </Flex>
);

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

const PosPayments = () => {
  return (
    <PosSidenav>
      <Flex position="fixed" top="9.75em" w="100%" gap="20px">
        <Box w="70%">
          <Box>
            <PosFloatingHeader
              title="Wade Warren"
              age="42 years Old"
              lastBreadcrumbColor="#FF8A43"
              breadcrumbs={[
                {
                  label: 'Home',
                  href: '/pos/payments',
                },
                {
                  label: 'POS',
                  href: '/pos/payments',
                },
              ]}
            />
          </Box>
          <Box
            overflowY="scroll"
            px="17px"
            overflowX="hidden"
            h="80vh"
            mb="2em"
            zIndex={1000}
          >
            <PosSearch />
            <PsoHeading
              fontSize1="16px"
              fontSize2="12px"
              subColor="#FF8A43"
              heading="Choose Category"
              subText=" 42+ Categories"
            />
            {renderSmallCards(categoryData)}
            <PsoHeading
              fontSize1="16px"
              fontSize2="12px"
              subColor="#FF8A43"
              heading="Choose Manufacturer"
              subText=" 42+ Categories"
            />
            {renderSmallCards(manufacturerData)}
            <PsoHeading
              fontSize1="20px"
              fontSize2="12px"
              subColor="#E69066"
              heading="Frequently Purchased Products"
              subText="(32 Items)"
            />
            {renderProductCards(frequentlyPurchasedProducts)}
            <PsoHeading
              fontSize1="20px"
              fontSize2="12px"
              subColor="#E69066"
              heading="Recommended Deals"
              subText="(25 Items)"
            />
            {renderProductCards(recommendedDeals)}
          </Box>
        </Box>
        <Box w="30%" pr="6em">
          <CartPage />
        </Box>
      </Flex>
    </PosSidenav>
  );
};

export default PosPayments;
