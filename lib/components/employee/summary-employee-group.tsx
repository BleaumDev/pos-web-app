import { Box, Divider, Flex, Input, Stack } from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../base/button';
import Label from '../base/label';
import Select, { OptionsType } from '../base/select';

const groupSelection: OptionsType = [
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
  {
    key: 'Admin Manager',
    value: 'Admin Manager',
    label: 'Admin Manager',
  },
  {
    key: 'Sales Manager',
    value: 'Sales Manager',
    label: 'Sales Manager',
  },
];

const SummaryEmployeeGroup = () => {
  const router = useRouter();
  const isEmployeeGroupDetailRoute =
    router.pathname === '/admin/employee/employee-group-detail';
  return (
    <Formik
      initialValues={{
        selectedOption: '',
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
            m={{
              base: '0em 0px',
              md: '1em 1em 0em 1em',
            }}
            w="100%"
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            p="12px"
          >
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '16px' }}
              className="glroy-bold"
            >
              Summary
            </Label>
            <Flex gap="12px">
              {isEmployeeGroupDetailRoute ? (
                <Link href="/admin/employee/edit-employee-group">
                  <Button
                    styledVariant="orange"
                    className="primary-font-semibold"
                    fontSize="12px"
                    height="23px"
                    w="auto"
                    borderRadius="3px"
                  >
                    Edit
                  </Button>
                </Link>
              ) : (
                <>
                  <Button
                    styledVariant="delete"
                    className="primary-font-semibold"
                    fontSize="12px"
                    height="23px"
                    w="88px"
                    borderRadius="3px"
                  >
                    Cancel
                  </Button>
                  <Button
                    styledVariant="orange"
                    className="primary-font-semibold"
                    fontSize="12px"
                    height="23px"
                    w="125px"
                    borderRadius="3px"
                  >
                    Confirm Edit
                  </Button>
                </>
              )}
            </Flex>
          </Box>
          <Divider className="mx-5" />
          <Flex justifyContent="space-between" mt="10px" mx="5" gap="40px">
            <Stack w="100%" mt="8px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Employee Group Name{' '}
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>

              <Box mt="-5px">
                {isEmployeeGroupDetailRoute ? (
                  <Input
                    placeholder="Enter The Group Name"
                    background="#fff"
                    border="none"
                    borderBottom="1px solid #c7c7c7"
                    borderRadius="0px"
                    className="primary-font-medium"
                    h="33px"
                    readOnly
                    fontSize="12px"
                  />
                ) : (
                  <Input
                    placeholder="Enter The Group Name"
                    background="#fff"
                    className="primary-font-medium"
                    h="33px"
                    fontSize="12px"
                  />
                )}
              </Box>
            </Stack>
            <Stack w="100%" mt="8px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Creation Time{' '}
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>

              <Box mt="-5px">
                {isEmployeeGroupDetailRoute ? (
                  <Input
                    placeholder="Enter The Creation Time"
                    background="#fff"
                    border="none"
                    borderBottom="1px solid #c7c7c7"
                    borderRadius="0px"
                    readOnly
                    className="primary-font-medium"
                    h="33px"
                    fontSize="12px"
                  />
                ) : (
                  <Input
                    placeholder="Enter The Creation Time"
                    background="#fff"
                    className="primary-font-medium"
                    h="33px"
                    fontSize="12px"
                  />
                )}
              </Box>
            </Stack>
            <Stack w="100%" mt="8px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Applicable to{' '}
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  *
                </span>
              </Label>

              <Box mt="-5px">
                {isEmployeeGroupDetailRoute ? (
                  <Input
                    placeholder="Across the platform"
                    background="#fff"
                    border="none"
                    borderBottom="1px solid #c7c7c7"
                    borderRadius="0px"
                    className="primary-font-medium"
                    h="33px"
                    fontSize="12px"
                    readOnly
                  />
                ) : (
                  <Field
                    name="selectedOption"
                    borderRadius="4px"
                    component={Select}
                    fontSize="12px"
                    minHeight="35px"
                    height="35px"
                    options={groupSelection}
                    placeholder="Select Group’s Applicable Option"
                  />
                )}
              </Box>
            </Stack>
          </Flex>
        </form>
      )}
    </Formik>
  );
};

export default SummaryEmployeeGroup;
