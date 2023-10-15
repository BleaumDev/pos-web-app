/* eslint-disable react/no-array-index-key */
import { Box, Flex } from '@chakra-ui/react';
import PosCarousel from '@lib/components/base/carousel';
import PosSidenav from '@lib/components/Layout/Sidebar/PosSidenav';
import CartPage from '@lib/components/pos/cart';
import PosFloatingHeader from '@lib/components/pos/floating-header';
import PosSearch from '@lib/components/pos/pos-search';
import PsoHeading from '@lib/components/pos/pso-heading';
import RecommendedDeals from '@lib/components/pos/recommended-deals';

const PosPayments = () => {
  return (
    <PosSidenav>
      <Flex position="fixed" top="9.75em" w="100%" gap="20px">
        <Box
          w={{
            base: '100%',
            md: '70%',
          }}
        >
          <Box>
            <PosFloatingHeader
              title="Wade Warren"
              age="42 years Old"
              lastBreadcrumbColor="#FF8A43"
              breadcrumbs={[
                {
                  label: 'Home',
                  href: '/pos/payments',
                },
                {
                  label: 'POS',
                  href: '/pos/payments',
                },
              ]}
            />
          </Box>
          <Box
            overflowY="scroll"
            px="17px"
            overflowX="hidden"
            h="100vh"
            mb="2em"
            zIndex={1000}
          >
            <PosSearch />
            <PsoHeading
              fontSize1="16px"
              fontSize2="12px"
              subColor="#FF8A43"
              heading="Choose Category"
              subText=" 42+ Categories"
            />
            <PosCarousel />
            <Box mt="1em">
              <PsoHeading
                fontSize1="16px"
                fontSize2="12px"
                subColor="#FF8A43"
                heading="Choose Manufacturer"
                subText=" 42+ Categories"
              />
              <PosCarousel />
            </Box>

            <RecommendedDeals />
            <Box
              h={{
                base: '100px',
                md: '200px',
              }}
            />
            <Box
              w={{
                base: '100%',
              }}
              display={{
                base: 'block',
                md: 'none',
              }}
              pr="6em"
            >
              <CartPage />
            </Box>
          </Box>
        </Box>
        <Box
          display={{
            base: 'none',
            md: 'block',
          }}
          w={{
            base: '100%',
            md: '30%',
          }}
          pr="6em"
        >
          <CartPage />
        </Box>
      </Flex>
    </PosSidenav>
  );
};

export default PosPayments;
