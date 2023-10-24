/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/button-has-type */
import { Box, Flex, Img } from '@chakra-ui/react';
import Button from '@lib/components/base/button';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import CustomerInformationDetail from '@lib/components/customers/customer-info-detail';
import OrderDetails from '@lib/components/customers/order-details-list';
import StatsDetail from '@lib/components/customers/stats-details';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import Link from 'next/link';

const CustomerDetail = () => {
  const header = ['Product Name', 'SKU', 'Price', 'Qty', 'Subtotal'];
  const rows = [
    ['Cowichan Kush', '1426384', '$40.06', '1', '$40.06'],
    ['Tribe CBD Oil...', '1426384', '$40.06', '1', '$40.06'],
    ['District Cannab...', '1426384', '$40.06', '1', '$40.06'],
  ];
  return (
    <div>
      <Sidenav>
        <Box position="relative" mt="0em" w="auto">
          <FloatingHeader
            title="Customers"
            itemCount="12230+ Customers"
            refreshImage
            lastBreadcrumbColor="#FF8A43"
            breadcrumbs={[
              {
                label: 'Home',
                breadcrumLink: '/admin/inventory/products',
              },
              {
                label: 'Customer',
                breadcrumLink: '/admin/customers',
              },
              {
                label: 'Add New Customer',
                breadcrumLink: '/admin/customers/add-customer',
              },
            ]}
          />
        </Box>

        <Box
          p="2em 2em 4em 2em"
          borderRadius="20px 50px 0px 0px"
          bg="#E9F0F8 !important"
          position="relative"
          top="-11px"
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
            <Flex ml="1em" gap="18px">
              <Link href="/admin/customers">
                <Img
                  src="/images/arrow-square.png"
                  alt="arrow-square"
                  width="32px"
                  height="32px"
                />
              </Link>

              <Flex justifyContent="center" alignItems="center" gap="10px">
                <Img
                  src="/images/profile1.png"
                  alt="arrow-square"
                  width="40px"
                  height="40px"
                />
                <Label
                  fontSize={{ base: '16px', sm: '18px', md: '20px' }}
                  ml={2}
                  className="glroy-bold"
                >
                  Wade Warren
                </Label>
              </Flex>
            </Flex>

            <Box
              display={{
                base: 'grid',
                md: 'flex',
              }}
              m={{
                base: '0em 0px',
                md: '0em 1em',
              }}
              w="full"
              gap="112px"
              p="12px"
            >
              <Box
                w="100%"
                m={{
                  base: '0em 10px',
                  md: '0em 2em',
                }}
              >
                <StatsDetail />
                <Flex gap="24px">
                  <CustomerInformationDetail />
                  <OrderDetails />
                </Flex>

                <Box
                  textAlign="end"
                  justifyContent="end"
                  display="flex"
                  mt="1em"
                >
                  <Button
                    className="primary-font-semibold"
                    fontSize="14px"
                    styledVariant="orange"
                    display="flex"
                  >
                    <Img
                      src="/images/profile-add.png"
                      width="16px"
                      height="16px"
                    />
                    Add Customer
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Sidenav>
    </div>
  );
};

export default CustomerDetail;
