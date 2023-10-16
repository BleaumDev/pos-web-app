import { Box, Flex, Input, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';

import CardInfo from './card-info';

const PaymentMethod = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mt="6px">
        <Text
          color="#41454B"
          fontSize="14px"
          className="primary-font-semi-bold-italic"
        >
          Payment Method
        </Text>
        <Select
          placeholder="Select"
          fontSize="11px"
          onChange={(e) => setSelectedOption(e.target.value)}
          height="24px"
          padding="0px !important"
          borderRadius="0px"
          color="#FFA382"
          className="primary-font-semi-bold-italic"
          w="82px"
          background="#f0f0f1"
        >
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </Select>
      </Flex>
      {selectedOption === 'cash' && (
        <>
          <Flex justifyContent="space-between" mt="10px" alignItems="center">
            <Text
              color="#41454B"
              fontSize="14px"
              className="primary-font-semi-bold-italic"
            >
              Amount Received
            </Text>
            <Box position="relative">
              <Input
                defaultValue="600"
                color="#FFA382"
                borderRadius="2px"
                fontSize="14px"
                p="8px 10px"
                className="primary-font-semi-bold-italic"
                w="82px"
                textAlign="center"
                h="24px"
                background="rgba(65, 69, 75, 0.08)"
                _placeholder={{
                  color: '#FFA382',
                }}
              />
              <Text
                className="primary-font-semi-bold-italic"
                fontSize="14px"
                color="#41454B"
                position="absolute"
                top="3px"
                left="10px"
              >
                {' '}
                $
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" mt="10px" alignItems="center">
            <Text
              color="#41454B"
              fontSize="14px"
              className="primary-font-semi-bold-italic"
            >
              Change
            </Text>
            <Text
              color="#41454B"
              fontSize="14px"
              className="primary-font-semibold"
            >
              $ 49.00
            </Text>
          </Flex>
        </>
      )}

      {selectedOption === 'card' && <CardInfo />}
    </>
  );
};

export default PaymentMethod;
