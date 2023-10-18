import { Box, Flex, Select, Stack, Text, Textarea } from '@chakra-ui/react';

import Input from '../base/input';
import Label from '../base/label';
import ComplexPricingInputRow from './ComplexPricingInputRow';

const categories = ['Capsules', 'Edibles', 'Tinctures', 'Flowers', 'Drinks'];
const manufacturers = [
  'Cresco Labs',
  'Aphira Inc',
  'Steep Hill, INC',
  'Trulieve Canabis',
  'MariMed Inc',
];
const units = ['Grams', 'Ounces', 'Pounds', 'Kilograms'];
const GeneralInformation = () => {
  return (
    <>
      <Stack mt="20px">
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Product Name
        </Label>

        <Box mt="-5px">
          <Input placeholder="Name Your Product" h="33px" />
        </Box>
      </Stack>
      <Stack mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Category
        </Label>

        <Box mt="-5px">
          <Select
            color="rgba(65, 69, 75, 0.50)"
            border="1px solid rgba(18, 23, 30, 0.20)"
            h="33px"
            fontSize="14px"
            background="#fff"
            className="primary-font-medium"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </Box>
      </Stack>
      <Stack mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Category
        </Label>

        <Box mt="-5px">
          <Select
            color="rgba(65, 69, 75, 0.50)"
            border="1px solid rgba(18, 23, 30, 0.20)"
            background="#fff"
            h="33px"
            className="primary-font-medium"
            fontSize="14px"
          >
            {manufacturers.map((manufacturer) => (
              <option key={manufacturer} value={manufacturer}>
                {manufacturer}
              </option>
            ))}
          </Select>
        </Box>
      </Stack>
      <Stack mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Description
        </Label>

        <Box mt="-5px">
          <Textarea
            border="1px solid rgba(18, 23, 30, 0.20)"
            color="rgba(65, 69, 75, 0.50)"
            placeholder="Chocolate"
            background="#fff"
            fontSize="14px"
            h="33px"
            className="primary-font-medium"
          />
        </Box>
      </Stack>
      <Box
        display={{
          base: 'grid',
          md: 'flex',
        }}
        gap="10px"
        mt="8px"
        w="full"
      >
        <Stack w={{ base: '100%', md: '50%' }}>
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            SKU
          </Label>

          <Box mt="-5px">
            <Input placeholder="Chocolate" h="33px" />
          </Box>
        </Stack>
        <Stack w={{ base: '100%', md: '50%' }}>
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            Unit Of Measure
          </Label>

          <Box mt="-5px">
            <Select
              color="rgba(65, 69, 75, 0.50)"
              border="1px solid rgba(18, 23, 30, 0.20)"
              background="#fff"
              h="33px"
              fontSize="14px"
              className="primary-font-medium"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </Select>
          </Box>
        </Stack>
      </Box>
      <Flex gap="10px" mt="8px" w="full">
        <Stack w={{ base: '100%', md: '50%' }}>
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            Type of Pricing
          </Label>

          <Box mt="-5px">
            <Select
              color="rgba(65, 69, 75, 0.50)"
              border="1px solid rgba(18, 23, 30, 0.20)"
              h="33px"
              fontSize="14px"
              background="#fff"
              className="primary-font-medium"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </Select>
          </Box>
        </Stack>
        <Stack w={{ base: '100%', md: '50%' }}>
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            Quantity Remaining
          </Label>

          <Box mt="-5px">
            <Input placeholder="30.8 g" h="33px" />
          </Box>
        </Stack>
      </Flex>
      <Stack mt="24px">
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '16px' }}
          className="primary-font-semibold"
        >
          Complex Pricing
        </Label>
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
          mt="12px"
        >
          How do you want to set your product price?
        </Label>
      </Stack>
      <ComplexPricingInputRow />
      <Box mt={4}>
        <Text
          h={6}
          cursor="pointer"
          className="primary-font-semibold"
          color="#FFA382"
        >
          + Add more
        </Text>
      </Box>
    </>
  );
};

export default GeneralInformation;
