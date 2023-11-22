/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/button-has-type */
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex } from '@chakra-ui/react';
import Button from '@lib/components/base/button';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import OpeningHoursPage from '@lib/components/settings/opening-hours';
import StoreDetails from '@lib/components/settings/store-details';
import StoreLocationDetails from '@lib/components/settings/store-location-details';
import { useClassContext } from 'context/ClassContext';
import Link from 'next/link';

export default function AddNewStore(): React.ReactNode {
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
            title="Settings"
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
                label: 'Settings',
                breadcrumLink: '/admin/settings/general',
              },
              {
                label: 'General',
                breadcrumLink: '/admin/settings/general',
              },
            ]}
            addNewStore
            addStore="/admin/settings/general/add-new-store"
          />
        </Box>

        <Box
          p="2em 2em 4em 2em"
          position="relative"
          top={{
            base: '0em',
            md: '7.5em',
          }}
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
            <Flex justifyContent="space-between">
              <Flex ml="1em">
                <Link href="/admin/settings/general">
                  <ChevronLeftIcon boxSize={30} />
                </Link>

                <Label
                  fontSize={{ base: '16px', sm: '18px', md: '20px' }}
                  ml={2}
                  className="primary-font-semibold"
                >
                  Add Details
                </Label>
              </Flex>
              <Flex
                justifyContent="end"
                gap="21px"
                mt="-3.6em"
                alignItems="end"
              >
                <Link href="/admin/settings/general">
                  <Button
                    className="primary-font-semibold"
                    border=" 0.3px solid rgba(18, 23, 30, 0.50)"
                    fontSize="12px"
                    height="35px"
                    styledVariant="outline"
                    color="rgba(18, 23, 30, 0.50)"
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  className="primary-font-semibold"
                  fontSize="12px"
                  height="35px"
                  styledVariant="blue"
                  _hover={{
                    background: '#FF8A43',
                  }}
                  background="#FF8A43"
                >
                  Create Store
                </Button>
              </Flex>
            </Flex>
            <Divider
              my="15px"
              mx={{
                base: '5px',
                md: '30px',
              }}
              borderColor="rgba(18, 23, 30, 0.4)"
            />
            <Box
              display={{
                base: 'grid',
                md: 'flex',
              }}
              m={{
                base: '0em 0px',
                md: '4em 1em',
              }}
              w="full"
              gap={{
                md: '0px',
                base: '40px',
              }}
            >
              <StoreDetails />
              <StoreLocationDetails />

              <OpeningHoursPage />
            </Box>
          </Box>
        </Box>
      </>
    </div>
  );
}
