/* eslint-disable unused-imports/no-unused-vars */
import { Box, Text } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import { useClassContext } from 'context/ClassContext';

const MenusPage = () => {
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
                label: 'Menus',
                breadcrumLink: '/admin/settings/menus',
              },
            ]}
            addNewSettingButton
            addNewSettingLink=""
            addNewSettingProp="Menu"
          />
        </Box>

        <Box
          p="2em 2em 4em 2em"
          position="relative"
          top={{
            base: '0em',
            md: '8.5em',
          }}
          overflowX="hidden"
          overflowY="scroll"
          h="60vh"
          zIndex={1}
        >
          <Text>Menus is under development</Text>
        </Box>
      </>
    </Box>
  );
};

export default MenusPage;
