import { Box, Input, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Field, Formik } from 'formik';
import { useRouter } from 'next/router';
import Label from '../base/label';
import Select, { OptionsType } from '../base/select';
import PasswordInput from '../inputs/PasswordInput';
import AccountType from './account-type';

const employeeGroup: OptionsType = [
  {
    key: 'Admin Manager',
    value: 'Admin Manager',
    label: 'Admin Manager',
  },
  {
    key: 'Purchasing Manager',
    value: 'Purchasing Manager',
    label: 'Purchasing Manager',
  },
  {
    key: 'Store Manager',
    value: 'Store Manager',
    label: 'Store Manager',
  },
];
const UserLoginPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();
  const isEmployeeDetailRoute =
    router.pathname === '/admin/employee/employee-detail';
  return (
    <Formik
      initialValues={{
        employeeGroup: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <form>
          {' '}
          <Box mt={isEmployeeDetailRoute ? '0px' : '-3.5em'}>
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
                      <Field
                        name="employeeGroup"
                        borderRadius="4px"
                        component={Select}
                        fontSize="14px"
                        minHeight="33px"
                        height="33px"
                        options={employeeGroup}
                        placeholder="Select Employee Group"
                      />
                    )}
                  </Box>
                </Stack>
                <Stack w="100%" mt="12px">
                  <Label
                    fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                    className="primary-font-semibold"
                  >
                    Password{' '}
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
                        w={{
                          base: '250px',
                          md: '250px',
                        }}
                        isReadOnly
                        fontSize="12px"
                        color="rgba(65, 69, 75, 0.50)"
                      />
                    ) : (
                      <PasswordInput
                        placeholder="Enter Password"
                        background="#fff"
                        h="33px"
                        w={{
                          base: '250px',
                          md: '250px',
                        }}
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
                    Confirm Password{' '}
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
                        w={{
                          base: '250px',
                          md: '250px',
                        }}
                        isReadOnly
                        fontSize="12px"
                        color="rgba(65, 69, 75, 0.50)"
                      />
                    ) : (
                      <PasswordInput
                        placeholder="Re-type Password"
                        background="#fff"
                        h="33px"
                        w={{
                          base: '250px',
                          md: '250px',
                        }}
                        color="rgba(65, 69, 75, 0.50)"
                        fontSize="12px"
                      />
                    )}
                  </Box>
                </Stack>
                <AccountType />
              </Box>
            )}
          </Box>{' '}
        </form>
      )}
    </Formik>
  );
};

export default UserLoginPage;
