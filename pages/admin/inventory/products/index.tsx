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
      <Link href="/admin/inventory/products/product-detail">
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
      <Image
        src="/images/more.png"
        id="img_col"
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
        <Box position="fixed" mt="0em" w="100%" pr="16em" zIndex={7}>
          <FloatingHeader
            title="Products"
            itemCount="1432+ Items"
            csvImage="/images/csv-file.png"
            refreshImage="/images/refresh-circle.png"
            addButtons
            sortBy
            lastBreadcrumbColor="#FF8A43"
            breadcrumbs={[
              {
                label: 'Home',
                breadcrumLink: '/admin/inventory/products',
              },
              {
                label: 'Inventory',
                breadcrumLink: '/admin/inventory/products',
              },
              {
                label: 'Products',
                breadcrumLink: '/admin/inventory/products',
              },
            ]}
            simpleSearch
            productFilter
            // filterButton
            addNew="Product"
            addBulk="Products"
            addLink="/admin/inventory/products/add-product"
            // filter1="Flowers"
            // filter2="Capsules"
          />
        </Box>
        <Box zIndex={8}>
          <Box
            p="2em 2em 4em 2em"
            zIndex={5}
            borderRadius="20px"
            bg="#E9F0F8 !important"
            position="relative"
            top="7em"
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
        </Box>
      </Sidenav>
    </div>
  );
};

export default Inventory;
