/* eslint-disable */

import { Box, Image, Td } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/TablePage';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import { useClassContext } from 'context/ClassContext';
import { useEffect, useMemo, useState } from 'react';

const ManufecturerPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const inventoryItem = [
    <Td
      key="img"
      display="flex"
      justifyContent="center"
      textAlign="center"
      border="none"
      padding="0em 0em 0em 4.2em"
    >
      <Box id="img_col">
        <Image
          src="/images/imag1.png"
          width={{
            base: 'auto',
            md: '46%',
          }}
          height="auto"
          alt=""
        />
      </Box>
    </Td>,
    <Td className="text-center" key="subject">
      Ices
    </Td>,
    <Td className="text-center" key="messagesCount">
      23
    </Td>,
    <Td className="text-center" key="createdAt">
      Active
    </Td>,

    <Td key="actions">
      <Image
        src="/images/more.png"
        id="img_col"
        ml={{
          base: '1em',
          md: '4em',
        }}
        width="30px"
        style={{ cursor: 'pointer' }}
        height="30px"
        alt=""
      />
    </Td>,
  ];

  const inventory = useMemo(() => {
    return Array(20).fill(inventoryItem);
  }, [inventoryItem]);
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
            title="Manufacturers"
            itemCount="121+ Manufacturers"
            csvImage
            refreshImage
            sortBy
            lastBreadcrumbColor="#FF8A43"
            breadcrumbs={[
              {
                label: 'Home',
                breadcrumLink: '/admin/inventory/categories',
              },
              {
                label: 'Inventory',
                breadcrumLink: '/admin/inventory/inventory',
              },
              {
                label: 'Manufacturers',
                breadcrumLink: '/admin/inventory/manufacturers',
              },
            ]}
            searchWithFilters
            searchWithFiltersPlaceholder="Products"
            searchWithFilterOptions={[
              {
                label: 'Flowers',
              },
              {
                label: 'Capsules',
              },
            ]}
            filterButton
            addNew="Manufacturer"
            addLink="/admin/inventory/manufacturers/add-manufacturer"
            addButtons
            addBulk="Manufacturers"
            filter1="Cresco Labs"
            filter2="Aphria Inc."
          />
        </Box>

        <Box
          p="2em 2em 4em 2em"
          position="relative"
          top="8.5em"
          overflowX="hidden"
          overflowY="scroll"
          h="60vh"
        >
          {isClient && (
            <Table
              checkboxes
              headers={[
                'Image',
                'Manufacturer',
                'No.of Products',
                'Status',
                'Action',
              ]}
              rows={inventory}
            />
          )}
        </Box>
      </Sidenav>
    </div>
  );
};

export default ManufecturerPage;
