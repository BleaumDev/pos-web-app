import { Box, Input, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Field, Formik } from 'formik';
import Label from '../base/label';
import Select, { OptionsType } from '../base/select';
import UploadSingleImage from '../base/upload-single-image';

const genders: OptionsType = [
  {
    key: 'Male',
    value: 'Male',
    label: 'Male',
  },
  {
    key: 'Female',
    value: 'Female',
    label: 'Female',
  },
];

const countries: OptionsType = [
  {
    key: 'USA',
    value: 'USA',
    label: 'USA',
  },
  {
    key: 'Canada',
    value: 'Canada',
    label: 'Canada',
  },
  {
    key: 'Mexico',
    value: 'Mexico',
    label: 'Mexico',
  },
];

const cities: OptionsType = [
  {
    key: 'New York',
    value: 'New York',
    label: 'New York',
  },
  {
    key: 'Toronto',
    value: 'Toronto',
    label: 'Toronto',
  },
  {
    key: 'Mexico City',
    value: 'Mexico City',
    label: 'Mexico City',
  },
];

const CustomerPersonalInformation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Formik
      initialValues={{
        gender: '',
        countries: '',
        cities: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <form>
          <Box>
            {isClient && (
              <Box
                display={{
                  base: 'grid',
                  md: 'flex',
                }}
                gap="88px"
              >
                <Box
                  w={{
                    base: '100%',
                    md: '65%',
                  }}
                >
                  <Box
                    display={{
                      base: 'grid',
                      md: 'flex',
                    }}
                    gap="10px"
                  >
                    <Stack w="100%" mt="8px">
                      <Label
                        fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                        className="primary-font-semibold"
                      >
                        Customer Name *
                      </Label>

                      <Box mt="-5px">
                        <Input
                          placeholder="Enter Customer Name"
                          background="#fff"
                          h="33px"
                        />
                      </Box>
                    </Stack>
                    <Stack w="100%" mt="8px">
                      <Label
                        fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                        className="primary-font-semibold"
                      >
                        Email
                      </Label>

                      <Box mt="-5px">
                        <Input
                          placeholder="Enter Email Address"
                          background="#fff"
                          h="33px"
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
                    <Stack w="100%" mt="8px">
                      <Label
                        fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                        className="primary-font-semibold"
                      >
                        Gender
                      </Label>

                      <Box mt="-5px">
                        <Field
                          name="Gender"
                          borderRadius="4px"
                          component={Select}
                          fontSize="14px"
                          minHeight="33px"
                          height="33px"
                          options={genders}
                          placeholder="Select Gender"
                        />
                      </Box>
                    </Stack>
                    <Stack w="100%" mt="8px">
                      <Label
                        fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                        className="primary-font-semibold"
                      >
                        Date Of Birth*
                      </Label>

                      <Box mt="-5px">
                        <Input
                          placeholder="Enter Your Date of Birth"
                          background="#fff"
                          h="33px"
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
                    <Stack w="100%" mt="8px">
                      <Label
                        fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                        className="primary-font-semibold"
                      >
                        Country
                      </Label>

                      <Box mt="-5px">
                        <Field
                          name="countries"
                          borderRadius="4px"
                          component={Select}
                          fontSize="14px"
                          minHeight="33px"
                          height="33px"
                          options={countries}
                          placeholder="Select Countyr"
                        />
                      </Box>
                    </Stack>
                    <Stack w="100%" mt="8px">
                      <Label
                        fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                        className="primary-font-semibold"
                      >
                        City
                      </Label>

                      <Box mt="-5px">
                        <Field
                          name="cities"
                          borderRadius="4px"
                          component={Select}
                          fontSize="14px"
                          minHeight="33px"
                          height="33px"
                          options={cities}
                          placeholder="Select City"
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
                <Box
                  w={{
                    base: '100%',
                    md: '35%',
                  }}
                >
                  <Stack justifyContent="center" mt="8px">
                    <Label
                      fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                      className="primary-font-semibold"
                    >
                      Add Photo
                    </Label>
                    <Box ml="-1em">
                      <UploadSingleImage
                        widthSelectedImage="164px"
                        heightSelectedImage="136px"
                        widthOfDefaultImage="200px"
                        defaultImage="/images/upload-Image.png"
                        addButton
                      />
                    </Box>
                  </Stack>
                </Box>
              </Box>
            )}
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default CustomerPersonalInformation;
