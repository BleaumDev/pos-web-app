import {
  Box,
  Flex,
  Grid,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const EmailOrPrintInvoicePage = () => {
  return (
    <Box>
      <Box mx="12px">
        <Flex justifyContent="center" alignItems="center" my="1em">
          <Img src="/images/bleaum.png" w="39px" h="45px" alt="bleaum" />
        </Flex>

        <Flex justifyContent="space-between" mt="6px">
          <Text
            color="#41454B"
            fontSize="16px"
            className="primary-font-semibold"
          >
            Order #1246
          </Text>
          <Flex gap="5px">
            <Text
              color="rgba(65, 69, 75, 0.20)"
              fontSize="12px"
              className="primary-font-semibold"
            >
              Monday, 23rd May, 2023
            </Text>
          </Flex>
        </Flex>
        <hr
          style={{
            borderTop: '1px solid rgba(65, 69, 75, 0.20)',
            marginTop: '6px',
          }}
        />
        <Flex justifyContent="space-between" mt="6px">
          <Text
            color="#41454B"
            fontSize="16px"
            className="primary-font-semibold"
          >
            Customer Name
          </Text>
          <Flex gap="5px">
            <Text
              color="rgba(65, 69, 75, 0.60)"
              fontSize="12px"
              className="primary-font-semibold"
            >
              Darlene Robertson
            </Text>
          </Flex>
        </Flex>
        <hr
          style={{
            borderTop: '1px solid rgba(65, 69, 75, 0.20)',
            marginTop: '6px',
          }}
        />
        <Flex justifyContent="space-between" mt="6px">
          <Text
            color="#41454B"
            fontSize="16px"
            className="primary-font-semibold"
          >
            Medical ID
          </Text>
          <Flex gap="5px">
            <Text
              color="rgba(65, 69, 75, 0.60)"
              fontSize="12px"
              className="primary-font-semibold"
            >
              AP-FAAA-HR4P-VQOO-RDAK-C6W9-8J
            </Text>
          </Flex>
        </Flex>
        <hr
          style={{
            borderTop: '1px solid rgba(65, 69, 75, 0.20)',
            marginTop: '6px',
          }}
        />
        <Flex justifyContent="space-between" mt="6px">
          <Text
            color="#41454B"
            fontSize="16px"
            className="primary-font-semibold"
          >
            Outlet
          </Text>
          <Flex gap="5px">
            <Text
              color="rgba(65, 69, 75, 0.60)"
              fontSize="12px"
              className="primary-font-semibold"
            >
              Store name 3
            </Text>
          </Flex>
        </Flex>
        <hr
          style={{
            borderTop: '1px solid rgba(65, 69, 75, 0.20)',
            marginTop: '6px',
          }}
        />
        <TableContainer>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th className="small-table-text">Product Name</Th>
                <Th className="small-table-text">SKU</Th>
                <Th className="small-table-text">Price</Th>
                <Th className="small-table-text">Qty</Th>
                <Th className="small-table-text">Subtotal</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td className="small-table-text1">Cowichan Kush</Td>
                <Td className="small-table-text1">1426384</Td>
                <Td className="small-table-text1">$40.06</Td>
                <Td className="small-table-text1">1</Td>
                <Td className="small-table-text1">$40.06</Td>
              </Tr>
              <Tr>
                <Td className="small-table-text1">Tribe CBD Oil...</Td>
                <Td className="small-table-text1">1426384</Td>
                <Td className="small-table-text1">$40.06</Td>
                <Td className="small-table-text1">1</Td>
                <Td className="small-table-text1">$40.06</Td>
              </Tr>
              <Tr>
                <Td className="small-table-text1">District Cannab...</Td>
                <Td className="small-table-text1">1426384</Td>
                <Td className="small-table-text1">$40.06</Td>
                <Td className="small-table-text1">1</Td>
                <Td className="small-table-text1">$40.06</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justifyContent="end" gap="20px" mt="6px">
          <Text
            color="#41454B"
            fontSize="12px"
            className="primary-font-semibold"
          >
            Sub total
          </Text>
          <Text
            fontSize="12px"
            color="rgba(65, 69, 75, 0.80)"
            className="primary-font-semi-bold-italic"
          >
            $83.82
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mt="1em">
          <Text
            color="rgba(65, 69, 75, 0.60)"
            fontSize="12px"
            className="primary-font-semi-bold-italic"
          >
            Coupon Code
          </Text>
          <Text
            fontSize="14px"
            color="#FFA382"
            className="primary-font-semi-bold-italic"
          >
            b32super
          </Text>
        </Flex>

        <Flex justifyContent="space-between" mt="1em">
          <Box>
            <Flex>
              <Text
                color="rgba(65, 69, 75, 0.60)"
                fontSize="12px"
                className="primary-font-semi-bold-italic"
              >
                Use Loyalty Points
              </Text>
              <Text
                color="#FFA382"
                fontSize="12px"
                className="primary-font-regular-italic"
              >
                (1320 pt)
              </Text>
            </Flex>
            <Text
              color="rgba(65, 69, 75, 0.60)"
              fontSize="12px"
              className="primary-font-semi-bold-italic"
            >
              (100pt= <span style={{ color: '#FFA382' }}>$0.10</span>)
            </Text>
          </Box>
          <Text
            fontSize="14px"
            color="#FFA382"
            className="primary-font-semi-bold-italic"
          >
            420 pt
          </Text>
        </Flex>
        <hr style={{ borderTop: '1px dashed #000', marginTop: '10px' }} />
        <Flex justifyContent="space-between" mt="6px">
          <Text
            color="#41454B"
            fontSize="14px"
            className="primary-font-semibold"
          >
            Total Discount
          </Text>
          <Flex gap="5px">
            <Text
              color="#41454B"
              fontSize="16px"
              className="primary-font-semibold"
            >
              $53.00
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" mt="1em">
          <Text
            color="rgba(65, 69, 75, 0.60)"
            fontSize="12px"
            className="primary-font-semi-bold-italic"
          >
            CA Excise Tax
          </Text>
          <Text
            fontSize="12px"
            color="rgba(65, 69, 75, 0.80)"
            className="primary-font-semi-bold-italic"
          >
            $6.56
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mt="10px">
          <Text
            color="rgba(65, 69, 75, 0.60)"
            fontSize="12px"
            className="primary-font-semi-bold-italic"
          >
            CA Sales Tax
          </Text>
          <Text
            fontSize="12px"
            color="rgba(65, 69, 75, 0.80)"
            className="primary-font-semi-bold-italic"
          >
            $8.06
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mt="10px">
          <Text
            color="rgba(65, 69, 75, 0.60)"
            fontSize="12px"
            className="primary-font-semi-bold-italic"
          >
            City of San Jacinto
          </Text>
          <Text
            fontSize="12px"
            color="rgba(65, 69, 75, 0.80)"
            className="primary-font-semi-bold-italic"
          >
            $13.82
          </Text>
        </Flex>
        <hr
          style={{
            borderTop: '1px dashed rgba(65, 69, 75, 0.60)',
            marginTop: '1em',
          }}
        />
        <Flex justifyContent="space-between" mt="6px">
          <Text
            color="#41454B"
            fontSize="12px"
            className="primary-font-semibold"
          >
            Total Tax
          </Text>
          <Flex gap="5px">
            <Text
              color="#41454B"
              fontSize="16px"
              className="primary-font-semibold"
            >
              $29.82
            </Text>
          </Flex>
        </Flex>
        <hr
          style={{
            borderTop: '1px solid rgba(65, 69, 75, 0.60)',
            marginTop: '6px',
          }}
        />
        <Flex justifyContent="end" gap="20px" mt="6px">
          <Text
            color="#41454B"
            fontSize="12px"
            className="primary-font-semibold"
          >
            Grand total
          </Text>
          <Text
            fontSize="12px"
            color="rgba(65, 69, 75, 0.80)"
            className="primary-font-semi-bold-italic"
          >
            $83.82
          </Text>
        </Flex>
        <hr
          style={{
            borderTop: '1px solid rgba(65, 69, 75, 0.60)',
            marginTop: '1em',
          }}
        />
        <Flex justifyContent="space-between" mt="6px">
          <Text
            color="#41454B"
            fontSize="14px"
            className="primary-font-semibold"
          >
            Total Payable
          </Text>
          <Flex gap="5px">
            <Text
              color="#41454B"
              fontSize="16px"
              className="primary-font-semibold"
            >
              $ 550.00
            </Text>
          </Flex>
        </Flex>
        <Flex
          borderBottom="1px solid rgba(65, 69, 75, 0.8)"
          justifyContent="space-between"
          mt="1em"
        >
          <Text
            color="rgba(65, 69, 75, 0.60)"
            fontSize="12px"
            className="primary-font-semi-bold-italic"
          >
            Tips to Budtender
          </Text>
          <Text
            fontSize="12px"
            color="rgba(65, 69, 75, 0.80)"
            className="primary-font-semi-bold-italic"
          >
            $ 1.00
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mt="6px">
          <Text
            color="rgba(65, 69, 75, 0.70)"
            fontSize="14px"
            className="primary-font-semibold"
          >
            Amount Paid By Card
          </Text>
          <Flex gap="5px">
            <Text
              color="#41454B"
              fontSize="16px"
              className="primary-font-semibold"
            >
              $ 550.00
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" mt="6px">
          <Text
            color="#41454B"
            fontSize="14px"
            className="primary-font-semibold"
          >
            Visa Credit
          </Text>
          <Flex gap="5px">
            <Text
              color="#41454B"
              fontSize="16px"
              className="primary-font-semibold"
            >
              12** **** **** **51
            </Text>
          </Flex>
        </Flex>
        <Text
          color="#41454B"
          fontSize="16px"
          mt="5px"
          className="primary-font-semibold"
        >
          Bud-tender Notes/experience
        </Text>
        <Box mt="10px">
          <Text
            color="rgba(18, 23, 30, 0.60)"
            fontSize="12px"
            className="primary-font-semibold"
          >
            Non-refundable products. Non-changeable.
          </Text>
        </Box>
        <Grid mt="10px" justifyContent="center" textAlign="center">
          <Text
            color="#41454B"
            fontSize="14px"
            className="primary-font-semi-bold-italic"
          >
            Thank You For Shopping With Us.
          </Text>
          <Text
            color="#41454B"
            fontSize="14px"
            className="primary-font-semi-bold-italic"
          >
            Please Come Again.
          </Text>
        </Grid>

        <Box h="300px" />
      </Box>
    </Box>
  );
};

export default EmailOrPrintInvoicePage;
