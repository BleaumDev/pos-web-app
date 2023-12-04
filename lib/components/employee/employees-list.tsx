import { mapEmployeeListingDataToRows } from '@utils/employeeListingUtils';
import employeeListingData from 'data/employeeListingData';
import { useMemo } from 'react';
import TablePage from '../base/TablePage';

const EmployeesList = () => {
  const employeeGroupRows = useMemo(() => {
    return mapEmployeeListingDataToRows(employeeListingData);
  }, [employeeListingData]);
  return (
    <>
      <TablePage
        checkboxes
        backgroundColor="#fff"
        hoverEffect
        headers={[
          'Employee Name',
          'Role',
          'Groups',
          'Email Address',
          'Phone No.',
        ]}
        rows={employeeGroupRows}
      />
    </>
  );
};

export default EmployeesList;
