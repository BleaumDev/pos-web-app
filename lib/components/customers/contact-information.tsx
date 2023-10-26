import { Box, Flex, Img, Input, Select, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import Label from '../base/label';

const states = ['California', 'Texas', 'Florida'];
const zipCodes = ['46000', '460001', '4600033'];
const phones = ['+1-9876543256', '+2-9876543256', '+3-9876543256'];
const customerTypeOptions = ['Medical', 'Recreational'];

const ContactInformation = () => {
  const [selectedCustomerType, setSelectedCustomerType] = useState('');

  const handleCustomerTypeChange = (event: any) => {
    setSelectedCustomerType(event.target.value);
  };

  return (
    <Box
      display={{
        base: 'grid',
        md: 'flex',
      }}
      gap="88px"
    >
      <Box w="100%">
        <Box
          display={{
            base: 'grid',
            md: 'flex',
          }}
          gap="10px"
        >
          <Stack
            w={{
              base: '100%',
              md: '40%',
            }}
            mt="8px"
          >
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Street Address*
            </Label>
            <Box mt="-5px">
              <Input
                placeholder="Type your street address"
                bg="white"
                h="33px"
              />
            </Box>
          </Stack>
          <Stack
            w={{
              base: '100%',
              md: '30%',
            }}
            mt="8px"
          >
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              State*
            </Label>
            <Box mt="-5px">
              <Select
                color="rgba(65, 69, 75, 0.50)"
                border="1px solid rgba(18, 23, 30, 0.20)"
                h="33px"
                fontSize="14px"
                placeholder="Select State"
                background="#fff"
                className="primary-font-medium"
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Select>
            </Box>
          </Stack>
          <Stack
            w={{
              base: '100%',
              md: '30%',
            }}
            mt="8px"
          >
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Zip Code*
            </Label>
            <Box mt="-5px">
              <Select
                color="rgba(65, 69, 75, 0.50)"
                border="1px solid rgba(18, 23, 30, 0.20)"
                h="33px"
                fontSize="14px"
                placeholder="Select Zip Code"
                background="#fff"
                className="primary-font-medium"
              >
                {zipCodes.map((zipcode) => (
                  <option key={zipcode} value={zipcode}>
                    {zipcode}
                  </option>
                ))}
              </Select>
            </Box>
          </Stack>
        </Box>
        <Box
          display={{
            base: 'grid',
            md: 'flex',
          }}
          gap="10px"
        >
          <Stack
            w={{
              base: '100%',
              md: '39.3%',
            }}
            mt="8px"
          >
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Phone No.
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
                {phones.map((phone) => (
                  <option key={phone} value={phone}>
                    {phone}
                  </option>
                ))}
              </Select>
            </Box>
          </Stack>
          <Stack
            w={{
              base: '100%',
              md: '20%',
            }}
            mt="8px"
          >
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Customer Type*
            </Label>
            <Box mt="-5px">
              <Select
                color="rgba(65, 69, 75, 0.50)"
                border="1px solid rgba(18, 23, 30, 0.20)"
                h="33px"
                fontSize="14px"
                placeholder="Select Type"
                background="#fff"
                className="primary-font-medium"
                onChange={handleCustomerTypeChange}
                value={selectedCustomerType}
              >
                {customerTypeOptions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Box>
          </Stack>
        </Box>
        <Box
          display={{
            base: 'grid',
            md: 'flex',
          }}
          gap="88px"
        >
          <Box w="100%">
            <Box
              display={{
                base: 'grid',
                md: 'flex',
              }}
              gap="10px"
            >
              <Box
                w={{
                  base: '100%',
                  md: '40%',
                }}
              >
                <Stack mt="8px">
                  <Label
                    fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                    className="primary-font-semibold"
                    color={
                      selectedCustomerType === 'Recreational'
                        ? '#B4B7B8'
                        : 'inherit'
                    }
                  >
                    Medical License Number{' '}
                    <span
                      className="primary-font-regular-italic"
                      style={{
                        fontSize: '12px',
                      }}
                    >
                      (For Medical Customers Only)*
                    </span>
                  </Label>
                  <Box mt="-5px">
                    <Input
                      bg="white"
                      placeholder="Type your medical license number"
                      h="33px"
                      disabled={selectedCustomerType === 'Recreational'}
                    />
                  </Box>
                </Stack>
                <Stack mt="8px">
                  <Label
                    fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                    className="primary-font-semibold"
                    color={
                      selectedCustomerType === 'Recreational'
                        ? '#B4B7B8'
                        : 'inherit'
                    }
                  >
                    Medical License Expiry Date{' '}
                    <span
                      className="primary-font-regular-italic"
                      style={{
                        fontSize: '12px',
                      }}
                    >
                      (For Medical Customers Only)*
                    </span>
                  </Label>
                  <Box mt="-5px">
                    <Input
                      bg="white"
                      placeholder="DD/MM/YY"
                      h="33px"
                      disabled={selectedCustomerType === 'Recreational'}
                    />
                  </Box>
                </Stack>
                <Stack mt="8px">
                  <Label
                    fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                    className="primary-font-semibold"
                    color={
                      selectedCustomerType === 'Medical' ? '#B4B7B8' : 'inherit'
                    }
                  >
                    Driving License Number{' '}
                    <span
                      className="primary-font-regular-italic"
                      style={{
                        fontSize: '12px',
                      }}
                    >
                      (For Recreational Customers Only)*
                    </span>
                  </Label>
                  <Box mt="-5px">
                    <Input
                      bg="white"
                      placeholder="Type your driving license number"
                      h="33px"
                      disabled={selectedCustomerType === 'Medical'}
                    />
                  </Box>
                </Stack>
                <Stack mt="8px">
                  <Label
                    fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                    className="primary-font-semibold"
                    color={
                      selectedCustomerType === 'Medical' ? '#B4B7B8' : 'inherit'
                    }
                  >
                    Driving License Expiry Date{' '}
                    <span
                      className="primary-font-regular-italic"
                      style={{
                        fontSize: '12px',
                      }}
                    >
                      (For Recreational Customers Only)*
                    </span>
                  </Label>
                  <Box mt="-5px">
                    <Input
                      bg="white"
                      placeholder="DD/MM/YY"
                      h="33px"
                      disabled={selectedCustomerType === 'Medical'}
                    />
                  </Box>
                </Stack>
              </Box>
              <Box w="55%" ml="4em" mt="1em">
                <Flex gap="10px">
                  <Img
                    src="/images/document-text.png"
                    alt="document-text-pos"
                    width="24px"
                    height="24px"
                  />
                  <Label
                    fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                    className="primary-font-semibold"
                  >
                    Upload your Medical/Driving License to ensure .
                  </Label>
                </Flex>
                <Flex gap="32px" mt="1em" ml="2em" alignItems="center">
                  <Img
                    src="/images/upload-license.png"
                    alt="upload-license-pos"
                    width="246px"
                    height="168px"
                    cursor="pointer"
                  />
                  <Label
                    fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                    className="primary-font-semibold"
                  >
                    JPG or PNG Format Only
                    <br />
                    Maximum 20 MB
                  </Label>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInformation;
