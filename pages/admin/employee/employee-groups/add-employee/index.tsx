/* eslint-disable unused-imports/no-unused-vars */
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Image, Input } from '@chakra-ui/react';
import Button from '@lib/components/base/button';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import EmployeesList from '@lib/components/employee/employees-list';
import { useClassContext } from 'context/ClassContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AddEmployeeToGroup = () => {
  const [isClient, setIsClient] = useState(false);
  const { isClassToggled } = useClassContext();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const floatingHeaderProps = {
    title: 'Employees',
    itemCount: '102+ Employees',
    csvImage: true,
    refreshImage: true,
    lastBreadcrumbColor: '#FF8A43',
    breadcrumbs: [
      {
        label: 'Home',
        breadcrumLink: '/admin/inventory/products',
      },
      {
        label: 'Access Management',
        breadcrumLink: '/admin/employee/individual-employee',
      },
      {
        label: 'Employee Groups',
        breadcrumLink: '/admin/employee/employee-groups',
      },
      {
        label: 'Add Employee To Group',
        breadcrumLink: '',
      },
    ],
    simpleSearch: true,
    createEmployeeGroup: true,
    deleteEmployeeGroup: true,
    createEmployeeGroupLink: '/admin/employee/add-employee-group',
    simplePlaceHolderSearch: 'Search here...',
    addNew: 'Group',
    addLink: '/admin/customers/add-customer',
  };
  return (
    <Box>
      {isClient && (
        <>
          <Box
            w="auto"
            left="0"
            right="0"
            width={'100%'}
            className={isClassToggled ? 'toggled-class' : 'default-class'}
            pr="2em"
            zIndex={2}
          >
            <FloatingHeader {...floatingHeaderProps} />
          </Box>

          <Box
            p="2em 2em 4em 2em"
            position="relative"
            top={{
              base: '0em',
              md: '8.5em',
            }}
            zIndex={1}
            overflowX="hidden"
            overflowY="scroll"
            h="70vh"
          >
            <Box
              backgroundColor="#ffffff"
              p={{
                base: '40px 12px',
                md: '40px 36px 40px 36px',
              }}
              borderRadius="14px"
            >
              <Flex ml="1em">
                <Link href="/admin/employee/employee-group-detail">
                  <ChevronLeftIcon boxSize={30} />
                </Link>

                <Label
                  fontSize={{ base: '16px', sm: '18px', md: '20px' }}
                  ml={2}
                  className="primary-font-semibold"
                >
                  Add Users to Administration Group
                </Label>
              </Flex>
              <Divider
                className="mx-5 mt-4"
                borderWidth="1px"
                background="rgba(65, 69, 75, 0.7)"
              />
              <Flex ml="1em" mt="1em" gap="10px">
                <Label
                  fontSize={{ base: '14px', sm: '16px', md: '16px' }}
                  ml={2}
                  className="glroy-bold"
                >
                  Other Employees in this Group
                </Label>
                <Label
                  fontSize={{ base: '14px', sm: '16px', md: '16px' }}
                  ml={2}
                  color="#FF8A43"
                  className="glroy-bold"
                >
                  (5)
                </Label>
              </Flex>
              <Divider
                className="mx-5 mt-4"
                borderWidth="1px"
                background="rgba(65, 69, 75, 0.7)"
              />
              <Flex gap="12px" my="1em" mx="1em">
                <Input
                  placeholder="Search here..."
                  background="#E9F0F8"
                  className="primary-font-semibold"
                  fontSize="12px"
                  h="30px"
                  w={{
                    base: '250px',
                    md: '332px',
                  }}
                  _placeholder={{
                    color: '#41454B',
                  }}
                  color="#41454B"
                  borderRadius="4px"
                />
                <Box cursor="pointer">
                  <Image
                    src="/images/search-orange.png"
                    width={7}
                    height={7}
                    alt="logo"
                  />
                </Box>
              </Flex>
              <EmployeesList />

              <Flex justifyContent="end" mt="1em" gap="20px">
                <Button
                  styledVariant="orange"
                  borderRadius="3px"
                  className="primary-font-regular-italic"
                  height="27px"
                  _hover={{
                    background:
                      'linear-gradient(238deg, rgba(255, 30, 30, 0.60) 23.36%, rgba(255, 64, 64, 0.60) 93.56%)',
                  }}
                  background="linear-gradient(238deg, rgba(255, 30, 30, 0.60) 23.36%, rgba(255, 64, 64, 0.60) 93.56%)"
                  w="128px"
                  fontSize="12px"
                >
                  Cancel
                </Button>
                <Button
                  styledVariant="orange"
                  borderRadius="3px"
                  className="primary-font-regular-italic"
                  height="27px"
                  w="128px"
                  fontSize="12px"
                >
                  Add Employee{' '}
                </Button>
              </Flex>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default AddEmployeeToGroup;
