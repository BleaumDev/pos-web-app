import { Image, Td } from '@chakra-ui/react';
import Link from 'next/link';

export function mapEmployeeGroupDataToRows(
  employeeGroupData: Array<any>
): Array<JSX.Element[]> {
  return employeeGroupData.map((employeeGroup) => [
    <Link href="/admin/employee/employee-group-detail">
      <Td className="text-center" key="userName">
        {employeeGroup.groupName}
      </Td>
    </Link>,
    <Td className="text-center" key="noOfEmployee">
      {employeeGroup.noOfEmployee}
    </Td>,
    <Td
      className="text-center"
      key="permission"
      color={employeeGroup.permission === 'Defined' ? 'green.500' : 'red.500'}
    >
      {
        // @ts-ignore
        employeeGroup.permission === 'Defined' ? (
          <Image src="/images/green-tick.png" w="17px" h="17px" mx="10px" />
        ) : (
          <Image src="/images/info-circle.png" w="17px" h="17px" mx="10px" />
        )
      }
      {employeeGroup.permission}
    </Td>,
    <Td className="text-center" key="applicableTo">
      {employeeGroup.applicableTo}
    </Td>,
  ]);
}
