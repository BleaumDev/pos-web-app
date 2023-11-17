/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/button-has-type */
import { Box, Flex, Img } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import CustomerInformationDetail from '@lib/components/customers/customer-info-detail';
import OrderDetails from '@lib/components/customers/order-details-list';
import StatsDetail from '@lib/components/customers/stats-details';
import FrequentlyPurchasedProducts from '@lib/components/pos/frequently-purchased';
import { useClassContext } from 'context/ClassContext';
import Link from 'next/link';

const CustomerDetail = () => {
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
                label: 'Customer Detail',
                breadcrumLink: '/admin/customers/customer-detail',
              },
            ]}
          />
        </Box>

        <Box
          p="2em 2em 4em 2em"
          position="relative"
          top="5.5em"
          overflowX="hidden"
          overflowY="scroll"
          zIndex={1}
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
                  md: '0em 0em',
                }}
              >
                <Box w="90%">
                  <StatsDetail />
                </Box>
                <Box className="customer-detail-box">
                  <Box>
                    <CustomerInformationDetail />
                  </Box>
                  <Box>
                    <OrderDetails />
                  </Box>
                </Box>
                <FrequentlyPurchasedProducts />
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    </div>
  );
};

export default CustomerDetail;
