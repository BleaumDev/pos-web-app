/* eslint-disable */

import { Box, Image, Td } from '@chakra-ui/react';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import TablePage from '@lib/components/base/TablePage';
import FloatingHeader from '@lib/components/base/floating-header';
import { useMemo } from 'react';

export default function ManufacturerList(): React.ReactElement {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

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
          src="/images/sample_manufacturer.png"
          width={{
            base: 'auto',
            md: '50%',
          }}
          height="auto"
          alt=""
        />
      </Box>
    </Td>,
    <Td className="text-center" key="subject">
      Cresco Labs.
    </Td>,
    <Td className="text-center" key="category">
      30
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
            title="Manufacturers"
            itemCount="13+ Manufacturers"
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
                label: 'Manufacturers',
                breadcrumLink: '/admin/inventory/categories',
              },
            ]}
            searchWithFilters
            searchWithFiltersPlaceholder="Products"
            searchWithFilterOptions={[
              {
                label: 'Cresco Labs',
              },
            ]}
            filterButton
            // primaryButton
            addNew="Manufacturer"
            addBulk="Manufacturers"
            addButtons
            filter1="Cresco Labs"
            filter2="Aphria Inc."
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
          <TablePage
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
        </Box>
      </Sidenav>
    </div>
  );
}
