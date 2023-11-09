/* eslint-disable unused-imports/no-unused-vars */
import { Box } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/TablePage';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import { mapEmployeeGroupDataToRows } from '@utils/employeeGroupsUtils';
import { useClassContext } from 'context/ClassContext';
import employeeGroupData from 'data/employeeGroupData';
import { useEffect, useMemo, useState } from 'react';

const EmployeeGroups = () => {
  const [isClient, setIsClient] = useState(false);
  const { isClassToggled } = useClassContext();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const employeeGroupRows = useMemo(() => {
    return mapEmployeeGroupDataToRows(employeeGroupData);
  }, [employeeGroupData]);

  return (
    <Box>
      {isClient && (
        <Sidenav>
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
              title="Employees"
              itemCount="102+ Customers"
              csvImage
              refreshImage
              addSingleButtons
              lastBreadcrumbColor="#FF8A43"
              breadcrumbs={[
                {
                  label: 'Home',
                  breadcrumLink: '/admin/inventory/products',
                },
                {
                  label: 'Employees',
                  breadcrumLink: '/admin/employee/individual-employee',
                },
              ]}
              simpleSearch
              simplePlaceHolderSearch="Search here..."
              addNew="Group"
              addLink="/admin/customers/add-customer"
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
            <Table
              hoverEffect
              headers={[
                'Group Name',
                'Department Name',
                'No. of Members',
                'Permissions',
              ]}
              rows={employeeGroupRows}
            />
          </Box>
        </Sidenav>
      )}
    </Box>
  );
};

export default EmployeeGroups;
