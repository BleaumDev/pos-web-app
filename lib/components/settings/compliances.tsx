import {
  Box,
  Divider,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Label from '../base/label';
import { OptionsType } from '../base/select';
import QuantitySelectInput from './quantity-input';

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

const Compliances = () => {
  const [valueA, setValueA] = useState('individual');
  const [value, setValue] = React.useState('0');
  const [value1, setValue1] = React.useState('1');
  const [value2, setValue2] = React.useState('2');
  const [value3, setValue3] = React.useState('3');
  const [value4, setValue4] = React.useState('4');
  const [value5, setValue5] = React.useState('5');
  const [value6, setValue6] = React.useState('6');
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Flex
        m={{
          base: '1em 0em',
          md: '1em 4em',
        }}
        alignItems="center"
        gap="10px"
        mt="1em"
      >
        <Text color="#41454B" fontSize="12px" className="primary-font-semibold">
          Enforce Purchase Limits
        </Text>
        <Switch size="sm" />
      </Flex>
      <Flex
        m={{
          base: '1em 0em',
          md: '1em 6em',
        }}
        alignItems="center"
        gap="10px"
        mt="1em"
      >
        <Label
          fontSize={{ base: '12px', sm: '12px', md: '12px' }}
          className="primary-font-semibold"
        >
          Purchase Limit Type
          <span
            style={{
              color: '#FF8A43',
            }}
          >
            *
          </span>
        </Label>
        <RadioGroup onChange={setValueA} value={valueA}>
          <Stack direction="row">
            <Radio value="individual">Individual</Radio>
            <Radio value="combined">Combined</Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <Flex justifyContent="space-between">
        <Flex ml="1em">
          <Label
            fontSize={{ base: '14px', sm: '14px', md: '16px' }}
            ml={2}
            className="glroy-bold"
          >
            Per Visit Purchase limit
          </Label>
        </Flex>
      </Flex>
      <Divider
        my="15px"
        mx={{
          base: '5px',
          md: '20px',
        }}
        borderColor="rgba(18, 23, 30, 0.4)"
      />
      <Text
        color="#41454B"
        m={{
          base: '1em',
          md: '2em 4em',
        }}
        fontSize="14px"
        className="primary-font-semibold"
      >
        Medical Purchase Limit
      </Text>
      <Box mx="3em">
        <Flex alignItems="center" my="1em" justifyContent="center">
          <Flex gap="10px" alignItems="center" justifyContent="end">
            <Flex gap="10px" alignItems="center">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                className="primary-font-semibold"
                w="100px"
                textAlign="end"
              >
                Flowers
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>
              <QuantitySelectInput inputPlaceholder="Enter The Amount" />
            </Flex>
          </Flex>
          <Flex alignItems="center" gap="10px" w="50%" justifyContent="start">
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="UnitWeight">
                  {' '}
                  <Text
                    color={value === 'UnitWeight' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Unit Weight
                  </Text>
                </Radio>
                <Radio value="netWeight">
                  <Text
                    color={value === 'netWeight' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Net Weight
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
        <Flex alignItems="center" my="1em" justifyContent="center">
          <Flex gap="10px" alignItems="center" justifyContent="end">
            <Flex gap="10px" alignItems="center">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                className="primary-font-semibold"
                w="100px"
                textAlign="end"
              >
                Edibles
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>
              <QuantitySelectInput inputPlaceholder="Enter The Amount" />
            </Flex>
          </Flex>
          <Flex alignItems="center" gap="10px" w="50%" justifyContent="start">
            <RadioGroup onChange={setValue1} value={value1}>
              <Stack direction="row">
                <Radio value="UnitWeight1">
                  {' '}
                  <Text
                    color={value1 === 'UnitWeight1' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Unit Weight
                  </Text>
                </Radio>
                <Radio value="netWeight1">
                  <Text
                    color={value1 === 'netWeight1' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Net Weight
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
        <Flex alignItems="center" my="1em" justifyContent="center">
          <Flex gap="10px" alignItems="center" justifyContent="end">
            <Flex gap="10px" alignItems="center">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                className="primary-font-semibold"
                w="100px"
                textAlign="end"
              >
                Liquid Edibles
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>
              <QuantitySelectInput inputPlaceholder="Enter The Amount" />
            </Flex>
          </Flex>
          <Flex alignItems="center" gap="10px" w="50%" justifyContent="start">
            <RadioGroup onChange={setValue2} value={value2}>
              <Stack direction="row">
                <Radio value="UnitWeight2">
                  {' '}
                  <Text
                    color={value2 === 'UnitWeight2' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Unit Weight
                  </Text>
                </Radio>
                <Radio value="netWeight2">
                  <Text
                    color={value2 === 'netWeight2' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Net Weight
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
        <Flex alignItems="center" my="1em" justifyContent="center">
          <Flex gap="10px" alignItems="center" justifyContent="end">
            <Flex gap="10px" alignItems="center">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                className="primary-font-semibold"
                w="100px"
                textAlign="end"
              >
                Concentrates
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>
              <QuantitySelectInput inputPlaceholder="Enter The Amount" />
            </Flex>
          </Flex>
          <Flex alignItems="center" gap="10px" w="50%" justifyContent="start">
            <RadioGroup onChange={setValue3} value={value3}>
              <Stack direction="row">
                <Radio value="UnitWeight3">
                  {' '}
                  <Text
                    color={value3 === 'UnitWeight3' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Unit Weight
                  </Text>
                </Radio>
                <Radio value="netWeight3">
                  <Text
                    color={value3 === 'netWeight3' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Net Weight
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
        <Flex alignItems="center" my="1em" justifyContent="center">
          <Flex gap="10px" alignItems="center" justifyContent="end">
            <Flex gap="10px" alignItems="center">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                className="primary-font-semibold"
                w="100px"
                textAlign="end"
              >
                Topical
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>
              <QuantitySelectInput inputPlaceholder="Enter The Amount" />
            </Flex>
          </Flex>
          <Flex alignItems="center" gap="10px" w="50%" justifyContent="start">
            <RadioGroup onChange={setValue4} value={value4}>
              <Stack direction="row">
                <Radio value="UnitWeight4">
                  {' '}
                  <Text
                    color={value4 === 'UnitWeight4' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Unit Weight
                  </Text>
                </Radio>
                <Radio value="netWeight4">
                  <Text
                    color={value4 === 'netWeight4' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Net Weight
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
        <Flex alignItems="center" my="1em" justifyContent="center">
          <Flex gap="10px" alignItems="center" justifyContent="end">
            <Flex gap="10px" alignItems="center">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                className="primary-font-semibold"
                w="100px"
                textAlign="end"
              >
                Seed
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>
              <QuantitySelectInput inputPlaceholder="Enter The Amount" />
            </Flex>
          </Flex>
          <Flex alignItems="center" gap="10px" w="50%" justifyContent="start">
            <RadioGroup onChange={setValue5} value={value5}>
              <Stack direction="row">
                <Radio value="UnitWeight5">
                  {' '}
                  <Text
                    color={value5 === 'UnitWeight5' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Unit Weight
                  </Text>
                </Radio>
                <Radio value="netWeight5">
                  <Text
                    color={value5 === 'netWeight5' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Net Weight
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
        <Flex alignItems="center" my="1em" justifyContent="center">
          <Flex gap="10px" alignItems="center" justifyContent="end">
            <Flex gap="10px" alignItems="center">
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                className="primary-font-semibold"
                w="100px"
                textAlign="end"
              >
                Clone
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>
              <QuantitySelectInput inputPlaceholder="Enter The Amount" />
            </Flex>
          </Flex>
          <Flex alignItems="center" gap="10px" w="50%" justifyContent="start">
            <RadioGroup onChange={setValue6} value={value6}>
              <Stack direction="row">
                <Radio value="UnitWeight6">
                  {' '}
                  <Text
                    color={value6 === 'UnitWeight6' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Unit Weight
                  </Text>
                </Radio>
                <Radio value="netWeight6">
                  <Text
                    color={value6 === 'netWeight6' ? '#FF8A43' : ''}
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Net Weight
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
      </Box>
      <Flex justifyContent="space-between">
        <Flex ml="1em">
          <Label
            fontSize={{ base: '14px', sm: '14px', md: '16px' }}
            ml={2}
            className="glroy-bold"
          >
            Age Verification Settings
          </Label>
        </Flex>
      </Flex>
      <Divider
        my="10px"
        mx={{
          base: '5px',
          md: '20px',
        }}
        borderColor="rgba(18, 23, 30, 0.4)"
      />
      <Flex gap="10px" w="100%" mt="3em" mx="4em">
        <Label
          fontSize={{ base: '12px', sm: '12px', md: '12px' }}
          className="primary-font-semibold"
        >
          Minimum Age
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
            placeholder="Enter The Minimum Age Limit"
            background="#fff"
            className="primary-font-medium"
            h="33px"
            w={{
              base: 'auto',
              md: '400px',
            }}
            fontSize="12px"
          />
        </Box>
      </Flex>
      <Flex
        m={{
          base: '1em 0em',
          md: '1em 4em',
        }}
        alignItems="center"
        gap="10px"
        mt="1em"
      >
        <Text color="#41454B" fontSize="12px" className="primary-font-semibold">
          Age Verification at Check In
        </Text>
        <Switch size="sm" />
      </Flex>
      <Flex
        m={{
          base: '1em 0em',
          md: '1em 4em',
        }}
        alignItems="center"
        gap="10px"
        mt="1em"
      >
        <Text color="#41454B" fontSize="12px" className="primary-font-semibold">
          Age Verification Before Order
        </Text>
        <Switch size="sm" />
      </Flex>
    </>
  );
};

export default Compliances;
