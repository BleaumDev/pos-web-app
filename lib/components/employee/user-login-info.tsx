import { Box, Input, Select, Stack, Switch } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Label from '../base/label';
import PasswordInput from '../inputs/PasswordInput';

const states = ['California', 'Texas', 'Florida'];

const UserLoginPage = () => {
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
            User Login
          </Label>
          <Stack w="100%" mt="8px">
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              User Name{' '}
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
              Employee Role
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
              Employee Group
            </Label>

            <Box mt="-5px">
              {isEmployeeDetailRoute ? (
                <Input
                  w={{
                    base: '250px',
                    md: '250px',
                  }}
                  placeholder="Employee Group"
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
                <Select
                  color="rgba(65, 69, 75, 0.50)"
                  border="1px solid rgba(18, 23, 30, 0.20)"
                  placeholder="Name you Employee Group"
                  background="#fff"
                  className="primary-font-regular-italic"
                  h="33px"
                  fontSize="12px"
                >
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Select>
              )}
            </Box>
          </Stack>
          <Stack w="100%" mt="12px">
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Password
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
              Confirm Password
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
                  placeholder="Re-type Password"
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
              Employee Type
            </Label>

            <Box mt="-5px">
              <Switch
                colorScheme="blue"
                className="primary-font-regular-italic"
                defaultChecked
              />
            </Box>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default UserLoginPage;
