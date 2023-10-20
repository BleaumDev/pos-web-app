// eslint-disable-next-line simple-import-sort/imports
import {
  Box,
  Checkbox,
  Flex,
  Select,
  Table as ChakraTable,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import React, { useMemo, useState, type FC } from 'react';

interface TableProps {
  headers: string[];
  rows: React.ReactNode[][];
  isLoading?: boolean;
  checkboxes?: boolean;
  hoverEffect?: boolean;
}

// the table component will be used in many pages, so we need to make it reusable and dynamic not strict to certain data schema. so we will generate the keys dynamically.
const generateKeys = (rows: number, cells: number): string[][] => {
  const keys = [];
  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; j < cells; j += 1) {
      row.push(nanoid());
    }
    keys.push(row);
  }
  return keys;
};

const PageNumber: FC<{
  n: React.ReactNode;
  current?: boolean;
  disable?: boolean;
  onClick?: () => void;
}> = ({ n, current, disable, onClick }) => {
  let tagColor = 'gray.300';
  let tagBg = 'white';
  let clickable = onClick;
  let hover: undefined | {} = { bg: 'gray.300', color: 'white' };

  if (current) {
    tagColor = 'white';
    tagBg = '#FFA382';
    hover = undefined;
  } else if (disable) {
    tagBg = 'gray.300';
    tagColor = 'gray.500';
    clickable = undefined;
  }

  return (
    <Tag
      color={tagColor}
      bg={tagBg}
      boxShadow={disable ? 'none' : '0px 4px 4px rgba(0, 0, 0, 0.04)'}
      rounded="lg"
      w="32px"
      pt="5px"
      h="32px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      _hover={hover}
      onClick={clickable}
      className="pagination-tag"
      data-aria-current={current}
      data-aria-disabled={disable}
    >
      {n}
    </Tag>
  );
};

