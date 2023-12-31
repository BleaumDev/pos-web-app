/* eslint-disable */

import { Box, Td } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import TablePage from '@lib/components/base/TablePage';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import DeleteOrderModel from '@lib/components/models/delete-order';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
const options = [
  { label: 'Option 1', color: 'blue' },
  { label: 'Option 2', color: 'red' },
  { label: 'Option 3', color: 'green' },
];
export default function ManufacturerList(): React.ReactElement {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const orderItem = [
    <Td className="text-center" key="subject">
      <Link href="/admin/orders/order-detail">#185</Link>
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
      <DeleteOrderModel />
    </Td>,
  ];

  const orders = useMemo(() => {
    return Array(20).fill(orderItem);
  }, [orderItem]);

  return (
    <Box>
      {isClient && (
        <Sidenav>
          <Box position="relative" mt="0em" w="auto">
            <FloatingHeader
              title="Orders"
              itemCount="12342+ Orders"
              csvDownLoadModel
              refreshImage
              sortBy
              statusFilter
              addLink="/pos/order-type"
              lastBreadcrumbColor="#FF8A43"
              breadcrumbs={[
                {
                  label: 'Home',
                  breadcrumLink: '/admin/inventory/products',
                },
                {
                  label: 'Order',
                  breadcrumLink: '/admin/orders',
                },
              ]}
              searchWithFilters
              searchWithFiltersPlaceholder="Order Category"
              searchWithFilterOptions={[
                {
                  label: 'Order No.',
                },
                {
                  label: 'Customer Name',
                },
                {
                  label: 'Customer Type',
                },
                {
                  label: 'Total Payment',
                },
                {
                  label: 'Date',
                },
                {
                  label: 'Discount',
                },
              ]}
              // filterButton
              // primaryButton
              addNew="Orders"
              // addBulk="Manufacturers"
              addSingleButtons

              // filter1="Cresco Labs"
              // filter2="Aphria Inc."
            />
          </Box>

          <Box
            p="2em 2em 4em 2em"
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
      )}
    </Box>
  );
}
