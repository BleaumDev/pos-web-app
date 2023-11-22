import { Box, Flex, Stack, Textarea } from '@chakra-ui/react';

import { Field, Formik } from 'formik';
import Input from '../base/input';
import Label from '../base/label';
import Select, { OptionsType } from '../base/select';
import ComplexPricingInputRow from './ComplexPricingInputRow';

const categories: OptionsType = [
  {
    key: 'Capsules',
    value: 'Capsules',
    label: 'Capsules',
  },
  {
    key: 'Edibles',
    value: 'Edibles',
    label: 'Edibles',
  },
  {
    key: 'Tinctures',
    value: 'Tinctures',
    label: 'Tinctures',
  },
  {
    key: 'Flowers',
    value: 'Flowers',
    label: 'Flowers',
  },
  {
    key: 'Drinks',
    value: 'Drinks',
    label: 'Drinks',
  },
];

const manufacturers: OptionsType = [
  {
    key: 'Cresco Labs',
    value: 'Cresco Labs',
    label: 'Cresco Labs',
  },
  {
    key: 'Aphira Inc',
    value: 'Aphira Inc',
    label: 'Aphira Inc',
  },
  {
    key: 'Steep Hill, INC',
    value: 'Steep Hill, INC',
    label: 'Steep Hill, INC',
  },
  {
    key: 'Trulieve Canabis',
    value: 'Trulieve Canabis',
    label: 'Trulieve Canabis',
  },
  {
    key: 'MariMed Inc',
    value: 'MariMed Inc',
    label: 'MariMed Inc',
  },
];

const units: OptionsType = [
  {
    key: 'Grams',
    value: 'Grams',
    label: 'Grams',
  },
  {
    key: 'Ounces',
    value: 'Ounces',
    label: 'Ounces',
  },
  {
    key: 'Pounds',
    value: 'Pounds',
    label: 'Pounds',
  },
  {
    key: 'Kilograms',
    value: 'Kilograms',
    label: 'Kilograms',
  },
];

const pricingType: OptionsType = [
  {
    key: 'Simple Pricing',
    value: 'Simple Pricing',
    label: 'Simple Pricing',
  },
  {
    key: 'Complex Pricing',
    value: 'Complex Pricing',
    label: 'Complex Pricing',
  },
];
const GeneralInformation = () => {
  return (
    <Formik
      initialValues={{
        categories: '',
        manufacturers: '',
        units: '',
        pricingType: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <form>
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
                <Field
                  name="categories"
                  borderRadius="4px"
                  component={Select}
                  fontSize="14px"
                  minHeight="35px"
                  height="35px"
                  options={categories}
                  placeholder="Select category"
                />
              </Box>
            </Stack>
            <Stack mt="8px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Manufacturer
              </Label>

              <Box mt="-5px">
                <Field
                  name="manufacturers"
                  borderRadius="4px"
                  component={Select}
                  fontSize="14px"
                  minHeight="35px"
                  height="35px"
                  options={manufacturers}
                  placeholder="Select manufacturer"
                />
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
                  <Field
                    name="units"
                    borderRadius="4px"
                    component={Select}
                    fontSize="14px"
                    minHeight="35px"
                    height="35px"
                    options={units}
                    placeholder="Select unit of measure"
                  />
                </Box>
              </Stack>
            </Box>
            <Flex gap="10px" mt="1em" w="full">
              <Stack w={{ base: '100%', md: '50%' }}>
                <Label
                  fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                  className="primary-font-semibold"
                >
                  Type of Pricing
                </Label>

                <Box mt="-5px">
                  <Field
                    name="pricingType"
                    borderRadius="4px"
                    component={Select}
                    fontSize="14px"
                    minHeight="35px"
                    height="35px"
                    options={pricingType}
                    placeholder="Select pricing type"
                  />
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
                className="glroy-bold"
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
          </>
        </form>
      )}
    </Formik>
  );
};

export default GeneralInformation;
