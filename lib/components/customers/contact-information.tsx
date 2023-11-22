import { Box, Flex, Img, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import { Field, Formik } from 'formik';
import Label from '../base/label';
import PosPhoneInput from '../base/phone-input';
import Select, { OptionType, OptionsType } from '../base/select';
import UploadSingleImage from '../base/upload-single-image';

const states: OptionsType = [
  {
    key: 'California',
    value: 'California',
    label: 'California',
  },
  {
    key: 'Texas',
    value: 'Texas',
    label: 'Texas',
  },
  {
    key: 'Florida',
    value: 'Florida',
    label: 'Florida',
  },
];
const zipCodes: OptionsType = [
  {
    key: '450001',
    value: '450001',
    label: '450001',
  },
  {
    key: '460001',
    value: '460001',
    label: '460001',
  },
  {
    key: '879289',
    value: '879289',
    label: '879289',
  },
];
const customerTypeOptions: OptionsType = [
  {
    key: 'Medical',
    value: 'Medical',
    label: 'Medical',
  },
  {
    key: 'Recreational',
    value: 'Recreational',
    label: 'Recreational',
  },
];

const ContactInformation = () => {
  const [selectedCustomerType, setSelectedCustomerType] = useState<string>('');

  const handleCustomerTypeChange = (option: OptionType | null) => {
    console.log('Selected Customer Type:', option);
    setSelectedCustomerType(option?.value ?? ''); // Set the selected value
  };

  return (
    <Formik
      initialValues={{
        states: '',
        zipCodes: '',
        customerType: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <form>
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
                    <Field
                      name="states"
                      borderRadius="4px"
                      component={Select}
                      fontSize="14px"
                      minHeight="33px"
                      height="33px"
                      options={states}
                      placeholder="Select category"
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
                    Zip Code*
                  </Label>
                  <Box mt="-5px">
                    <Field
                      name="zipCodes"
                      borderRadius="4px"
                      component={Select}
                      fontSize="14px"
                      minHeight="33px"
                      height="33px"
                      options={zipCodes}
                      placeholder="Select Zip Code"
                    />
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
                    <PosPhoneInput />
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
                    <Field
                      name="customerType"
                      borderRadius="4px"
                      component={Select}
                      fontSize="14px"
                      minHeight="33px"
                      height="33px"
                      options={customerTypeOptions}
                      placeholder="Select Customer Type"
                      onChange={handleCustomerTypeChange}
                    />
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
                            selectedCustomerType === 'Medical'
                              ? '#B4B7B8'
                              : 'inherit'
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
                            selectedCustomerType === 'Medical'
                              ? '#B4B7B8'
                              : 'inherit'
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
                        <UploadSingleImage
                          widthSelectedImage="246px"
                          heightSelectedImage="168px"
                          widthOfDefaultImage="246px"
                          defaultImage="/images/upload-license.png"
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
        </form>
      )}
    </Formik>
  );
};

export default ContactInformation;
