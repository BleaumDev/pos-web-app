import { Box, Flex, Img, Stack, Textarea } from '@chakra-ui/react';

import Input from '../base/input';
import Label from '../base/label';
import ReadOnly from '../base/readonly';
import ComplexPricingTable from './complex-pricing-table';
import InventoryDetail from './inventory-detail';

const EditProductInformation = () => {
  return (
    <Box
      display={{
        base: 'grid',
        md: 'flex',
      }}
      w="100%"
    >
      <Box w={{ base: '100%', md: '50%' }}>
        <Box>
          <Box mr="3em">
            <Stack w="100%">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Product Name
              </Label>
              <Box mt="-5px">
                <ReadOnly placeholder="Coastal Kush" />
              </Box>
            </Stack>
            <Box
              display={{
                base: 'grid',
                md: 'flex',
              }}
              gap="1em"
            >
              <Stack mt="8px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  SKU
                </Label>
                <Box mt="-5px">
                  <Input
                    defaultValue="25313DH"
                    h="33px"
                    color="rgba(65, 69, 75, 0.70)"
                  />
                </Box>
              </Stack>
              <Stack mt="8px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  Unit Of Measure
                </Label>
                <Box mt="-5px">
                  <ReadOnly placeholder="Grams" withArrow />
                </Box>
              </Stack>
            </Box>

            <Box
              display={{
                base: 'grid',
                md: 'flex',
              }}
              gap="1em"
            >
              <Stack mt="8px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  Total Quantity
                </Label>
                <Box mt="-5px">
                  <ReadOnly placeholder="100 g" />
                </Box>
              </Stack>
              <Stack mt="8px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  Quantity Remaining
                </Label>
                <Box mt="-5px">
                  <Input
                    defaultValue="30.8 g"
                    h="33px"
                    color="rgba(65, 69, 75, 0.70)"
                  />
                </Box>
              </Stack>
            </Box>
            <Stack mt="8px" w={{ base: '100%', md: '50%' }}>
              <Label
                fontSize={{
                  base: '12px',
                  sm: '14px',
                  md: '14px',
                }}
                className="primary-font-semibold"
              >
                Type Of Pricing
              </Label>
              <Box mt="-5px">
                <ReadOnly placeholder="Simple" withArrow />
              </Box>
            </Stack>
            <Flex justifyContent="space-between" mt="1em">
              <Label
                fontSize={{
                  base: '12px',
                  sm: '14px',
                  md: '15px',
                }}
                className="glroy-bold"
              >
                Complex Pricing
              </Label>
            </Flex>
            <ComplexPricingTable />
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
        </Box>
      </Box>
      <Box w={{ base: '100%', md: '50%' }} mt="-8px" mx="1em">
        <Box
          display={{
            base: 'grid',
            md: 'flex',
          }}
          gap="1em"
        >
          <Stack mt="8px">
            <Label
              fontSize={{
                base: '12px',
                sm: '14px',
                md: '14px',
              }}
              className="primary-font-semibold"
            >
              Cannabis Type
            </Label>
            <Box mt="-5px">
              <ReadOnly placeholder="Indica" h="33px" />
            </Box>
          </Stack>
          <Stack mt="8px">
            <Label
              fontSize={{
                base: '12px',
                sm: '14px',
                md: '14px',
              }}
              className="primary-font-semibold"
            >
              Category
            </Label>
            <Box mt="-5px">
              <ReadOnly placeholder="Pre-Rolled" withArrow />
            </Box>
          </Stack>
        </Box>
        <Stack mt="8px">
          <Label
            fontSize={{
              base: '12px',
              sm: '14px',
              md: '14px',
            }}
            className="primary-font-semibold"
          >
            Manufacturer
          </Label>
          <Box mt="-5px">
            <ReadOnly placeholder="Cat Enterprise" withArrow />
          </Box>
        </Stack>
        <Stack mt="8px">
          <Label
            fontSize={{
              base: '12px',
              sm: '14px',
              md: '14px',
            }}
            className="primary-font-semibold"
          >
            Description
          </Label>
          <Box mt="-5px">
            <Textarea
              color="rgba(65, 69, 75, 0.70)"
              defaultValue="Coastal Kush has a unique terpene profile that produces an intense, spicy and herbaceous aroma, with notes of mahogany, sweet flowers and citrus."
            />
          </Box>
        </Stack>
        <InventoryDetail className="primary-font-regular-italic" />
      </Box>
    </Box>
  );
};

export default EditProductInformation;
