/* eslint-disable unused-imports/no-unused-vars */
import { Box } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/TablePage';
import { mapCustomerDataToRows } from '@utils/customerUtils';
import { useClassContext } from 'context/ClassContext';
import customerData from 'data/customerTableData';
import { useEffect, useMemo, useState } from 'react';

const CustomerPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { isClassToggled } = useClassContext();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const customerRows = useMemo(() => {
    return mapCustomerDataToRows(customerData);
  }, [customerData]);

  return (
    <Box>
      {isClient && (
        <>
          <Box
            w="auto"
            left="0"
            right="0"
            width={'100%'}
            className={isClassToggled ? 'toggled-class' : 'default-class'}
            position="fixed"
            zIndex={2}
            pr="2em"
          >
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
            top="8.5em"
            overflowX="hidden"
            zIndex={1}
            overflowY="scroll"
            h="60vh"
          >
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
          </Box>
        </>
      )}
    </Box>
  );
};

export default CustomerPage;
