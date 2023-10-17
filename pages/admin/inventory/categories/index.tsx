/* eslint-disable */

import { Box, Image, Td } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/TablePage';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import { useEffect, useMemo, useState } from 'react';

const CategoriesPage = () => {
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
    <Td className="text-center" key="category">
      View All
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
    <div>
      <Sidenav>
        <Box position="relative" mt="0em" w="auto">
          <FloatingHeader
            title="Categories"
            itemCount="13+ Categories"
            csvImage="/images/csv-file.png"
            refreshImage="/images/refresh-circle.png"
            sortBy="/images/sortBy.png"
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
            filterButton
            addNew="Category"
            addBulk="Categories"
            filter1="Flowers"
            filter2="Capsules"
          />
        </Box>

        <Box
          p="2em 2em 4em 2em"
          borderRadius="20px"
          bg="#E9F0F8 !important"
          position="relative"
          top="-11px"
          overflowX="hidden"
          overflowY="scroll"
          h="60vh"
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
      </Sidenav>
    </div>
  );
};

export default CategoriesPage;
