import { Flex, Image, Td, Text } from '@chakra-ui/react';
import Link from 'next/link';

export function mapCustomerDataToRows(
  customerData: Array<any>
): Array<JSX.Element[]> {
  return customerData.map((customer) => [
    <Td key="img" display="flex" alignItems="center" justifyContent="center">
      <Link href="/admin/customers/customer-detail">
        <Flex
          justifyContent="center"
          alignItems="center"
          id="img_col"
          gap="10px"
        >
          <Image
            src={customer.imgSrc}
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
            {customer.name}
          </Text>
        </Flex>
      </Link>
    </Td>,
    <Td className="text-center" key="type">
      {customer.type}
    </Td>,
    <Td className="text-center" key="medicalId">
      {customer.medicalId}
    </Td>,
    <Td className="text-center" key="DOB">
      {customer.DOB}
    </Td>,
    <Td className="text-center" key="phone">
      {customer.phone}
    </Td>,
    <Td className="text-center" key="email">
      {customer.email}
    </Td>,
    <Td className="text-center" key="totalPurchase">
      {customer.totalPurchase}
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
