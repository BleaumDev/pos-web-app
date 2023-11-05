import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

interface ProductCardProps {
  imageSrc?: string;
  productName?: string;
  price?: string;
  sku?: string;
  quantity?: string;
  inStoreDate?: string;
}

const CustomerProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  price,
  sku,
  quantity,
  inStoreDate,
}) => {
  return (
    <Box
      borderRadius="6px"
      w="156px"
      h="auto"
      cursor="pointer"
      position="relative"
      border="0.5px solid rgba(65, 69, 75, 0.30)"
      boxShadow="2px 4px 18px 0px rgba(65, 69, 75, 0.12)"
      bg="#fff"
      p="8px"
    >
      <Box
        position="absolute"
        top="3em"
        borderRadius="0px 2.517px 2.517px 0px"
        display="flex"
        justifyContent="center"
        w="64px"
        h="12px"
        left="0px"
        className="primary-font-semibold"
        fontSize="8px"
        alignItems="center"
        p="1.259px 6.293px"
        color="#fff"
        background="linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)"
      >
        {quantity} packs
      </Box>
      <Flex justifyContent="center" alignItems="center">
        <Img src={imageSrc} alt="product-image" w="50px" />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="11px" mt="5px" className="glroy-bold" color="#41454B">
          {productName}
        </Text>
        <Text
          fontSize="8.5px"
          mt="5px"
          className="primary-font-extraBold"
          color="#FF8A43"
        >
          {price}
        </Text>
      </Flex>
      <Flex gap="3px" alignItems="center">
        <Text className="glroy-bold" fontSize="11px" color="#41454B">
          SKU
        </Text>
        <Text className="primary-font-regular" color="#41454B" fontSize="10px">
          {sku}
        </Text>
      </Flex>
      <Flex gap="3px" alignItems="center">
        <Text className="glroy-bold" fontSize="11px" color="#41454B">
          In store at
        </Text>
        <Text className="primary-font-regular" color="#41454B" fontSize="10px">
          {inStoreDate}
        </Text>
      </Flex>
    </Box>
  );
};

export default CustomerProductCard;
