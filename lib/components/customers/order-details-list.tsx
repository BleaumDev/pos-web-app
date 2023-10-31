/* eslint-disable react/no-array-index-key */
import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useState } from 'react';

import Label from '../base/label';

type Order = {
  id: string;
  timestamp: string;
  quantity: number;
  paymentMethod: string;
  amount: number;
};

type OrderRowProps = {
  order: Order;
};

const OrderRow = ({ order }: OrderRowProps) => (
  <Tr
    pt="1em"
    borderBottom="1px solid rgba(65, 69, 75, 0.20)"
    h="42.5px"
    color="rgba(65, 69, 75, 0.60)"
    className="primary-font-semi-bold-italic"
    fontSize="13px"
  >
    <Td>{order.id}</Td>
    <Td>{order.timestamp}</Td>
    <Td>{order.quantity} pac</Td>
    <Td>{order.paymentMethod}</Td>
    <Td>{`$${order.amount.toFixed(2)}`}</Td>
  </Tr>
);

const OrdersPerPage = 7;

const OrderDetailsList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const orders = [
    {
      id: '#1847395',
      timestamp: '2 minutes ago',
      quantity: 2,
      paymentMethod: 'Visa Card',
      amount: 40.06,
    },
    {
      id: '#1847395',
      timestamp: '20 Dec, 2023',
      quantity: 1,
      paymentMethod: 'Cash',
      amount: 40.06,
    },
    {
      id: '#1223244',
      timestamp: '26 Dec, 2023',
      quantity: 7,
      paymentMethod: 'Cash',
      amount: 40.06,
    },
    {
      id: '#1847395',
      timestamp: '2 minutes ago',
      quantity: 2,
      paymentMethod: 'Visa Card',
      amount: 40.06,
    },
    {
      id: '#1847395',
      timestamp: '20 Dec, 2023',
      quantity: 1,
      paymentMethod: 'Cash',
      amount: 40.06,
    },
    {
      id: '#1223244',
      timestamp: '26 Dec, 2023',
      quantity: 7,
      paymentMethod: 'Cash',
      amount: 40.06,
    },
    {
      id: '#1223244',
      timestamp: '26 Dec, 2023',
      quantity: 7,
      paymentMethod: 'Cash',
      amount: 40.06,
    },
    {
      id: '#1223244',
      timestamp: '26 Dec, 2023',
      quantity: 7,
      paymentMethod: 'Cash',
      amount: 40.06,
    },
    {
      id: '#1223244',
      timestamp: '26 Dec, 2023',
      quantity: 7,
      paymentMethod: 'Cash',
      amount: 40.06,
    },
    {
      id: '#1223244',
      timestamp: '26 Dec, 2023',
      quantity: 7,
      paymentMethod: 'Cash',
      amount: 40.06,
    },
    {
      id: '#1223244',
      timestamp: '26 Dec, 2023',
      quantity: 7,
      paymentMethod: 'Cash',
      amount: 40.06,
    },
  ];

  const offset = currentPage * OrdersPerPage;

  const paginatedOrders = orders.slice(offset, offset + OrdersPerPage);

  const pageCount = Math.ceil(orders.length / OrdersPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 0; i < pageCount; i += 1) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <Box mt="1em">
      <Label
        fontSize={{ base: '16px', sm: '18px', md: '20px' }}
        className="glroy-bold"
      >
        Orders History
      </Label>
      <Box
        p="18px 31px 30px 31px"
        h="auto"
        mt="1em"
        borderRadius="6px"
        border="1px solid rgba(65, 69, 75, 0.20)"
      >
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                {['Order Id', 'Order Time', 'Amount', 'Payment', 'Price'].map(
                  (headerText, index) => (
                    <Th key={index} className="order-list-th">
                      {headerText}
                    </Th>
                  )
                )}
              </Tr>
            </Thead>
            <Tbody>
              {paginatedOrders.map((order, index) => (
                <OrderRow key={index} order={order} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Flex justifyContent="end">
        <Box onClick={handlePreviousPage}>
          <img src="/images/prev.png" alt="" className="pag-button" />
        </Box>
        {renderPageNumbers().map((page, index) => (
          <Box
            key={index}
            onClick={() => {
              if (page === currentPage) return;
              setCurrentPage(page);
            }}
            className={`pagination-tag1 ${
              page === currentPage ? 'current' : ''
            }`}
          >
            {page + 1} {/* Add 1 to page number since it starts from 0 */}
          </Box>
        ))}
        <Box onClick={handleNextPage}>
          <img src="/images/next.png" alt="" className="pag-button" />
        </Box>
      </Flex>
    </Box>
  );
};

export default OrderDetailsList;
