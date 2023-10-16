import { Box, Image, Td } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/TablePage';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const Inventory = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const inventoryItem = [
    <Td key="img">
      <Link href="/product-detail">
        <Box id="img_col" display="flex" justifyContent="center">
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
      </Link>
    </Td>,
    <Td className="text-center" key="subject">
      Coastal Kush
    </Td>,
    <Td className="text-center" key="category">
      Herb, dried
    </Td>,
    <Td className="text-center" key="messagesCount">
      $22.00
    </Td>,
    <Td className="text-center" key="createdAt">
      250g
    </Td>,
    <Td className="text-center" key="status">
      Cat Enterprise
    </Td>,
    <Td className="text-center" key="status">
      100
    </Td>,
    <Td className="text-center" key="status">
      30
    </Td>,
    <Td className="text-center" key="status">
      25313DH
    </Td>,
    <Td key="actions">
      <Link href="/edit-product">
        <Image
          src="/images/more.png"
          id="img_col"
          width="30px"
          style={{ cursor: 'pointer' }}
          height="30px"
          alt=""
        />
      </Link>
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
            title="Products"
            itemCount="1432+ Items"
            csvImage="/images/csv-file.png"
            refreshImage="/images/refresh-circle.png"
            sortBy="/images/sortBy.png"
            lastBreadcrumbColor="#FF8A43"
            breadcrumbs={[
              {
                label: 'Home',
                href: '/admin/inventory/products',
              },
              {
                label: 'Inventory',
                href: '/admin/inventory/products',
              },
              {
                label: 'Products',
                href: '/admin/inventory/products',
              },
            ]}
            simpleSearch
            productFilter
            // filterButton
            addNew="Product"
            addBulk="Products"
            addLink="/add-product"
            // filter1="Flowers"
            // filter2="Capsules"
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
              hoverEffect
              headers={[
                'Image',
                'Product Name',
                'Category',
                'Price',
                'Size',
                'Manufacturer',
                'Total Qty',
                'Available Qty',
                'SKU',
                '',
              ]}
              rows={inventory}
            />
          )}
        </Box>
      </Sidenav>
    </div>
  );
};

export default Inventory;
