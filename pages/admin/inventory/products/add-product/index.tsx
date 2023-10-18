/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/button-has-type */
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import DetailedInformation from '@lib/components/product/detailedInformation';
import GeneralInformation from '@lib/components/product/generalInformation';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetail(): React.ReactNode {
  const [complexPricingRowCount, setComplexPricingRowCount] = useState(1);
  return (
    <div>
      <Sidenav>
        <Box position="relative" mt="0em" w="auto">
          <FloatingHeader
            title="Inventory"
            itemCount="1432+ Products"
            csvImage="/images/csv-file.png"
            refreshImage="/images/refresh-circle.png"
            lastBreadcrumbColor="#FF8A43"
            breadcrumbs={[
              {
                label: 'Home',
                breadcrumLink: '/admin/inventory/products',
              },
              {
                label: 'Inventory',
                breadcrumLink: '/admin/inventory/products',
              },
              {
                label: 'Products',
                breadcrumLink: '/admin/inventory/products',
              },
              {
                label: 'Add Product',
                breadcrumLink: '/admin/inventory/products/add-product',
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
          h="66vh"
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
              <Link href="/admin/inventory/products">
                <ChevronLeftIcon boxSize={30} />
              </Link>

              <Label
                fontSize={{ base: '16px', sm: '18px', md: '20px' }}
                ml={2}
                className="primary-font-semibold"
              >
                Add Product
              </Label>
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
                w={{ base: '100%', md: '50%' }}
                background="rgba(246, 252, 255, 0.40)"
                borderRadius="12px"
                m={{
                  base: '0em 10px',
                  md: '0em 2em',
                }}
                p="20px 40px"
                border="0.2px solid rgba(18, 23, 30, 0.40)"
                boxShadow="9px 9px 23px 0px rgba(128, 128, 128, 0.07)"
              >
                <Label
                  fontSize={{ base: '12px', sm: '14px', md: '16px' }}
                  className="primary-font-semibold"
                >
                  General Information
                </Label>
                <GeneralInformation />
              </Box>
              <Box w={{ base: '100%', md: '50%' }} p="0px 40px">
                <Label
                  fontSize={{ base: '16px', sm: '18px', md: '20px' }}
                  className="primary-font-semibold"
                >
                  Detailed Information
                </Label>
                <DetailedInformation />
              </Box>
            </Box>
          </Box>
        </Box>
      </Sidenav>
    </div>
  );
}