export const ArrowKey: FC<{
  dir?: 'left' | 'right' | 'up' | 'down';
  color?: string;
}> = ({ dir, color }) => {
  let deg;
  switch (dir) {
    case 'left':
      deg = '180deg';
      break;
    case 'right':
      deg = '0';
      break;
    case 'up':
      deg = '270deg';
      break;
    case 'down':
      deg = '90deg';
      break;
    default:
      deg = '0';
  }
  return (
    <Box display="inline-block" transform={`rotate(${deg})`}>
      <svg
        width="4"
        height="12"
        viewBox="0 0 4 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 11V11C3.8374 8.07825 3.8374 3.92175 1.5 1V1"
          stroke={color || 'currentColor'}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

const TablePage: FC<TableProps> = ({
  headers,
  rows,
  isLoading,
  checkboxes,
  hoverEffect,
}) => {
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(rows.length / pageSize);
  const [selectedRows, setSelectedRows] = useState(new Set<number>());
  const [selectAll, setSelectAll] = useState(false);
  const handleRowSelect = (rowIndex: number) => {
    if (selectedRows.has(rowIndex)) {
      selectedRows.delete(rowIndex);
    } else {
      selectedRows.add(rowIndex);
    }
    setSelectedRows(new Set(selectedRows));
  };

  const handleToggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set<number>());
    } else {
      const allRows = Array.from({ length: rows.length }, (_, i) => i);
      setSelectedRows(new Set(allRows));
    }
    setSelectAll(!selectAll);
  };

  // paginated rows
  const paginatedRows = useMemo(() => {
    const start = pageSize * (currentPage - 1);
    const end = start + pageSize;
    return rows.slice(start, end);
  }, [rows, pageSize, currentPage, totalPages]);

  const keys = useMemo(
    () => generateKeys(rows.length, headers.length),
    [rows, headers]
  );
  const rowsKeys = useMemo(() => {
    const rK = [];
    for (let i = 0; i < rows.length; i += 1) {
      rK.push(nanoid());
    }
    return rK;
  }, []);
  return (
    <Box>
      <TableContainer
        background="#F8FBF8"
        padding={{ base: '1em', md: '1em' }}
        borderRadius="12px"
        border="0.3px solid rgba(18, 23, 30, 0.30)"
        css={{
          '&::-webkit-scrollbar': {
            height: '10px',
            width: '10px',
            borderRadius: '9999px',
            display: 'block',
          },
          '&::-webkit-scrollbar-track': {
            borderRadius: '9999px',
            background: 'rgb(239, 239, 239, 0.8)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#FFA382 !important',
            borderRadius: '9999px',
            height: '10px',
            width: '10px',
            display: 'block',
          },
        }}
      >
        <ChakraTable
          style={{
            borderCollapse: 'separate',
            borderSpacing: '0 8px',
          }}
        >
          <Thead borderBottom="2px solid #41454BB2" textTransform="capitalize">
            <Tr>
              {checkboxes && (
                <Th>
                  <Checkbox
                    isChecked={selectAll}
                    onChange={handleToggleSelectAll}
                  />
                </Th>
              )}
              {headers.map((header) => (
                <Th
                  key={header}
                  color="#41454B"
                  fontSize="14px"
                  fontWeight="400"
                  textAlign="center"
                  pb={8}
                  px={5}
                  className="primary-font-semibold"
                >
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {!paginatedRows.length && !isLoading && (
              <Tr>
                <Td
                  fontSize="20px"
                  textAlign="center"
                  colSpan={headers.length}
                  color="rgba(65, 69, 75, 0.7)"
                  className="primary-font-extraBold"
                >
                  No data found
                </Td>
              </Tr>
            )}
            {paginatedRows.map((row, i) => (
              <Tr
                key={rowsKeys[i]}
                bg="#ffffff"
                color="rgba(65, 69, 75, 0.7)"
                borderRadius="12px !important"
                h="46px"
                cursor="pointer"
                {...(hoverEffect
                  ? {
                      _hover: {
                        borderLeft: '12px solid #FFA382',
                        color: '#000000',
                        bg: '#FFFBF6',
                        borderRadius: '12px',
                      },
                    }
                  : {})}
                style={{ marginBottom: '16px' }}
              >
                {checkboxes && (
                  <Td>
                    <Checkbox
                      isChecked={selectedRows.has(i)}
                      onChange={() => handleRowSelect(i)}
                    />
                  </Td>
                )}
                {row.map((cell, j) => (
                  <Td
                    w="auto"
                    key={keys[i][j]}
                    fontSize="16px"
                    id="img_col"
                    textAlign="center"
                    className="primary-font-medium"
                  >
                    {cell}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      </TableContainer>
      <Box mt="1em">
        <Flex justifyContent="space-between" align="center">
          <Flex color="#41454BB2" align="center" gap={3}>
            <Text w="110px">Rows per page </Text>
            <Select
              w="70px"
              value={pageSize}
              icon={<ArrowKey dir="down" />}
              border="none"
              rounded="xl"
              className="primary-font-semibold"
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              <option value={3}>3</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </Select>
          </Flex>
          {/* pages pagination */}
          {/* <Text id="table-pagination-results">
                showing {pageSize * (currentPage - 1) + 1}-
                {pageSize * currentPage > rows.length
                  ? rows.length
                  : pageSize * currentPage}{' '}
                of {rows.length} results
              </Text> */}
          <Box>
            {totalPages > 20 ? (
              <Flex gap={10}>
                <PageNumber
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disable={currentPage === 1}
                  n={<ArrowKey dir="left" />}
                />
                {/* if we are at the last page display the option to go to page 1,2 */}
                {currentPage >= totalPages - 1 ? (
                  <>
                    <PageNumber n={1} onClick={() => setCurrentPage(1)} />
                    <PageNumber n={2} onClick={() => setCurrentPage(2)} />
                  </>
                ) : (
                  <>
                    {currentPage + 1 === totalPages - 1 && (
                      <PageNumber
                        n={currentPage - 1}
                        disable={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage - 1)}
                      />
                    )}
                    <PageNumber n={currentPage} current />
                    {/* at this condition the `current page + 1` aka the next page will be the same as the page before the last page so we don't want to have double page tags */}
                    {currentPage + 1 !== totalPages - 1 && (
                      <PageNumber
                        n={currentPage + 1}
                        disable={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                      />
                    )}
                  </>
                )}
                <PageNumber
                  onClick={() => setCurrentPage(totalPages - 1)}
                  current={totalPages - 1 === currentPage}
                  n={totalPages - 1}
                />
                <PageNumber
                  onClick={() => setCurrentPage(totalPages)}
                  current={totalPages === currentPage}
                  n={totalPages}
                />
                <PageNumber
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disable={currentPage === totalPages}
                  n={<ArrowKey dir="right" />}
                />
              </Flex>
            ) : (
              <Flex gap={1}>
                <Box onClick={() => setCurrentPage(currentPage - 1)}>
                  <img src="/images/prev.png" alt="" className="pag-button" />
                </Box>
                {[...Array(totalPages)].map((_, i) => (
                  <PageNumber
                    key={nanoid()}
                    n={i + 1}
                    current={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  />
                ))}
                <Box onClick={() => setCurrentPage(currentPage + 1)}>
                  <img src="/images/next.png" alt="" className="pag-button" />
                </Box>
              </Flex>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TablePage;
