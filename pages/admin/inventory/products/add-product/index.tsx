/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/button-has-type */
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Grid, GridItem } from '@chakra-ui/react';
import Button from '@lib/components/base/button';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import DetailedInformation from '@lib/components/product/detailedInformation';
import GeneralInformation from '@lib/components/product/generalInformation';
import { useClassContext } from 'context/ClassContext';
import Link from 'next/link';

export default function ProductDetail(): React.ReactNode {
  const { isClassToggled } = useClassContext();

  return (
    <div>
      <Sidenav>
        <Box
          w="auto"
          left="0"
          right="0"
          width={'100%'}
          className={isClassToggled ? 'toggled-class' : 'default-class'}
          position="fixed"
          pr="2em"
        >
          <FloatingHeader
            title="Inventory"
            itemCount="1432+ Products"
            csvImage
            refreshImage
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
          position="relative"
          top="5.5em"
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
            <Divider my="15px" mx="30px" borderColor="rgba(18, 23, 30, 0.4)" />
            <Grid
              display={{
                base: 'grid',
                // md: 'flex',
              }}
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
              m={{
                base: '0em 0px',
                md: '0em 1em',
              }}
              w="full"
              // gap="70px"
            >
              <GridItem
                // w={{ base: '100%', md: '50%' }}
                background="rgba(246, 252, 255, 0.40)"
                borderRadius="12px"
                // m={{
                //   base: '0em 1000px',
                //   md: '0em 2em',
                // }}
                p="20px 40px"
                border="0.2px solid rgba(18, 23, 30, 0.40)"
                boxShadow="9px 9px 23px 0px rgba(128, 128, 128, 0.07)"
                // colSpan={1}
              >
                <Label
                  fontSize={{ base: '12px', sm: '14px', md: '16px' }}
                  className="glroy-bold"
                >
                  General Information
                </Label>
                <GeneralInformation />
              </GridItem>
              <GridItem w={{ base: '100%', md: '50%' }} p="0px 40px">
                <Label
                  fontSize={{ base: '16px', sm: '18px', md: '20px' }}
                  className="primary-font-semibold"
                >
                  Detailed Information
                </Label>
                <DetailedInformation />
              </GridItem>
            </Grid>
            <Flex justifyContent="end" gap="21px" mt="-3.6em" alignItems="end">
              <Button
                className="primary-font-semibold"
                border=" 0.3px solid rgba(18, 23, 30, 0.50)"
                fontSize="14px"
                styledVariant="outline"
                color="rgba(18, 23, 30, 0.50)"
              >
                Cancel
              </Button>
              <Button
                className="primary-font-semibold"
                fontSize="14px"
                styledVariant="blue"
                _hover={{
                  background: 'rgba(255, 138, 67, 0.50)',
                }}
                background="rgba(255, 138, 67, 0.50)"
              >
                Add product
              </Button>
            </Flex>
          </Box>
        </Box>
      </Sidenav>
    </div>
  );
}
