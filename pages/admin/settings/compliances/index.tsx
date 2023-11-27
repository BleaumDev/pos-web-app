/* eslint-disable unused-imports/no-unused-vars */
import { Box, Divider, Flex } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Label from '@lib/components/base/label';
import Compliances from '@lib/components/settings/compliances';
import { useClassContext } from 'context/ClassContext';

const CompliancesPage = () => {
  const { isClassToggled } = useClassContext();

  return (
    <Box>
      <>
        <Box
          w="auto"
          left="0"
          right="0"
          width={'100%'}
          className={isClassToggled ? 'toggled-class' : 'default-class'}
          zIndex={2}
          pr="2em"
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
                label: 'Compliances',
                breadcrumLink: '/admin/settings/compliances',
              },
            ]}
          />
        </Box>
        <Box
          p="2em 2em 4em 2em"
          position="relative"
          top={{
            base: '0em',
            md: '6.5em',
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
                <Label
                  fontSize={{ base: '14px', sm: '14px', md: '16px' }}
                  ml={2}
                  className="glroy-bold"
                >
                  MJ Purchase Limit
                </Label>
              </Flex>
            </Flex>
            <Divider
              my="15px"
              mx={{
                base: '5px',
                md: '20px',
              }}
              borderColor="rgba(18, 23, 30, 0.4)"
            />
            <Box
              m={{
                base: '0em 0px',
                md: '2em 1em',
              }}
              w="full"
            >
              <Compliances />
            </Box>
          </Box>
        </Box>
      </>
    </Box>
  );
};

export default CompliancesPage;
