import {
  Box,
  Checkbox,
  Flex,
  Image,
  Img,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useState } from 'react';
import Label from '../base/label';
import Select, { OptionsType } from '../base/select';
import TaxRateInput from './tax-rate-input';

const states: OptionsType = [
  {
    key: 'All Products',
    value: 'All Products',
    label: 'All Products',
  },
  {
    key: 'CBD dominants(CBD ≥60% and <98%)',
    value: 'CBD dominants(CBD ≥60% and <98%)',
    label: 'CBD dominants(CBD ≥60% and <98%)',
  },
  {
    key: 'Balanced products (CBD <60% and ≥40%)',
    value: 'Balanced products (CBD <60% and ≥40%)',
    label: 'Balanced products (CBD <60% and ≥40%)',
  },
  {
    key: 'THC dominant products (THC 60-98%)',
    value: 'THC dominant products (THC 60-98%)',
    label: 'THC dominant products (THC 60-98%)',
  },
  {
    key: 'District Cannabis CBD Capsules',
    value: 'District Cannabis CBD Capsules',
    label: 'District Cannabis CBD Capsules',
  },
];

const AddTax = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Box
      borderRadius="8px"
      m={{
        base: '0em 0em',
        md: '0em 2em',
      }}
      background="#F6FCFF"
      p="1em"
      w={{
        base: '100%',
        md: '50%',
      }}
      border="0.5px solid rgba(65, 69, 75, 0.30)"
    >
      <Formik
        initialValues={{
          selectedOption: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <form>
            <Stack w="100%" mt="1em">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '14px' }}
                className="primary-font-semibold"
              >
                Tax Name
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>

              <Box mt="-8px">
                <Input
                  placeholder="Enter The Tax Name"
                  background="#fff"
                  className="primary-font-medium"
                  h="33px"
                  fontSize="12px"
                />
              </Box>
            </Stack>
            <Stack w="100%" mt="8px">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '14px' }}
                className="primary-font-semibold"
              >
                Tax Rate
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>

              <Box mt="-8px">
                <TaxRateInput />
              </Box>
            </Stack>
            <Stack w="100%" mt="8px">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '14px' }}
                className="primary-font-semibold"
              >
                Tax Applies to
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>

              <Box mt="-8px">
                <Field
                  name="states"
                  borderRadius="4px"
                  component={Select}
                  fontSize="14px"
                  minHeight="33px"
                  height="33px"
                  options={states}
                  placeholder="Select State"
                />
              </Box>
            </Stack>
            <Flex w="100%" mt="8px" justifyContent="space-between">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '14px' }}
                className="primary-font-semibold"
              >
                Compound Taxation
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>
              <Popover>
                <PopoverTrigger>
                  <Image
                    src="/images/info-icon.png"
                    cursor="pointer"
                    w="14px"
                    h="14.6px"
                  />
                </PopoverTrigger>
                <PopoverContent w="220px">
                  <PopoverArrow />
                  <PopoverBody>
                    <Text fontSize="12px">
                      <strong>Included Taxes</strong> - Only add included taxes
                      if you know your state has compounded taxes. Compounded
                      Taxes are a unique type of tax that is applied to the net
                      price of an item plus other taxes. So instead of
                      percentages being calculated on just the net, we add
                      standard taxes to that value before calculating compounded
                      taxes.
                    </Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Stack w="100%" mt="8px">
              <Flex gap="10px" mt="6px">
                <Box cursor="pointer" onClick={toggleExpanded}>
                  <Img
                    src={
                      isExpanded ? '/images/down1.png' : '/images/right1.png'
                    }
                    w="12px"
                    h="auto"
                    transition="0.3s ease-in-out"
                    mt="4px"
                  />
                </Box>
                <Text
                  color="#41454B"
                  fontSize="12px"
                  className="primary-font-semibold"
                >
                  Included Taxes
                </Text>
              </Flex>
              {isExpanded && (
                <>
                  <Box mt="10px" transition="0.3s ease-in-out">
                    <Text
                      color="#41454B"
                      fontSize="12px"
                      className="primary-font-semibold"
                    >
                      Select taxes to include when
                    </Text>
                    <Checkbox
                      mt="10px"
                      size={'sm'}
                      className="primary-font-medium"
                      fontSize="10px"
                    >
                      OMMA Tax
                    </Checkbox>
                  </Box>
                  <Box transition="0.3s ease-in-out">
                    <Checkbox
                      size={'sm'}
                      className="primary-font-medium"
                      fontSize="10px"
                    >
                      Sales Tax(VERIFY)
                    </Checkbox>
                  </Box>
                </>
              )}
            </Stack>
            <Stack gap="10px" mt="1em">
              <Text
                color="#41454B"
                fontSize="12px"
                className="primary-font-semibold"
              >
                Exclude From Recreational Customers
              </Text>
              <Switch colorScheme="blue" size="sm" />
            </Stack>
            <Stack gap="10px" mt="1em">
              <Text
                color="#41454B"
                fontSize="12px"
                className="primary-font-semibold"
              >
                Exclude From Tax Exempt Customers
              </Text>
              <Switch colorScheme="blue" size="sm" />
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddTax;
