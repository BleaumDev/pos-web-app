/* eslint-disable unused-imports/no-unused-vars */
import { Box } from '@chakra-ui/react';
import TablePage from '@lib/components/base/TablePage';
import FloatingHeader from '@lib/components/base/floating-header';
import { mapTaxesSettingDataToRows } from '@utils/taxesSettingsUtils';
import { useClassContext } from 'context/ClassContext';
import taxesData from 'data/taxesData';
import { useMemo } from 'react';

const TaxesPage = () => {
  const { isClassToggled } = useClassContext();
  const taxesRows = useMemo(() => {
    return mapTaxesSettingDataToRows(taxesData);
  }, [taxesData]);

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
                label: 'Taxes',
                breadcrumLink: '/admin/settings/taxes',
              },
            ]}
            addNewSettingButton
            addNewSettingLink="/admin/settings/taxes/add-new-tax"
            addNewSettingProp="Tax"
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
          <TablePage
            hoverEffect={true}
            headers={[
              'Tax Name',
              'Tax Rate',
              'Tax Applies To',
              'Compound Taxation',
            ]}
            rows={taxesRows}
          />
        </Box>
      </>
    </Box>
  );
};

export default TaxesPage;
