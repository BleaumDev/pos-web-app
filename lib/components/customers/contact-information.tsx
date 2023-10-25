import { Box, Select, Stack } from '@chakra-ui/react';

import Input from '../base/input';
import Label from '../base/label';

const states = ['California', 'Texas', 'Florida'];
const zipCodes = ['46000', '460001', '4600033'];
const phones = ['+1-9876543256', '+2-9876543256', '+3-9876543256'];
const customerType = ['Medical', 'Recreational'];

const ContactInformation = () => {
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
              <Input placeholder="Type your street address" h="33px" />
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
              >
                {customerType.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Select>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInformation;
