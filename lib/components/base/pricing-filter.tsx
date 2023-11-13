import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const PricingFilter = () => {
  const [isOpenPricing, setIsOpenPricing] = useState(false);

  const toggleOptionsPricing = () => {
    setIsOpenPricing(!isOpenPricing);
  };
  return (
    <Box position="relative">
      <Flex
        onClick={toggleOptionsPricing}
        justifyContent="space-between"
        cursor="pointer"
        p="7px 10px"
        h="37px"
        border="0.5px solid rgba(65, 69, 75, 0.40)"
        borderRadius="8px"
        w="140px"
        zIndex="1000"
      >
        <Text
          color="rgba(18, 23, 30, 0.70)"
          fontSize="12px"
          className="primary-font-medium"
        >
          Price
        </Text>
        <ChevronDownIcon />
      </Flex>
      <Collapse in={isOpenPricing}>
        <Stack
          background={'#FFF'}
          w="200px"
          mt="3em"
          p="16px"
          position="absolute"
          left="-1em"
          top="5px"
          boxShadow="11px 0px 23px 0px rgba(0, 0, 0, 0.13)"
          borderRadius="10px 0px 10px 10px"
        >
          <Flex justifyContent="space-between">
            <Stack>
              <Text
                color="#41454B"
                fontSize="12px"
                className="primary-font-semibold"
              >
                Min Price
              </Text>
              <Input
                placeholder="From"
                w="80px"
                color="#FF8A43"
                mt="5px !important"
                h="24px"
                fontSize="12px"
              />
            </Stack>
            <Stack>
              <Text
                color="#41454B"
                fontSize="12px"
                className="primary-font-semibold"
              >
                Max Price
              </Text>
              <Input
                placeholder="To"
                w="80px"
                color="#FF8A43"
                mt="5px !important"
                h="24px"
                fontSize="12px"
              />
            </Stack>
          </Flex>
          <Divider className="mx-5 my-4" />
          <Text
            color="#41454B"
            fontSize="12px"
            mt="10px"
            className="primary-font-semibold"
          >
            Suggestions
          </Text>
          <Button
            background="none"
            border="0.5px solid rgba(65, 69, 75, 0.50)"
            borderRadius="4px"
            color="rgba(18, 23, 30, 0.30)"
            fontSize="12px"
            mt="10px"
            className="primary-font-medium"
            w="full"
            h="24px"
          >
            Less than $5
          </Button>
          <Button
            background="none"
            border="0.5px solid rgba(65, 69, 75, 0.50)"
            borderRadius="4px"
            color="rgba(18, 23, 30, 0.30)"
            fontSize="12px"
            mt="10px"
            className="primary-font-medium"
            w="full"
            h="24px"
          >
            From $5 to $49
          </Button>
          <Button
            background="none"
            border="0.5px solid rgba(65, 69, 75, 0.50)"
            borderRadius="4px"
            color="rgba(18, 23, 30, 0.30)"
            fontSize="12px"
            mt="10px"
            className="primary-font-medium"
            w="full"
            h="24px"
          >
            From $50 to $99
          </Button>
          <Button
            background="#FF8A43"
            borderRadius="8px"
            h="29px"
            color="#fff"
            mt="16px !important"
            fontSize="14px"
          >
            Apply
          </Button>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default PricingFilter;
