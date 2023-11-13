import { Td } from '@chakra-ui/react';

export function mapEmployeeGroupDataToRows(
  employeeGroupData: Array<any>
): Array<JSX.Element[]> {
  return employeeGroupData.map((employeeGroup) => [
    <Td className="text-center" key="userName">
      {employeeGroup.groupName}
    </Td>,
    <Td className="text-center" key="role">
      {employeeGroup.deptName}
    </Td>,
    <Td className="text-center" key="groupNumber">
      {employeeGroup.noOfEmployee}
    </Td>,
    <Td className="text-center" key="email">
      {employeeGroup.permission}
    </Td>,
  ]);
}
