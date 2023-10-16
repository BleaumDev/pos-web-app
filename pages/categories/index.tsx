import { Box, Td } from '@chakra-ui/react';
import Table from '@lib/components/base/TablePage';
import { useMemo } from 'react';

const Categories = () => {
  const categoryItem = [
    <Td key="img" id="img_col">
      <img
        src="/images/sample_category.png"
        id="img_col"
        width="48px"
        height="38px"
        alt=""
      />
    </Td>,
    <Td key="subject">CBD Products {`(CBD > 98%)`}</Td>,
    <Td className="text-center underline text-blue-500 italic" key="category">
      View all 06
    </Td>,
    <Td className="text-center" key="messagesCount">
      23
    </Td>,
    <Td className="text-center" key="createdAt">
      Active
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

  const categoryList = useMemo(() => {
    return Array(18).fill(categoryItem);
  }, [categoryItem]);

  return (
    <Box m="4em">
      <Table
        checkboxes
        headers={[
          'Image',
          'Category',
          'Sub-category',
          'No. of products',
          'Status',
          'Action',
        ]}
        rows={categoryList}
      />
    </Box>
  );
};

export default Categories;
