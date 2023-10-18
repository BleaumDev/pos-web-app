import { Box, Flex, Img, Stack } from '@chakra-ui/react';

import Label from '../base/label';
import Text from '../base/text';
import InventoryDetail from './inventory-detail';

const DetailProductInformation = () => {
  return (
    <Box
      display={{
        base: 'grid',
        md: 'flex',
      }}
      w="100%"
    >
      <Box w={{ base: '100%', md: '50%' }}>
        <Box
          display={{
            base: 'grid',
            md: 'flex',
          }}
          w="100%"
        >
          <Box w={{ base: '100%', md: '50%' }}>
            <Stack>
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Product Name
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                {' '}
                Coastal Kush
              </Text>
            </Stack>
            <Stack mt="1em">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                SKU
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                {' '}
                25313DH
              </Text>
            </Stack>
            <Stack mt="1em">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Total Quantity
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                {' '}
                100 items
              </Text>
            </Stack>
            <Stack mt="1em">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Type Of Pricing
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                {' '}
                Simple
              </Text>
            </Stack>
            <Stack mt="1em">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Sales Price:
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                {' '}
                $52
              </Text>
            </Stack>
            <Stack mt="1em">
              <Flex>
                <Label
                  fontSize={{
                    base: '16px',
                    sm: '18px',
                    md: '20px',
                  }}
                  className="primary-font-semibold"
                >
                  Barcode
                </Label>

                <Box
                  padding="4.421px"
                  background="rgba(233, 240, 248, 0.50)"
                  borderRadius="3px"
                  cursor="pointer"
                  _hover={{
                    background: 'rgba(233, 240, 248, 0.90)',
                  }}
                  mt="4px"
                  ml="10px"
                >
                  <Img src="/images/copy.png" w="16px" h="16px" />
                </Box>
              </Flex>
              <Img src="/images/sample_barcode.png" w="171px" h="67px" />
            </Stack>
          </Box>
          <Box w={{ base: '100%', md: '50%' }} mt="3.8em">
            <Stack>
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Unit Of Measure
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                Each
              </Text>
            </Stack>
            <Stack mt="1em">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Quantity Remaining
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                {' '}
                30 items
              </Text>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box w={{ base: '100%', md: '50%' }}>
        <Box
          display={{
            base: 'grid',
            md: 'flex',
          }}
          w="100%"
        >
          <Box w={{ base: '100%', md: '50%' }}>
            <Stack>
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Cannabis Type
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                {' '}
                Indica
              </Text>
            </Stack>
            <Stack mt="1em">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Manufacturer
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                {' '}
                Cat Enterprise
              </Text>
            </Stack>
            <Stack mt="1em" w="280px" pr="1em">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Description
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                {' '}
                Coastal Kush has a unique terpene profile that produces an
                intense, spicy and herbaceous aroma, with notes of mahogany,
                sweet flowers and citrus.
              </Text>
            </Stack>
            <Stack mt="1em" w="280px" pr="1em">
              <InventoryDetail className="primary-font-medium" />
            </Stack>
          </Box>
          <Box w={{ base: '100%', md: '50%' }}>
            <Stack>
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Category
              </Label>
              <Text styledVariant="textMedium" mt="-5px">
                Pre-Rolled
              </Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailProductInformation;
