/* eslint-disable unused-imports/no-unused-vars */
import { Box } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/TablePage';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import { mapGenneralStoreSettingDataToRows } from '@utils/generalStoreSettingsUtils';
import { useClassContext } from 'context/ClassContext';
import generatStoreSettingData from 'data/generalStoreSettingData';
import { useEffect, useMemo, useState } from 'react';

const GeneralPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { isClassToggled } = useClassContext();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const storeRows = useMemo(() => {
    return mapGenneralStoreSettingDataToRows(generatStoreSettingData);
  }, [generatStoreSettingData]);

  return (
    <Box>
      {isClient && (
        <Sidenav>
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
              md: '8.5em',
            }}
            overflowX="hidden"
            overflowY="scroll"
            h="60vh"
            zIndex={1}
          >
            <Table
              hoverEffect
              headers={[
                'Started At',
                'Store Name',
                'Store Location',
                'Store Manager',
                'Phone No',
                'Email ID',
                'Opening Status',
              ]}
              rows={storeRows}
            />
          </Box>
        </Sidenav>
      )}
    </Box>
  );
};

export default GeneralPage;
