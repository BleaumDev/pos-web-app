import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Flex, Img, Link, Stack } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import Text from '@lib/components/base/text';
import CategoryDetail from '@lib/components/category/category-detail';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';

export default function ViewCategory(): React.ReactElement {
  return (
    <div>
      <Sidenav>
        <Box position="relative" mt="0em" w="auto">
          <FloatingHeader
            title="Categories"
            itemCount="13+ Categories"
            // csvImage="/images/csv-file.png"
            // editDetail
            // searchWithFilters
            simpleSearch
            // printImage
            editLink="/admin/inventory/products/edit-product-detail"
            // refreshImage="/images/refresh-circle.png"
            lastBreadcrumbColor="#FF8A43"
            // productFilter
            filterButton
            filter1="Flowers"
            filter2="Capsules"
            // productFilter
            breadcrumbs={[
              {
                label: 'Home',
                breadcrumLink: '/admin/inventory/products',
              },
              {
                label: 'Categories',
                breadcrumLink: '/admin/inventory/categories',
              },
              {
                label: 'Ices',
                breadcrumLink: '/admin/inventory/products',
              },
              {
                label: 'Italian Ice Strain',
                breadcrumLink: '/admin/inventory/products/product-detail',
              },
            ]}
            primaryButton
            secondaryButton
            primaryLabel="Add Sub-category"
            secondaryLabel="Add Sub-category"
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
                <Box
                  display={{
                    base: 'grid',
                    md: 'flex',
                  }}
                  w="100%"
                >
                  <Box w={{ base: '100%', md: '50%' }}>
                    <Box
                      display={{
                        base: 'grid',
                        md: 'flex',
                      }}
                      w="100%"
                    >
                      <Box w={{ base: '100%', md: '50%' }}>
                        <Stack>
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            Product Name
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            {' '}
                            Coastal Kush
                          </Text>
                        </Stack>
                        <Stack mt="1em">
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            SKU
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            {' '}
                            25313DH
                          </Text>
                        </Stack>
                        <Stack mt="1em">
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            Total Quantity
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            {' '}
                            100 items
                          </Text>
                        </Stack>
                        <Stack mt="1em">
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            Type Of Pricing
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            {' '}
                            Simple
                          </Text>
                        </Stack>
                        <Stack mt="1em">
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            Sales Price:
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            {' '}
                            $52
                          </Text>
                        </Stack>
                        <Stack mt="1em">
                          <Flex>
                            <Label
                              fontSize={{
                                base: '16px',
                                sm: '18px',
                                md: '20px',
                              }}
                              className="primary-font-semibold"
                            >
                              Barcode
                            </Label>

                            <Box
                              padding="4.421px"
                              background="rgba(233, 240, 248, 0.50)"
                              borderRadius="3px"
                              cursor="pointer"
                              _hover={{
                                background: 'rgba(233, 240, 248, 0.90)',
                              }}
                              mt="4px"
                              ml="10px"
                            >
                              <Img src="/images/copy.png" w="16px" h="16px" />
                            </Box>
                          </Flex>
                          <Img
                            src="/images/sample_barcode.png"
                            w="171px"
                            h="67px"
                          />
                        </Stack>
                      </Box>
                      <Box w={{ base: '100%', md: '50%' }} mt="3.8em">
                        <Stack>
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            Unit Of Measure
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            Each
                          </Text>
                        </Stack>
                        <Stack mt="1em">
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            Quantity Remaining
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            {' '}
                            30 items
                          </Text>
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                  <Box w={{ base: '100%', md: '50%' }}>
                    <Box
                      display={{
                        base: 'grid',
                        md: 'flex',
                      }}
                      w="100%"
                    >
                      <Box w={{ base: '100%', md: '50%' }}>
                        <Stack>
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            Cannabis Type
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            {' '}
                            Indica
                          </Text>
                        </Stack>
                        <Stack mt="1em">
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            Manufacturer
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            {' '}
                            Cat Enterprise
                          </Text>
                        </Stack>
                        <Stack mt="1em" w="280px" pr="1em">
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            Description
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            {' '}
                            Coastal Kush has a unique terpene profile that
                            produces an intense, spicy and herbaceous aroma,
                            with notes of mahogany, sweet flowers and citrus.
                          </Text>
                        </Stack>
                        <Stack mt="1em" w="280px" pr="1em">
                          <CategoryDetail className="primary-font-medium" />
                        </Stack>
                      </Box>
                      <Box w={{ base: '100%', md: '50%' }}>
                        <Stack>
                          <Label
                            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                            className="primary-font-semibold"
                          >
                            Category
                          </Label>
                          <Text styledVariant="textMedium" mt="-5px">
                            Pre-Rolled
                          </Text>
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                </Box>
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
