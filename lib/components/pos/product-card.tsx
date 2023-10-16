import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  price: string;
  sku: string;
  quantity: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  price,
  sku,
  quantity,
}) => {
  return (
    <Box
      borderRadius="12px"
      w="140px"
      cursor="pointer"
      position="relative"
      h="200px"
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
        <Img src={imageSrc} alt="product-image" />
      </Flex>
      <Text
        fontSize="10px"
        mt="5px"
        className="primary-font-semi-bold-italic"
        color="#41454B"
      >
        {productName}
      </Text>
      <Text
        fontSize="16px"
        mt="5px"
        className="primary-font-extraBold"
        color="#FF8A43"
      >
        {price}
      </Text>
      <Flex gap="3px">
        <Text className="primary-font-semibold" fontSize="10px" color="#41454B">
          SKU
        </Text>
        <Text className="primary-font-regular" color="#41454B" fontSize="9px">
          {sku}
        </Text>
      </Flex>
      <Button
        background="#EBFBFF"
        border="0.3px solid #192837"
        p="6px 0px"
        position="absolute"
        w="120px"
        left="10px"
        h="24px"
        bottom="10px"
        fontSize="10px"
        className="primary-font-semibold"
        _hover={{ background: '#EBFBFF' }}
      >
        Add Product
      </Button>
    </Box>
  );
};

export default ProductCard;
