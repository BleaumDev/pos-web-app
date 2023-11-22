/* eslint-disable */
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Link } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import UploadMultipleImages from '@lib/components/base/upload-multiple-images';
import EditProductInformation from '@lib/components/product/edit-product-information';
import { useClassContext } from 'context/ClassContext';

export default function EditProductDetail(): React.ReactNode {
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
            title="Products"
            itemCount="1432+ Products"
            productDetail
            cancelLink="/admin/inventory/products/product-detail"
            csvImage
            refreshImage
            printImage
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
                label: 'Edit Product Detail',
                breadcrumLink: '/admin/inventory/products/product-detail',
              },
            ]}
          />
        </Box>

        <Box
          p="2em 2em 4em 2em"
          position="relative"
          top={{
            base: '0em',
            md: '8em',
          }}
          overflowX="hidden"
          overflowY="scroll"
          h="65vh"
          zIndex={1}
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
            <Divider className="mx-5 mt-4" />

            <Box
              mt="10px"
              w="full"
              display={{
                base: 'grid',
                md: 'flex',
              }}
            >
              <Box w={{ base: '100%', md: '70%' }} ml="1em" mt="1em" px="2em">
                <EditProductInformation />
              </Box>
              <Box
                background="rgba(255, 255, 255, 0.80)"
                height="500px"
                display="flex"
                mt="1.5em"
                border="0.2px solid rgba(18, 23, 30, 0.40)"
                borderRadius="24px"
                w={{ base: '500px', md: '30%' }}
              >
                <Box
                  w={{
                    base: '100%',
                    md: '100%',
                  }}
                >
                  <UploadMultipleImages
                    widthSelectedImage="164px"
                    heightSelectedImage="136px"
                    widthOfDefaultImage="300px"
                    addButton
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    </div>
  );
}
