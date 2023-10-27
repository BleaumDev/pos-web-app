/* eslint-disable react/no-array-index-key */
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Image,
  Td,
  Text,
} from '@chakra-ui/react';
import TablePage from '@lib/components/base/TablePage';

import PosSidenav from '@lib/components/Layout/Sidebar/PosSidenav';
import CancelModel from '@lib/components/models/cancel-model';
import PosSearch from '@lib/components/pos/pos-search';
import PsoHeading from '@lib/components/pos/pso-heading';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const PendingOrders = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const PendingOrders = [
    <Td key="img" display="flex" alignItems="center" justifyContent="center">
      <Link href="/admin/customers/customer-detail">
        <Flex
          justifyContent="center"
          alignItems="center"
          id="img_col"
          gap="10px"
        >
          <Image
            src="/images/avatar.png"
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
            Jenny Wilson
          </Text>
        </Flex>
      </Link>
    </Td>,
    <Td className="text-center" key="subject">
      #1246
    </Td>,
    <Td className="text-center" key="category">
      Nov 16, 2021 18:45
    </Td>,
    <Td className="text-center" key="messagesCount">
      02
    </Td>,
    <Td className="text-center" key="createdAt">
      $36 90
    </Td>,
    <Td className="text-center" key="status">
      Mr. Happy
    </Td>,
    <Td
      key="actions"
      display="flex"
      justifyContent="center"
      gap="10px"
      alignItems="center"
    >
      <Link href="/pos/payments">
        <Button
          p="6px 12px"
          color="#fff"
          fontSize="12px"
          className="primary-font-semibold"
          borderRadius="9px"
          border="0.5px solid #fff"
          bg="#08754C"
          _hover={{
            background: '#08754C',
          }}
          boxShadow="0px 4px 4px 0px rgba(156, 156, 156, 0.23)"
        >
          Checkout
        </Button>
      </Link>
      <CancelModel />
    </Td>,
  ];

  const inventory = useMemo(() => {
    return Array(20).fill(PendingOrders);
  }, [PendingOrders]);
  return (
    <PosSidenav>
      <Flex position="fixed" top="9.75em" w="100%" gap="20px">
        <Box
          w={{
            base: '100%',
            md: '100%',
          }}
        >
          <Box
            mr="20em"
            mt="-4em"
            p=".5em"
            borderRadius="0px 15px 15px 0px"
            h="70px"
            bg="#fff"
          >
            <PsoHeading
              fontSize1="24px"
              fontSize2="12px"
              subColor="#E69066"
              heading="All Pending Orders"
              subText=""
            />
            <Breadcrumb
              spacing="0px"
              mt="-5px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/pos"
                  fontSize="12px"
                  color="rgba(65, 69, 75, 0.60)"
                  className="primary-font-semi-bold-italic"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/pos"
                  fontSize="12px"
                  color="rgba(65, 69, 75, 0.60)"
                  className="primary-font-semi-bold-italic"
                >
                  POS
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  color="#FF8A43"
                  fontSize="12px"
                  href="/pos/pending-orders"
                  className="primary-font-semi-bold-italic"
                >
                  Pending Orders
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box
            overflowY="scroll"
            px="17px"
            overflowX="hidden"
            h="100vh"
            mb="2em"
            zIndex={1000}
          >
            <PosSearch />
            <PsoHeading
              fontSize1="20px"
              fontSize2="12px"
              subColor="#E69066"
              heading="Pending Orders"
              subText="13 Orders"
            />
            <Box pr="4em" mt="2em">
              {isClient && (
                <TablePage
                  hoverEffect
                  headers={[
                    'Customer Name',
                    'Order No.',
                    'Ordered On',
                    'No of Products',
                    'Amount',
                    'Bud-tender',
                    'Action',
                  ]}
                  rows={inventory}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Flex>
    </PosSidenav>
  );
};

export default PendingOrders;
