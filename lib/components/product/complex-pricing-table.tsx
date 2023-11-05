/* eslint-disable react/no-array-index-key */
import { Box, Divider, Flex, Text } from '@chakra-ui/react';

import Label from '../base/label';

const pricingData = [
  { weight: '1g', price: '$3.00' },
  { weight: '2g', price: '$3.00' },
  { weight: '4g', price: '$3.00' },
  { weight: '1g', price: '$3.00' },
];

const ComplexPricingTable = () => {
  return (
    <Box
      m="1em"
      border="0.5px solid rgba(65, 69, 75, 0.70)"
      padding="10px"
      w="188px"
      borderRadius="10px"
    >
      <Flex justifyContent="space-between">
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Weight
        </Label>
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Price
        </Label>
      </Flex>
      <Divider />
      {pricingData.map((item, index: any) => (
        <Flex justifyContent="space-between" key={index} mt="12px">
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            {item.weight}
          </Label>
          <Text
            background="#FFA382"
            borderRadius="4px"
            color="#fff"
            className="primary-font-medium"
            padding="2px 12px"
            fontSize="12px"
            textAlign="center"
            w="60px"
          >
            {item.price}
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default ComplexPricingTable;
