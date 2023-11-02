/* eslint-disable react/no-array-index-key */
import { Flex, Stack, Text } from '@chakra-ui/react';

import Label from '../base/label';

interface InventoryDetailProps {
  className: string;
}

const InventtoryDetailData = [
  {
    label: 'Product Addition Date',
    value: '29.10.2022',
  },
  {
    label: 'Metrc ID',
    value: '3567892',
  },
  {
    label: 'Initial Quantity',
    value: '50g',
  },
  {
    label: 'Metrc Name',
    value: 'Choco Hub',
  },
  {
    label: 'THC',
    value: '2%',
  },
  {
    label: 'CBD',
    value: '1',
  },
];

const InventoryDetail = ({ className }: InventoryDetailProps) => {
  return (
    <Stack mt="24px">
      <Label
        fontSize={{
          base: '12px',
          sm: '14px',
          md: '14px',
        }}
        className="glroy-bold"
      >
        Inventory Details
      </Label>
      {InventtoryDetailData.map((item, index) => (
        <Flex justifyContent="space-between" key={index} mt="6px" mx="10px">
          <Text className={className} color="#41454B" fontSize="14px">
            {item.label}
          </Text>
          <Text
            fontSize="14px"
            className="primary-font-semibold"
            color="rgba(65, 69, 75, 0.50)"
          >
            {item.value}
          </Text>
        </Flex>
      ))}
    </Stack>
  );
};

export default InventoryDetail;
