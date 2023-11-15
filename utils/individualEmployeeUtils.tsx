import { Flex, Image, Td, Text } from '@chakra-ui/react';
import Link from 'next/link';

export function mapIndividualEmployeeDataToRows(
  individualEmployeeData: Array<any>
): Array<JSX.Element[]> {
  return individualEmployeeData.map((employee) => [
    <Td key="img" display="flex" alignItems="center" justifyContent="center">
      <Link href="/admin/employee/employee-detail">
        <Flex
          justifyContent="center"
          alignItems="center"
          id="img_col"
          gap="10px"
        >
          <Image
            src={employee.imgSrc}
            width={{
              base: 'auto',
              md: '100%',
            }}
            height="40px"
            alt=""
          />
          <Text
            color="rgba(65, 69, 75, 0.70)"
            className="primary-font-semibold"
          >
            {employee.name}
          </Text>
        </Flex>
      </Link>
    </Td>,
    <Td className="text-center" key="userName">
      {employee.userName}
    </Td>,

    <Td className="text-center" key="groupNumber">
      {employee.groupNumber}
    </Td>,
    <Td className="text-center" key="email">
      {employee.email}
    </Td>,
    <Td className="text-center" color="#08754C" key="phone">
      {employee.phone}
    </Td>,
    <Td className="text-center" key="permission">
      {employee.permission}, <br /> Promotion
    </Td>,
    <Td key="actions">
      <Image
        src="/images/more.png"
        id="img_col"
        width="30px"
        style={{ cursor: 'pointer' }}
        height="30px"
        alt=""
      />
    </Td>,
  ]);
}
