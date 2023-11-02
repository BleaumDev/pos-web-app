import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Img, Text } from '@chakra-ui/react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Batch CBD Softgels',
    description: '250gm CBD',
    price: '$30.00',
    imageSrc: '/images/bottle1.png',
  },
  {
    id: 2,
    name: 'Volts Cannabis CBD Capsules',
    description: '250gm CBD',
    price: '$34.00',
    imageSrc: '/images/bottle2.png',
  },
  {
    id: 3,
    name: 'Batch CBD Softgels',
    description: '250gm CBD',
    price: '$30.00',
    imageSrc: '/images/bottle1.png',
  },
  {
    id: 4,
    name: 'Volts Cannabis CBD Capsules',
    description: '250gm CBD',
    price: '$34.00',
    imageSrc: '/images/bottle2.png',
  },
];

const AddProduct = () => {
  const [productCount, setProductCount] = useState<{
    [productId: number]: number;
  }>({});

  const increment = (productId: number) => {
    setProductCount((prevCount) => ({
      ...prevCount,
      [productId]: (prevCount[productId] || 0) + 1,
    }));
  };

  const decrement = (productId: number) => {
    if (productCount[productId] > 0) {
      setProductCount((prevCount) => ({
        ...prevCount,
        [productId]: prevCount[productId] - 1,
      }));
    }
  };

  return (
    <div>
      {products.map((product) => (
        <Flex
          key={product.id}
          gap="13px"
          justifyContent="space-between"
          m="10px 10px"
          background="#f6fcff"
          w="95%"
          padding="6px 14px"
          borderRadius="8px"
        >
          <Flex gap="10px" justifyContent="center" alignItems="center">
            <Img src={product.imageSrc} w="56px" h="56px" alt={product.name} />
            <Box>
              <Text
                fontSize="14px"
                className="glroy-bold"
                color="#41454B"
                w={{
                  base: 'auto',
                  md: '200px',
                }}
                fontWeight="400"
              >
                {product.name}
              </Text>
              <Text
                fontSize="12px"
                className="primary-font-regular-italic"
                color="#41454B"
                fontWeight="400"
              >
                {product.description}
              </Text>
              <Text
                mt="5px"
                fontSize="14px"
                className="primary-font-semibold"
                color="#41454B"
                fontWeight="400"
              >
                {product.price}
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="end" alignItems="end">
            <Flex align="center" gap="5px">
              <IconButton
                background="#e79069"
                color="#fff"
                minWidth="14px !important"
                fontSize="8px"
                height="18px"
                borderRadius="4px 1px 1px 4px"
                aria-label="Decrement"
                icon={<MinusIcon />}
                onClick={() => decrement(product.id)}
              />
              <span style={{ fontSize: '14px', marginTop: '5px' }}>
                {productCount[product.id] || 0}
              </span>
              <IconButton
                background="#e79069"
                color="#fff"
                minWidth="14px !important"
                fontSize="8px"
                height="18px"
                borderRadius="1px 4px 4px 1px"
                aria-label="Increment"
                icon={<AddIcon />}
                onClick={() => increment(product.id)}
              />
            </Flex>
          </Flex>
        </Flex>
      ))}
    </div>
  );
};

export default AddProduct;
