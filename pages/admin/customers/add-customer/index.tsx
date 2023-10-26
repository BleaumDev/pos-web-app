/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/button-has-type */
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Flex, Img } from '@chakra-ui/react';
import Button from '@lib/components/base/button';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import ContactInformation from '@lib/components/customers/contact-information';
import CustomerPersonalInformation from '@lib/components/customers/customer-personal-information';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import Link from 'next/link';

export default function AddCustomer(): React.ReactNode {
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
            <Flex ml="1em">
              <Link href="/admin/customers">
                <ChevronLeftIcon boxSize={30} />
              </Link>

              <Label
                fontSize={{ base: '16px', sm: '18px', md: '20px' }}
                ml={2}
                className="primary-font-semibold"
              >
                Add New Customer
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
                w="100%"
                m={{
                  base: '0em 10px',
                  md: '0em 2em',
                }}
              >
                <CustomerPersonalInformation />
                <ContactInformation />

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
}
