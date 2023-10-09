import { Box, Image, Td } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/table';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
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

  return (
    <div>
      <Sidenav>
        <Box position="relative" mt="0em" w="auto">
          <FloatingHeader
            title="Manufacturers"
            itemCount="121+ Manufacturers"
            csvImage="/images/csv-file.png"
            refreshImage="/images/refresh-circle.png"
            sortBy="/images/sortBy.png"
            lastBreadcrumbColor="#FF8A43"
            breadcrumbs={[
              {
                label: 'Home',
                href: '/admin/inventory/categories',
              },
              {
                label: 'Inventory',
                href: '/admin/inventory/inventory',
              },
              {
                label: 'Manufacturers',
                href: '/admin/inventory/manufacturers',
              },
            ]}
            searchWithFilters
            filterButton
            addNew="Manufacturer"
            addBulk="Manufacturers"
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
