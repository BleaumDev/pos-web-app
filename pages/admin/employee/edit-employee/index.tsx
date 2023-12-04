/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/button-has-type */
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex } from '@chakra-ui/react';
import Button from '@lib/components/base/button';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import UserDetailsPage from '@lib/components/employee/user-details';
import UserLoginPage from '@lib/components/employee/user-login-info';
import UserMediaPage from '@lib/components/employee/user-media';
import { useClassContext } from 'context/ClassContext';
import Link from 'next/link';

const EditEmployee = () => {
  const { isClassToggled } = useClassContext();

  return (
    <div>
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
          <FloatingHeader
            title="Employees"
            itemCount="102+ Employees"
            csvImage
            refreshImage
            addSingleButtons
            lastBreadcrumbColor="#FF8A43"
            breadcrumbs={[
              {
                label: 'Home',
                breadcrumLink: '/admin/inventory/products',
              },
              {
                label: 'Access Management',
                breadcrumLink: '/admin/employee/individual-employee',
              },
              {
                label: 'Individual Employee',
                breadcrumLink: '/admin/employee/individual-employee',
              },
              {
                label: 'Edit Employee',
                breadcrumLink: '/admin/employee/edit-employee',
              },
            ]}
            simpleSearch
            simplePlaceHolderSearch="Search here..."
            addNew="Employee"
            addLink="/admin/employee/add-employee"
          />
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
            backgroundColor="#F8FBF8"
            p={{
              base: '40px 12px',
              md: '40px 36px 40px 36px',
            }}
            borderRadius="12px"
            border="0.3px solid rgba(18, 23, 30, 0.30)"
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
                Edit Employee Details
              </Label>
            </Flex>
            <Divider className="mx-5 mt-4" />

            <Box
              display={{
                base: 'grid',
                md: 'flex',
              }}
              m={{
                base: '0em 0px',
                md: '0em 1em',
              }}
              gap="100px"
              w="100%"
              flexWrap={'wrap'}
              justifyContent={'space-between'}
              p="12px"
            >
              <Box className="flex-item">
                <UserLoginPage />
              </Box>
              <Box className="flex-item">
                <UserDetailsPage />
              </Box>
              <Box className="flex-item">
                <UserMediaPage />
              </Box>
            </Box>
            <Flex
              justifyContent={'start !important'}
              alignItems={'start !important'}
              mt="1em"
              ml="1.5em"
            >
              <Link href="/admin/employee/employee-detail">
                <Button
                  className="primary-font-semibold"
                  fontSize="14px"
                  styledVariant="orange"
                  display="flex"
                >
                  Confirm Edit
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </>
    </div>
  );
};

export default EditEmployee;
