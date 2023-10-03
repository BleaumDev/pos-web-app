import { Box, Td } from '@chakra-ui/react';
import Table from '@lib/components/base/Table';
import { useMemo } from 'react';

const InventoryPage = () => {
  const inventoryItem = [
    <Td key="img" id="img_col">
      <img
        src="/images/imag1.png"
        id="img_col"
        width="100px"
        height="100px"
        alt=""
      />
    </Td>,
    <Td className="text-center" key="subject">
      Coastal Kush
    </Td>,
    <Td className="text-center" key="category">
      Herb, dried
    </Td>,
    <Td className="text-center" key="messagesCount">
      $22.00
    </Td>,
    <Td className="text-center" key="createdAt">
      250g
    </Td>,
    <Td className="text-center" key="status">
      Cat Enterprise
    </Td>,
    <Td className="text-center" key="status">
      100
    </Td>,
    <Td className="text-center" key="status">
      30
    </Td>,
    <Td className="text-center" key="status">
      25313DH
    </Td>,
    <Td key="actions">
      <img
        src="/images/more.png"
        id="img_col"
        width="30px"
        style={{ cursor: 'pointer' }}
        height="30px"
        alt=""
      />
    </Td>,
  ];

  const inventory = useMemo(() => {
    return Array(18).fill(inventoryItem);
  }, [inventoryItem]);

  return (
    <Box m="4em">
      <Table
        checkboxes
        headers={[
          '',
          'Product Name',
          'Category',
          'Price',
          'Size',
          'Manufacturer',
          'Total Qty',
          'Available Qty',
          'SKU',
          '',
        ]}
        rows={inventory}
      />
    </Box>
  );
};

export default InventoryPage;
