/* eslint-disable unused-imports/no-unused-vars */
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Link } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import EmployeeGroupTabing from '@lib/components/employee/employee-group-tabing';
import SummaryEmployeeGroup from '@lib/components/employee/summary-employee-group';
import { useClassContext } from 'context/ClassContext';
import { useEffect, useState } from 'react';

const AddEmployeeGroups = () => {
  const [isClient, setIsClient] = useState(false);
  const { isClassToggled } = useClassContext();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const floatingHeaderProps = {
    title: 'Employees',
    itemCount: '102+ Customers',
    csvImage: true,
    refreshImage: true,
    lastBreadcrumbColor: '#FF8A43',
    breadcrumbs: [
      {
        label: 'Home',
        breadcrumLink: '/admin/inventory/products',
      },
      {
        label: 'Employees',
        breadcrumLink: '/admin/employee/individual-employee',
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
                <Link href="/admin/employee/individual-employee">
                  <ChevronLeftIcon boxSize={30} />
                </Link>

                <Label
                  fontSize={{ base: '16px', sm: '18px', md: '20px' }}
                  ml={2}
                  className="primary-font-semibold"
                >
                  Create Employee Group
                </Label>
              </Flex>
              <Divider
                className="mx-5 mt-4"
                borderWidth="1px"
                background="rgba(65, 69, 75, 0.7)"
              />

              <SummaryEmployeeGroup />
              <EmployeeGroupTabing />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default AddEmployeeGroups;
