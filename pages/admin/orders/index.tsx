/* eslint-disable */

import { Box, Image, Td } from '@chakra-ui/react';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import TablePage from '@lib/components/base/TablePage';
import FloatingHeader from '@lib/components/base/floating-header';
import { useMemo } from 'react';

export default function ManufacturerList(): React.ReactElement {
  const orderItem = [
    <Td className="text-center" key="subject">
      #185
    </Td>,
    <Td className="text-center flex-1 flex-col" key="subject">
      <Box>Devon Lane</Box>
      <Box>Medical ID: 10320/09</Box>
    </Td>,
    <Td className="text-center" key="category">
      $2.00
    </Td>,
    <Td className="text-center" key="createdAt">
      Medical
    </Td>,
    <Td className="text-center" key="createdAt">
      $300
    </Td>,
    <Td className="text-center" key="createdAt">
      23/09/2023
    </Td>,
    <Td className="text-center" key="createdAt">
      Completed
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

  const orders = useMemo(() => {
    return Array(20).fill(orderItem);
  }, [orderItem]);

  return (
    <div>
      <Sidenav>
        <Box position="relative" mt="0em" w="auto">
          <FloatingHeader
            title="Orders"
            itemCount="13+ Orders"
            csvImage
            refreshImage
            sortBy
            // addLink="/admin/inventory/categories/add-category"
            lastBreadcrumbColor="#FF8A43"
            breadcrumbs={[
              {
                label: 'Home',
                breadcrumLink: '/admin/',
              },
              {
                label: 'Order',
                breadcrumLink: '/admin/orders',
              },
            ]}
            searchWithFilters
            searchWithFiltersPlaceholder="Products"
            // searchWithFilterOptions={[
            //   {
            //     label: 'Cresco Labs',
            //   },
            // ]}
            // filterButton
            // primaryButton
            addNew="Orders"
            // addBulk="Manufacturers"
            addButtons
            // filter1="Cresco Labs"
            // filter2="Aphria Inc."
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
              'Order no.',
              'Customer Name',
              'Discount',
              'Customer Type',
              'Total Payment',
              'Date',
              'Status',
              'Action',
            ]}
            rows={orders}
          />
        </Box>
      </Sidenav>
    </div>
  );
}
