import { Box, Input, Select, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Label from '../base/label';
import UploadSingleImage from '../base/upload-single-image';

const genders = ['Male', 'Female'];
const countries = ['USA', 'Canada', 'Mexico'];
const cities = ['New York', 'Otario', 'Mexico City'];

const CustomerPersonalInformation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
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
                  <Select
                    color="rgba(65, 69, 75, 0.50)"
                    border="1px solid rgba(18, 23, 30, 0.20)"
                    h="33px"
                    fontSize="14px"
                    background="#fff"
                    placeholder="Choose Gender"
                    className="primary-font-medium"
                  >
                    {genders.map((gender) => (
                      <option key={gender} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </Select>
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
                  <Select
                    color="rgba(65, 69, 75, 0.50)"
                    border="1px solid rgba(18, 23, 30, 0.20)"
                    h="33px"
                    fontSize="14px"
                    background="#fff"
                    placeholder="Country"
                    className="primary-font-medium"
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </Select>
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
                  <Select
                    color="rgba(65, 69, 75, 0.50)"
                    border="1px solid rgba(18, 23, 30, 0.20)"
                    h="33px"
                    fontSize="14px"
                    placeholder="Select City"
                    background="#fff"
                    className="primary-font-medium"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Select>
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
  );
};

export default CustomerPersonalInformation;
