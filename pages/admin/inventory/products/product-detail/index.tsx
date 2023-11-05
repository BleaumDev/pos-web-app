/* eslint-disable */
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Img } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import DetailProductInformation from '@lib/components/product/detail-product-information';
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
            title="Products"
            itemCount="1432+ Products"
            csvImage
            editDetail
            printImage
            editLink="/admin/inventory/products/edit-product-detail"
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
                label: 'Product Detail',
                breadcrumLink: '/admin/inventory/products/product-detail',
              },
            ]}
          />
        </Box>
        <Box
          p="2em 2em 4em 2em"
          position="relative"
          top="7.5em"
          overflowX="hidden"
          overflowY="scroll"
          h="65vh"
        >
          <Box
            backgroundColor="#F8FBF8"
            p="40px 36px 40px 36px"
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
                Coastal Kush
              </Label>
            </Flex>
            <Divider my="15px" mx="30px" borderColor="rgba(18, 23, 30, 0.4)" />

            <Box
              mt="10px"
              w="full"
              display={{
                base: 'grid',
                md: 'flex',
              }}
            >
              <Box
                w={{ base: '100%', md: '70%' }}
                ml={{
                  base: '0em',
                  md: '1em',
                }}
                mt="1em"
                px={{
                  base: '10px',
                  md: '2em',
                }}
              >
                <DetailProductInformation />
              </Box>
              <Box w={{ base: '100%', md: '30%' }} ml="1em">
                <Box
                  borderRadius="24px"
                  border="0.2px solid rgba(18, 23, 30, 0.40)"
                  background="rgba(255, 255, 255, 0.80)"
                >
                  <Img src="/images/image_zoom.png" p="3em 1em" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Sidenav>
    </div>
  );
}
