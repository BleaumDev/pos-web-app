/* eslint-disable unused-imports/no-unused-vars */
import { Box } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/TablePage';
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
  const floatingHeaderProps = {
    title: 'Employees',
    itemCount: '102+ Customers',
    csvImage: true,
    refreshImage: true,
    lastBreadcrumbColor: '#FF8A43',
    breadcrumbs: [
      {
        label: 'Home',
        breadcrumLink: '/admin/inventory/products',
      },
      {
        label: 'Employees',
        breadcrumLink: '/admin/employee/individual-employee',
      },
    ],
    simpleSearch: true,
    createEmployeeGroup: true,
    deleteEmployeeGroup: true,
    createEmployeeGroupLink: '/admin/employee/add-employee-group',
    simplePlaceHolderSearch: 'Search here...',
    addNew: 'Group',
    addLink: '/admin/customers/add-customer',
  };
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
            pr="2em"
            zIndex={2}
          >
            <FloatingHeader {...floatingHeaderProps} />
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
              checkboxes
              hoverEffect
              headers={[
                'Group Name',
                'Employees',
                'Permissions',
                'Applicable to',
              ]}
              rows={employeeGroupRows}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default EmployeeGroups;
