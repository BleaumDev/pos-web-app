/* eslint-disable unused-imports/no-unused-vars */
import { Box } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/TablePage';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import customerData from 'data/customerTableData';
import { useEffect, useMemo, useState } from 'react';
import { mapCustomerDataToRows } from 'utils/customerUtils';

const CustomerPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const customerRows = useMemo(() => {
    return mapCustomerDataToRows(customerData);
  }, [customerData]);

  return (
    <div>
      <Sidenav>
        <Box position="relative" mt="0em" pr="2em" w="auto">
          <FloatingHeader
            title="Customers"
            itemCount="12342+ Customers"
            csvImage
            refreshImage
            addSingleButtons
            sortBy
            lastBreadcrumbColor="#FF8A43"
            breadcrumbs={[
              {
                label: 'Home',
                breadcrumLink: '/admin/inventory/products',
              },
              {
                label: 'Customers',
                breadcrumLink: '/admin/customers',
              },
            ]}
            filterButton
            searchWithFilters
            searchWithFiltersPlaceholder="Customer Type"
            searchWithFilterOptions={[
              {
                label: 'Medical',
              },
              {
                label: 'Recreational',
              },
            ]}
            addNew="Customer"
            addLink="/admin/customers/add-customer"
            filter1="Medical ID"
            filter2="DOB"
          />
        </Box>

        <Box
          p="2em 2em 4em 2em"
          position="relative"
          top="0em"
          overflowX="hidden"
          overflowY="scroll"
          h="60vh"
        >
          {isClient && (
            <Table
              hoverEffect
              headers={[
                'Customer Name',
                'Customer Type',
                'Medical ID',
                'Date Of Birth',
                'Phone',
                'Email',
                'Total Purchase',
                '',
              ]}
              rows={customerRows}
            />
          )}
        </Box>
      </Sidenav>
    </div>
  );
};

export default CustomerPage;
