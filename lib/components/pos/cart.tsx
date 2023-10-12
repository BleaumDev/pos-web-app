import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

const CartPage = () => {
  return (
    <Box
      mt="-4em"
      borderRadius="1em"
      background="#ffffff"
      overflowY="scroll"
      overflowX="hidden"
      h="100vh"
      zIndex={1000}
    >
      <Box>
        <Flex
          p="20px 20px 10px 20px"
          borderBottom="1px solid #000000"
          justifyContent="space-between"
        >
          <Text
            fontSize="16px"
            className="primary-font-semibold"
            color="#41454B"
            fontWeight="400"
          >
            New Order Bill
          </Text>
          <Flex fontSize="12px" gap="5px">
            <Text
              color="rgba(65, 69, 75, 0.50)"
              className="primary-font-semibold"
            >
              Bud-tender:
            </Text>
            <Text color="#41454B" className="primary-font-semi-bold-italic">
              Mr. Happy
            </Text>
          </Flex>
        </Flex>
        <Flex
          transform="translate(0%, 300px)"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Img src="/images/cart.png" w="110px" height="auto" />{' '}
            <Text
              fontSize="12px"
              color="rgba(65, 69, 75, 0.50)"
              className="primary-font-semi-bold-italic"
            >
              No Product added yet
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CartPage;
