/* eslint-disable */

import { Box, Image, Td, Text } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/TablePage';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import { useClassContext } from 'context/ClassContext';
import { useEffect, useMemo, useState } from 'react';

const CategoriesPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { isClassToggled } = useClassContext();

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
    <Td className="text-center view-all" key="category">
      <Text borderBottom="1px solid #3A60DD">View All</Text>
    </Td>,
    <Td className="text-center" key="messagesCount">
      23
    </Td>,
    <Td className="text-center" color="#08754C" key="createdAt">
      Active
    </Td>,

    <Td key="actions">
      <Image
        src="/images/more.png"
        id="img_col"
        width="30px"
        ml={{
          base: '1em',
          md: '4em',
        }}
        style={{ cursor: 'pointer' }}
        height="30px"
        alt=""
      />
    </Td>,
  ];

  const inventory = useMemo(() => {
    return Array(20).fill(inventoryItem);
  }, [inventoryItem]);

  return (
    <Sidenav>
      {isClient && (
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
              title="Categories"
              itemCount="13+ Categories"
              csvImage
              refreshImage
              sortBy
              addLink="/admin/inventory/categories/add-category"
              lastBreadcrumbColor="#FF8A43"
              breadcrumbs={[
                {
                  label: 'Home',
                  breadcrumLink: '/admin/inventory/categories',
                },
                {
                  label: 'Inventory',
                  breadcrumLink: '/admin/inventory/categories',
                },
                {
                  label: 'Categories',
                  breadcrumLink: '/admin/inventory/categories',
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
              primaryButton
              addNew="Category"
              addBulk="Categories"
              addButtons
              filter1="Flowers"
              filter2="Capsules"
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
            {isClient && (
              <Table
                checkboxes
                headers={[
                  'Image',
                  'Category',
                  'Sub-categories',
                  'No.of Products',
                  'Status',
                  'Action',
                ]}
                rows={inventory}
              />
            )}
          </Box>
        </>
      )}
    </Sidenav>
  );
};

export default CategoriesPage;
