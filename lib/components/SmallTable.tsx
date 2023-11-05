/* eslint-disable react/no-array-index-key */
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

interface SmallTableProps {
  header: string[];
  rows: string[][];
}

const SmallTable: React.FC<SmallTableProps> = ({ header, rows }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {header.map((item, index) => (
              <Th key={index} className="small-table-text">
                {item}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex} className="small-table-text1">
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SmallTable;
