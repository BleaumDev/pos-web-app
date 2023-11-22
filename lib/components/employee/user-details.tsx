import { Box, Input, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Label from '../base/label';
import PosPhoneInput from '../base/phone-input';
import PasswordInput from '../inputs/PasswordInput';

const states = ['California', 'Texas', 'Florida'];

const UserDetailsPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();
  const isEmployeeDetailRoute =
    router.pathname === '/admin/employee/employee-detail';

  return (
    <Box>
      {isClient && (
        <Box>
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '16px' }}
            className="glroy-bold"
          >
            User Details
          </Label>
          <Stack w="100%" mt="8px">
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Full Name{' '}
              <span
                style={{
                  color: '#FF8A43',
                }}
              >
                *
              </span>
            </Label>

            <Box mt="-5px">
              {isEmployeeDetailRoute ? (
                <Input
                  w={{
                    base: '250px',
                    md: '250px',
                  }}
                  placeholder="Name your Employee"
                  background="none"
                  border="none"
                  borderBottom="1px solid #c7c7c7"
                  borderRadius="0px"
                  readOnly
                  className="primary-font-regular-italic"
                  h="33px"
                  fontSize="12px"
                />
              ) : (
                <Input
                  w={{
                    base: '250px',
                    md: '250px',
                  }}
                  placeholder="Name your Employee"
                  background="#fff"
                  className="primary-font-regular-italic"
                  h="33px"
                  fontSize="12px"
                />
              )}
            </Box>
          </Stack>
          <Stack w="100%" mt="12px">
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Email Address{' '}
              <span
                style={{
                  color: '#FF8A43',
                }}
              >
                *
              </span>
            </Label>

            <Box mt="-5px">
              {isEmployeeDetailRoute ? (
                <Input
                  w={{
                    base: '250px',
                    md: '250px',
                  }}
                  placeholder="Enter email address"
                  background="none"
                  border="none"
                  borderBottom="1px solid #c7c7c7"
                  borderRadius="0px"
                  readOnly
                  className="primary-font-regular-italic"
                  h="33px"
                  fontSize="12px"
                />
              ) : (
                <Input
                  w={{
                    base: '250px',
                    md: '250px',
                  }}
                  placeholder="Enter email address"
                  background="#fff"
                  type="email"
                  className="primary-font-regular-italic"
                  h="33px"
                  fontSize="12px"
                />
              )}
            </Box>
          </Stack>
          <Stack w="100%" mt="12px">
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Phone No
            </Label>
            {isEmployeeDetailRoute ? (
              <Input
                w={{
                  base: '250px',
                  md: '250px',
                }}
                placeholder="Phone No"
                background="none"
                border="none"
                borderBottom="1px solid #c7c7c7"
                borderRadius="0px"
                readOnly
                className="primary-font-regular-italic"
                h="33px"
                fontSize="12px"
              />
            ) : (
              <PosPhoneInput />
            )}
          </Stack>
          <Stack w="100%" mt="8px">
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Occupational Licence
            </Label>

            <Box mt="-5px">
              {isEmployeeDetailRoute ? (
                <Input
                  w={{
                    base: '250px',
                    md: '250px',
                  }}
                  placeholder="Enter Licence no"
                  background="none"
                  border="none"
                  borderBottom="1px solid #c7c7c7"
                  borderRadius="0px"
                  readOnly
                  className="primary-font-regular-italic"
                  h="33px"
                  fontSize="12px"
                />
              ) : (
                <Input
                  w={{
                    base: '250px',
                    md: '250px',
                  }}
                  placeholder="Enter Licence no"
                  background="#fff"
                  className="primary-font-regular-italic"
                  h="33px"
                  fontSize="12px"
                />
              )}
            </Box>
          </Stack>
          <Stack w="100%" mt="12px">
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              New Pin{' '}
              <span
                style={{
                  color: '#FF8A43',
                }}
              >
                *
              </span>
            </Label>

            <Box mt="-5px">
              {isEmployeeDetailRoute ? (
                <PasswordInput
                  placeholder="Enter Password"
                  background="none"
                  border="none"
                  borderBottom="1px solid #c7c7c7"
                  borderRadius="0px"
                  className="primary-font-regular-italic"
                  h="33px"
                  isReadOnly
                  fontSize="12px"
                  color="rgba(65, 69, 75, 0.50)"
                />
              ) : (
                <PasswordInput
                  placeholder="Enter Password"
                  background="#fff"
                  h="33px"
                  color="rgba(65, 69, 75, 0.50)"
                  fontSize="12px"
                />
              )}
            </Box>
          </Stack>
          <Stack w="100%" mt="12px">
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Confirm New Pin{' '}
              <span
                style={{
                  color: '#FF8A43',
                }}
              >
                *
              </span>
            </Label>

            <Box mt="-5px">
              {isEmployeeDetailRoute ? (
                <PasswordInput
                  placeholder="Re-type Password"
                  background="none"
                  border="none"
                  borderBottom="1px solid #c7c7c7"
                  borderRadius="0px"
                  className="primary-font-regular-italic"
                  h="33px"
                  isReadOnly
                  fontSize="12px"
                  color="rgba(65, 69, 75, 0.50)"
                />
              ) : (
                <PasswordInput
                  placeholder="Re-type password"
                  background="#fff"
                  color="rgba(65, 69, 75, 0.50)"
                  h="33px"
                  fontSize="12px"
                />
              )}
            </Box>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default UserDetailsPage;
