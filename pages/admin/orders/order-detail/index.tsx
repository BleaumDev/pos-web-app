import { ArrowBackIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import Link from 'next/link';

export default function OrderDetail(): React.ReactElement {
  return (
    <Sidenav>
      <Box position="relative" mt="0em" w="auto">
        <FloatingHeader
          title="Orders"
          itemCount="12342+ Orders"
          csvDownLoadModel
          refreshImage
          sortBy
          statusFilter
          addLink="/pos/order-type"
          lastBreadcrumbColor="#FF8A43"
          breadcrumbs={[
            {
              label: 'Home',
              breadcrumLink: '/admin/inventory/products',
            },
            {
              label: 'Order',
              breadcrumLink: '/admin/orders',
            },
          ]}
          searchWithFilters
          searchWithFiltersPlaceholder="Order Category"
          searchWithFilterOptions={[
            {
              label: 'Order No.',
            },
            {
              label: 'Customer Name',
            },
            {
              label: 'Customer Type',
            },
            {
              label: 'Total Payment',
            },
            {
              label: 'Date',
            },
            {
              label: 'Discount',
            },
          ]}
          // filterButton
          // primaryButton
          addNew="Orders"
          // addBulk="Manufacturers"
          addSingleButtons

          // filter1="Cresco Labs"
          // filter2="Aphria Inc."
        />
      </Box>
      <Box
        p="2em 2em 4em 2em"
        borderRadius="20px"
        bg="#FFFFFF !important"
        position="relative"
        top="-11px"
        overflowX="hidden"
        overflowY="scroll"
        h="60vh"
        margin={8}
      >
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Link href="/admin/orders">
              <ArrowBackIcon
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(65, 69, 75, 0.20)',
                  borderRadius: 3,
                  width: 24,
                  height: 24,
                }}
                color="rgba(65, 69, 75, 0.70)"
              />
            </Link>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text className="primary-font-medium" ml={2}>
                Order No.{' '}
              </Text>
              <Text color="41454B" className="primary-font-bold" ml={2}>
                #12345
              </Text>
              <Box
                // style={{
                //   backgroundColor: '#08754C',
                // }}
                backgroundColor="#08754C"
                px={2}
                py={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius={4}
                ml={3}
              >
                <Text className="primary-font-semi-bold-italic" color="white">
                  (Completed)
                </Text>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Image
              src="/images/print.png"
              id="img_col"
              width="30px"
              style={{ cursor: 'pointer' }}
              height="30px"
              alt=""
            />
            <Image
              src="/images/more.png"
              id="img_col"
              width="30px"
              style={{ cursor: 'pointer' }}
              height="30px"
              alt=""
              ml={2}
            />
          </Box>
        </Box>

        <Center height="50px">
          <Divider />
        </Center>

        <Grid
          // column={15}
          // columns={{
          //   base: 7,
          //   md: 15,
          // }}
          // templateColumns="repeat(14, 1fr)"
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(14, 1fr)' }}
        >
          <GridItem
            // colSpan={7}
            colSpan={{
              base: 1,
              md: 7,
            }}
            pl={8}
            pr={3}
            mr={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Box
              boxShadow="9px 9px 23px 0px rgba(128, 128, 128, 0.07)"
              py={10}
              px={5}
            >
              <Box my={2} mb={5}>
                <Text
                  className="primary-font-bold"
                  fontSize={20}
                  color="rgba(65, 69, 75, 1)"
                  fontWeight="bold"
                >
                  Order Details
                </Text>
              </Box>
              <Box
                borderWidth={1}
                borderColor="rgba(65, 69, 75, 0.20)"
                borderRadius={5}
                p={5}
              >
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  mb={6}
                >
                  <Text
                    color="rgba(65, 69, 75, 0.5)"
                    className="primary-font-semibold"
                  >
                    Customer Name
                  </Text>
                  <Text
                    color="rgba(65, 69, 75, 0.8)"
                    className="primary-font-semi-bold-italic"
                  >
                    Wade Warren
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  mb={6}
                >
                  <Text
                    color="rgba(65, 69, 75, 0.5)"
                    className="primary-font-semibold"
                  >
                    Order Created At
                  </Text>
                  <Text
                    color="rgba(65, 69, 75, 0.8)"
                    className="primary-font-semi-bold-italic"
                  >
                    12/09/2023 3:45 PM
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  mb={6}
                >
                  <Text
                    color="rgba(65, 69, 75, 0.5)"
                    className="primary-font-semibold"
                  >
                    Order Completed At
                  </Text>
                  <Text
                    color="rgba(65, 69, 75, 0.8)"
                    className="primary-font-semi-bold-italic"
                  >
                    12/09/2023 4:45 PM
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  mb={6}
                >
                  <Text
                    color="rgba(65, 69, 75, 0.5)"
                    className="primary-font-semibold"
                  >
                    Customer Type
                  </Text>
                  <Text
                    color="rgba(65, 69, 75, 0.8)"
                    className="primary-font-semi-bold-italic"
                  >
                    Medical
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  mb={6}
                >
                  <Text
                    color="rgba(65, 69, 75, 0.5)"
                    className="primary-font-semibold"
                  >
                    Bud Temder
                  </Text>
                  <Text
                    color="rgba(65, 69, 75, 0.8)"
                    className="primary-font-semi-bold-italic"
                  >
                    Jhon Wick
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  mb={6}
                >
                  <Text
                    color="rgba(65, 69, 75, 0.5)"
                    className="primary-font-semibold"
                  >
                    Register
                  </Text>
                  <Text
                    color="rgba(65, 69, 75, 0.8)"
                    className="primary-font-semi-bold-italic"
                  >
                    Lotus Gold 2
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  mb={6}
                >
                  <Text
                    color="rgba(65, 69, 75, 0.5)"
                    className="primary-font-semibold"
                  >
                    Store Name
                  </Text>
                  <Text
                    color="rgba(65, 69, 75, 0.8)"
                    className="primary-font-semi-bold-italic"
                  >
                    Lotus Gold Nicoma Park
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  mb={6}
                >
                  <Text
                    color="rgba(65, 69, 75, 0.5)"
                    className="primary-font-semibold"
                  >
                    License Number
                  </Text>
                  <Text
                    color="rgba(65, 69, 75, 0.8)"
                    className="primary-font-semi-bold-italic"
                  >
                    AP-FAAA-HR4P-VQOO-RDAK
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  mb={6}
                >
                  <Text
                    color="rgba(65, 69, 75, 0.5)"
                    className="primary-font-semibold"
                  >
                    Metrc ID
                  </Text>
                  <Text
                    color="rgba(65, 69, 75, 0.8)"
                    className="primary-font-semi-bold-italic"
                  >
                    12127281
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  mb={6}
                >
                  <Text
                    color="rgba(65, 69, 75, 0.5)"
                    className="primary-font-semibold"
                  >
                    Reported to METRC
                  </Text>
                  <Box backgroundColor="#08754C" borderRadius={4} py={2} px={4}>
                    <Text
                      color="white"
                      className="primary-font-semi-bold-italic"
                    >
                      Approved
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            // colSpan={7}
            colSpan={{
              base: 1,
              md: 7,
            }}
          >
            <Text textAlign="center" className="primary-font-bold">
              Pricing Details
            </Text>
            <Divider />
            <TableContainer>
              <Table variant="unstyled">
                <Thead>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Th className="primary-font-semi-bold-italic">
                      Product Name
                    </Th>
                    <Th className="primary-font-semi-bold-italic">SKU</Th>
                    <Th className="primary-font-semi-bold-italic">Price</Th>
                    <Th className="primary-font-semi-bold-italic">Qty</Th>
                    <Th className="primary-font-semi-bold-italic">Subtotal</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                    // borderWidth={1}
                    mt={-1}
                    mb={-1}
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr
                    borderBottomWidth={1}
                    borderColor="rgba(18, 23, 30, 0.20)"
                  >
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      Cowichan Kush
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      28389292
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      1
                    </Td>
                    <Td
                      color="rgba(18, 23, 30, 0.60)"
                      className="primary-font-medium"
                    >
                      $40.06
                    </Td>
                  </Tr>
                  <Tr mt={-2} mb={0}>
                    <Td
                      colSpan={4} // Assuming the table has 5 columns, this will span across the first 4 columns
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semi-bold-italic"
                    >
                      Subtotal
                    </Td>
                    <Td
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semi-bold-italic"
                    >
                      $500
                    </Td>
                  </Tr>
                  <Tr mt={-2} mb={0}>
                    <Td
                      colSpan={4} // Assuming the table has 5 columns, this will span across the first 4 columns
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semibold"
                    >
                      Total Discount
                    </Td>
                    <Td
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semibold"
                    >
                      $53.00
                      <TriangleUpIcon ml={2} mb={1} />
                    </Td>
                  </Tr>
                  <Tr mt={-2} mb={0}>
                    <Td
                      colSpan={4} // Assuming the table has 5 columns, this will span across the first 4 columns
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semibold"
                    >
                      Total Tax
                    </Td>
                    <Td
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semibold"
                    >
                      $29.82
                      <TriangleUpIcon ml={2} mb={1} />
                    </Td>
                  </Tr>
                  <Tr mt={-2} mb={0}>
                    <Td
                      colSpan={4} // Assuming the table has 5 columns, this will span across the first 4 columns
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semibold"
                    >
                      Total Payable
                    </Td>
                    <Td
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semibold"
                    >
                      $550.00
                    </Td>
                  </Tr>
                  <Tr mt={-2} mb={0}>
                    <Td
                      colSpan={5} // Assuming the table has 5 columns, this will span across the first 4 columns
                      color="rgba(65, 69, 75, 0.7)"
                      className="primary-font-semi-bold-italic"
                    >
                      Payment by cash
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      colSpan={4} // Assuming the table has 5 columns, this will span across the first 4 columns
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semi-bold-italic"
                    >
                      Amount Received
                    </Td>
                    <Td
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semi-bold-italic"
                    >
                      $600.00
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      colSpan={4} // Assuming the table has 5 columns, this will span across the first 4 columns
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semi-bold-italic"
                    >
                      Change
                    </Td>
                    <Td
                      color="rgba(65, 69, 75, 1)"
                      className="primary-font-semi-bold-italic"
                    >
                      $50.00
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              {/* <Box
                display="flex"
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
                mx={10}
                mt={10}
              >
                <Text>Subtotal</Text>
                <Text>$500</Text>
              </Box> */}
            </TableContainer>
          </GridItem>
        </Grid>
      </Box>
    </Sidenav>
  );
}
