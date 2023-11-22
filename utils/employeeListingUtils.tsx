import { Td } from '@chakra-ui/react';

export function mapEmployeeListingDataToRows(
  employeeListingData: Array<any>
): Array<JSX.Element[]> {
  return employeeListingData.map((employee) => [
    <Td className="text-center" key="employeeName">
      {employee.employeeName}
    </Td>,
    <Td className="text-center" key="role">
      {employee.role}
    </Td>,
    <Td className="text-center" key="groups">
      {employee.groups}
    </Td>,
    <Td className="text-center" key="email">
      {employee.email}
    </Td>,
    <Td className="text-center" color="#08754C" key="phone">
      {employee.phone}
    </Td>,
  ]);
}
