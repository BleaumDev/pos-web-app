import { Box, Flex, Img, Stack } from '@chakra-ui/react';

import Input from '../base/input';
import Label from '../base/label';

const LicenseInformation = () => {
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
          <Box
            w={{
              base: '100%',
              md: '39.8%',
            }}
          >
            <Stack mt="8px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
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
                  placeholder="Type your medical license number"
                  h="33px"
                />
              </Box>
            </Stack>
            <Stack mt="8px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
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
                <Input placeholder="DD/MM/YY" h="33px" />
              </Box>
            </Stack>
            <Stack mt="8px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
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
                  placeholder="Type your driving license number"
                  h="33px"
                />
              </Box>
            </Stack>
            <Stack mt="8px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
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
                <Input placeholder="DD/MM/YY" h="33px" />
              </Box>
            </Stack>
          </Box>
          <Box w="61%" ml="4em" mt="1em">
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
  );
};

export default LicenseInformation;
