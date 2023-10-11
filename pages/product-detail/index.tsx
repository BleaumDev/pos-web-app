import {
  Box,
  Divider,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  Text,
  Table,
  Th,
  Thead,
  Tr,
  Td,
  Tbody,
  TableContainer,
  Image,
} from '@chakra-ui/react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ProductDetail(): React.ReactNode {
  return (
    <Box
      style={{
        backgroundColor: '#F8FBF8',
        minHeight: '100vh',
      }}
      className="pt-12"
    >
      <Box className="px-14">
        <Heading
          h={5}
          size="lg"
          mb={2}
          className="primary-font-semi-bold-italic whitespace-nowrap"
          color="#41454B"
        >
          Product Details
        </Heading>
      </Box>

      <Divider className="mx-5 mt-4" />

      <Box className="mt-2 px-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-28">
        <Box>
          <FormLabel h={6} className="primary-font-semibold" color="#41454B">
            Product Name
          </FormLabel>
          <Input type="text" borderWidth={2} />
          <Box className="flex-row justify-between items-center mt-2 grid grid-cols-1 sm:grid-cols-2">
            <Box>
              <FormLabel
                h={6}
                className="primary-font-semibold"
                color="#41454B"
              >
                SKU
              </FormLabel>
              <Input
                type="text"
                borderWidth={2}
                className="primary-font-medium"
              />
            </Box>
            <Box className="sm:w-full sm:pl-3 mt-2 sm:mt-0">
              <FormLabel
                h={6}
                className="primary-font-semibold whitespace-nowrap"
                fontWeight={'medium'}
                color="#41454B"
              >
                Unit Of Measure
              </FormLabel>
              <Select
                backgroundColor={'#FFA382'}
                color="white"
                className="primary-font-medium"
              >
                <option value="option1">Grams</option>
                <option value="option2">Kilograms</option>
                <option value="option3">Packets</option>
                <option value="option1">Boxes</option>
                <option value="option2">Containers</option>
              </Select>
            </Box>
          </Box>
          <Box className="flex-row justify-between items-center mt-2 grid grid-cols-1 sm:grid-cols-2">
            <Box className="w-full">
              <FormLabel
                h={6}
                className="primary-font-semibold whitespace-nowrap"
                fontWeight={'medium'}
                color="#41454B"
              >
                Type Of Pricing
              </FormLabel>
              <Select
                backgroundColor={'#FFA382'}
                color={'white'}
                className="primary-font-medium"
              >
                <option value="option1">Complex</option>
                <option value="option2">Regular</option>
              </Select>
            </Box>
            <Box className="sm:pl-3 mt-2 sm:mt-0">
              <FormLabel
                h={6}
                className="primary-font-semibold whitespace-nowrap"
                color="#41454B"
              >
                Quantity Remaining
              </FormLabel>
              <Input
                type="text"
                borderWidth={2}
                className="primary-font-medium"
              />
            </Box>
          </Box>
          <Box className="mt-7">
            <Heading
              h={4}
              className="primary-font-semibold"
              size={'md'}
              color="#41454B"
            >
              Complex Pricing
            </Heading>
            <Box
              paddingLeft={{
                base: 0,
                sm: 25,
              }}
            >
              <Box
                className="rounded-3xl p-3 border-black mt-8 w-full md:w-2/3"
                style={{
                  borderWidth: 1,
                }}
              >
                <TableContainer
                // className="w-60"
                >
                  <Table variant="unstyled" size="sm" autoCapitalize="none">
                    <Thead
                      className=""
                      style={{
                        borderColor: '#41454B',
                        borderBottomWidth: 1,
                      }}
                    >
                      <Tr>
                        <Th
                          h={6}
                          className="primary-font-semibold"
                          fontSize="md"
                          color="#41454B"
                          style={{
                            textTransform: 'none',
                          }}
                        >
                          Weight
                        </Th>
                        <Th
                          className="primary-font-semibold flex justify-center"
                          fontSize={'md'}
                          color="#41454B"
                          style={{
                            textTransform: 'none',
                          }}
                        >
                          Price
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody className="mt-5">
                      <Tr>
                        <Td className="primary-font-medium" fontSize="sm">
                          1g
                        </Td>
                        <Td className="mt-5 w-7">
                          <Box
                            className="rounded-lg px-6 py-2 flex justify-center items-center text-white max-w-min"
                            style={{
                              backgroundColor: '#FFA382',
                            }}
                          >
                            <Text className="primary-font-medium" fontSize="sm">
                              $ 3.00
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td className="primary-font-medium" fontSize="sm">
                          3.5g
                        </Td>
                        <Td>
                          <Box
                            className="rounded-lg px-6 py-2 flex justify-center items-center text-white max-w-min"
                            style={{
                              backgroundColor: '#FFA382',
                            }}
                          >
                            <Text className="primary-font-medium" fontSize="sm">
                              $ 5.00
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td className="primary-font-medium" fontSize="sm">
                          7g
                        </Td>
                        <Td>
                          <Box
                            className="rounded-lg px-6 py-2 flex justify-center items-center text-white max-w-min"
                            style={{
                              backgroundColor: '#FFA382',
                            }}
                          >
                            <Text className="primary-font-medium" fontSize="sm">
                              $ 8.00
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td className="primary-font-medium" fontSize="sm">
                          14g
                        </Td>
                        <Td>
                          <Box
                            className="rounded-lg px-6 py-2 flex justify-center items-center text-white max-w-min"
                            style={{
                              backgroundColor: '#FFA382',
                            }}
                          >
                            <Text className="primary-font-medium" fontSize="sm">
                              $ 21.00
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td className="primary-font-medium" fontSize="sm">
                          28g
                        </Td>
                        <Td>
                          <Box
                            className="rounded-lg px-6 py-2 flex justify-center items-center text-white max-w-min min-w-min"
                            style={{
                              backgroundColor: '#FFA382',
                            }}
                          >
                            <Text className="primary-font-medium" fontSize="sm">
                              $ 40.00
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
            <Box>
              <Heading
                h={4}
                className="primary-font-semibold mt-2"
                size="md"
                color="#41454B"
                fontStyle="normal"
                fontWeight={'normal'}
                fontSize={20}
              >
                Barcode
              </Heading>
              <Image
                src="/images/sample_barcode.png"
                w={171}
                h={67}
                className="mt-5"
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <Box>
            <FormLabel
              h={6}
              className="primary-font-semibold"
              fontWeight="medium"
              color="#41454B"
            >
              Category
            </FormLabel>
            <Select
              backgroundColor="#FFA382"
              color="white"
              className="primary-font-medium"
            >
              <option value="option1">Ices</option>
              <option value="option2">Pre-Rolled</option>
              <option value="option3">Flowers</option>
              <option value="option1">Tablets</option>
              <option value="option2">CBD Products</option>
              <option value="option1">Oil Capsules</option>
              <option value="option2">Oral Sprays</option>
              <option value="option3">Gel</option>
              <option value="option1">Chewable</option>
              <option value="option2">Essential Oil</option>
            </Select>

            <FormLabel
              h={6}
              className="primary-font-semibold mt-2"
              fontWeight="medium"
              color="#41454B"
            >
              Manufacturer
            </FormLabel>
            <Select
              backgroundColor="#FFA382"
              color="white"
              className="primary-font-medium"
            >
              <option value="option1">Cresco Labs</option>
              <option value="option2">Aurora Cannabis Inc.</option>
              <option value="option3">Aphria Inc.</option>
              <option value="option1">VIVO Cannabis Inc.</option>
              <option value="option2">Steep Hill, Inc.</option>
              <option value="option1">Willie's Reserve</option>
              <option value="option2">Terrascend Corp</option>
              <option value="option3">GW Pharmaceuticals</option>
              <option value="option1">Truelieve Cannabis</option>
              <option value="option2">Cannaby Growth Corporation</option>
            </Select>

            <FormLabel
              h={6}
              className="primary-font-semibold mt-2"
              fontWeight="medium"
              color="#41454B"
            >
              Description
            </FormLabel>
            {/* <Input size={'lg'} variant={'filled'} /> */}
            <Textarea />

            <Box className="mt-4">
              <Text className="primary-font-semibold">Inventory Details</Text>
              <Box className="w-full">
                <TableContainer>
                  <Table variant="unstyled" size="sm" autoCapitalize="none">
                    <Tbody>
                      <Tr>
                        <Td
                          className="primary-font-medium"
                          fontSize="sm"
                          color="#41454B"
                        >
                          Production Addition Date
                        </Td>
                        <Td>
                          <Box className="rounded-lg px-6 flex justify-center items-center text-white max-w-min">
                            <Text
                              className="primary-font-medium"
                              color="rgba(65, 69, 75, 0.70)"
                              fontSize="sm"
                            >
                              29.10.2022
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td
                          className="primary-font-medium"
                          fontSize="sm"
                          color="#41454B"
                        >
                          Metrc ID
                        </Td>
                        <Td>
                          <Box className="rounded-lg px-6 flex justify-center items-center text-white max-w-min">
                            <Text
                              className="primary-font-medium"
                              color="rgba(65, 69, 75, 0.70)"
                              fontSize="sm"
                            >
                              3567892
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td
                          className="primary-font-medium"
                          fontSize="sm"
                          color="#41454B"
                        >
                          Initial Quantity
                        </Td>
                        <Td>
                          <Box className="rounded-lg px-6 flex justify-center items-center text-white max-w-min">
                            <Text
                              className="primary-font-medium"
                              color="rgba(65, 69, 75, 0.70)"
                              fontSize="sm"
                            >
                              50g
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td
                          className="primary-font-medium"
                          fontSize="sm"
                          color="#41454B"
                        >
                          Metrc Name
                        </Td>
                        <Td>
                          <Box className="rounded-lg px-6 flex justify-center items-center text-white max-w-min">
                            <Text
                              className="primary-font-medium"
                              color="rgba(65, 69, 75, 0.70)"
                              fontSize="sm"
                            >
                              Choco Hub
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td
                          className="primary-font-medium"
                          fontSize="sm"
                          color="#41454B"
                        >
                          THC
                        </Td>
                        <Td>
                          <Box className="rounded-lg px-6 flex justify-center items-center text-white max-w-min">
                            <Text
                              className="primary-font-medium"
                              color="rgba(65, 69, 75, 0.70)"
                              fontSize="sm"
                            >
                              2%
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td
                          className="primary-font-medium"
                          fontSize="sm"
                          color="#41454B"
                        >
                          1%
                        </Td>
                        <Td>
                          <Box className="rounded-lg px-6 flex justify-center items-center text-white max-w-min min-w-min">
                            <Text
                              className="primary-font-medium"
                              color="rgba(65, 69, 75, 0.70)"
                              fontSize="sm"
                            >
                              $ 40.00
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>
          {/* <Box className="flex-row flex justify-between items-center">
            <Box>
              <FormLabel h={6} className="primary-font-semibold">
                Product Name
              </FormLabel>
              <Input type="text" width={200} borderWidth={2} />
            </Box>
            <Box>
              <FormLabel h={6} className="primary-font-semibold">
                Product Name
              </FormLabel>
              <Input type="text" width={200} borderWidth={2} />
            </Box>
          </Box> */}
        </Box>

        <Box
          // className="flex justify-center items-center border-2 border-purple-600 flex-1"
          // className="border-2 border-red-600"
          style={{
            height: '100%',
          }}
        >
          <Box className="rounded-3xl px-8 py-20 bg-white">
            {/* <Slider {...settings}>
              <Box>
                <h3>1</h3>
              </Box>
              <Box>
                <h3>2</h3>
              </Box>
              <Box>
                <h3>3</h3>
              </Box>
              <Box>
                <h3>4</h3>
              </Box>
              <Box>
                <h3>5</h3>
              </Box>
              <Box>
                <h3>6</h3>
              </Box>
            </Slider> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
