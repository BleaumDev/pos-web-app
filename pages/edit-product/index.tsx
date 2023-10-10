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
} from '@chakra-ui/react';
import { AddIcon, ChevronLeftIcon } from '@chakra-ui/icons';

export default function ProductDetail(): React.ReactNode {
  return (
    <div
      style={{
        backgroundColor: '#F8FBF8',
        minHeight: '100vh',
      }}
      className="pt-12"
    >
      <div className="flex-row flex px-14">
        <div>
          <ChevronLeftIcon boxSize={30} />
        </div>
        <div>
          <Heading
            h={5}
            size="lg"
            mb={2}
            className="primary-font-semibold whitespace-nowrap"
            color={'#41454B'}
            fontWeight={'normal'}
          >
            Edit Product
          </Heading>
        </div>
      </div>

      <Divider className="mx-5 mt-4" />

      <div className="mt-2 px-5 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 pb-28">
        <div
          className="shadow-2xl rounded-xl py-5 px-10"
          style={{
            borderWidth: 0.2,
            borderColor: 'rgba(18, 23, 30, 0.40)',
            backgroundColor: 'rgba(246, 252, 255, 0.40)',
          }}
        >
          <Text color={'#41454B'} className="primary-font-bold">
            General Information
          </Text>
          <FormLabel
            h={6}
            className="primary-font-semibold mt-7"
            color={'#41454B'}
          >
            Product Name
          </FormLabel>
          <Input
            type="text"
            borderWidth={2}
            style={{
              borderColor: 'rgba(18, 23, 30, 0.40)',
              borderWidth: 0.5,
            }}
          />
          <FormLabel
            h={6}
            className="primary-font-semibold mt-4 font-normal text-md"
            fontWeight={'medium'}
            color={'#41454B'}
          >
            Category
          </FormLabel>
          <Select
            // backgroundColor={'#FFA382'}
            // color={'white'}
            className="primary-font-medium"
            style={{
              borderColor: 'rgba(18, 23, 30, 0.40)',
              borderWidth: 0.5,
            }}
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
            className="primary-font-semibold mt-4"
            fontWeight={'medium'}
            color={'#41454B'}
          >
            Manufacturer
          </FormLabel>
          <Select
            // backgroundColor={'#FFA382'}
            // color={'white'}
            className="primary-font-medium"
            style={{
              borderColor: 'rgba(18, 23, 30, 0.40)',
              borderWidth: 0.5,
            }}
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
            className="primary-font-semibold mt-4"
            fontWeight={'medium'}
            color={'#41454B'}
          >
            Description
          </FormLabel>
          {/* <Input size={'lg'} variant={'filled'} /> */}
          <Textarea
            style={{
              borderColor: 'rgba(18, 23, 30, 0.40)',
              borderWidth: 0.5,
            }}
          />
          <div className="flex-row justify-between items-center mt-4 grid grid-cols-1 sm:grid-cols-2">
            <div>
              <FormLabel
                h={6}
                className="primary-font-semibold"
                color={'#41454B'}
              >
                SKU
              </FormLabel>
              <Input
                type="text"
                borderWidth={2}
                className="primary-font-medium"
              />
            </div>
            <div className="sm:w-full sm:pl-3 mt-4 sm:mt-0">
              <FormLabel
                h={6}
                className="primary-font-semibold whitespace-nowrap"
                fontWeight={'medium'}
                color={'#41454B'}
              >
                Unit Of Measure
              </FormLabel>
              <Select
                // backgroundColor={'#FFA382'}
                // color={'white'}
                className="primary-font-medium"
              >
                <option value="option1">Grams</option>
                <option value="option2">Kilograms</option>
                <option value="option3">Packets</option>
                <option value="option1">Boxes</option>
                <option value="option2">Containers</option>
              </Select>
            </div>
          </div>
          <div className="flex-row justify-between items-center mt-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="w-full">
              <FormLabel
                h={6}
                className="primary-font-semibold whitespace-nowrap"
                fontWeight={'medium'}
                color={'#41454B'}
              >
                Type Of Pricing
              </FormLabel>
              <Select
                // backgroundColor={'#FFA382'}
                // color={'white'}
                className="primary-font-medium"
              >
                <option value="option1">Complex</option>
                <option value="option2">Regular</option>
              </Select>
            </div>
            <div className="sm:pl-3 mt-4 sm:mt-0">
              <FormLabel
                h={6}
                className="primary-font-semibold whitespace-nowrap"
                color={'#41454B'}
              >
                Quantity Remaining
              </FormLabel>
              <Input
                type="text"
                borderWidth={2}
                className="primary-font-medium"
              />
            </div>
          </div>
          <div>
            <Text color={'#41454B'} className="primary-font-bold mt-4">
              Complex Pricing
            </Text>
            <Text
              className="primary-font-semibold mt-4"
              fontSize={'sm'}
              color={'#41454B'}
              h={6}
            >
              How do you want to set your product price?
            </Text>
            <div className="flex-row justify-between items-center mt-4 grid grid-cols-1 sm:grid-cols-2">
              <div className="w-full">
                <FormLabel
                  h={6}
                  className="primary-font-semibold whitespace-nowrap"
                  fontWeight={'medium'}
                  color={'#41454B'}
                >
                  Weight
                </FormLabel>
                <Input
                  type="text"
                  borderWidth={2}
                  className="primary-font-medium"
                />
              </div>
              <div className="sm:pl-3 mt-4 sm:mt-0">
                <FormLabel
                  h={6}
                  className="primary-font-semibold whitespace-nowrap"
                  color={'#41454B'}
                >
                  Price
                </FormLabel>
                <Input
                  type="text"
                  borderWidth={2}
                  className="primary-font-medium"
                />
              </div>
              <Box className="flex-row mt-4">
                <Text h={6} className="primary-font-semibold" color={'#FFA382'}>
                  + Add more
                </Text>
              </Box>
            </div>
          </div>
        </div>
        <div className="flex-col flex-initial">
          <div className="py-5 px-10 h-1/2">
            <Text
              h={4}
              className="primary-font-semibold font-normal whitespace-nowrap"
              fontWeight={400}
              fontSize={20}
              color={'#41454B'}
            >
              Detailed Information
            </Text>
            <FormLabel
              h={6}
              className="primary-font-semibold mt-10 whitespace-nowrap"
              color={'#41454B'}
            >
              Product Addition Date
            </FormLabel>
            <Input
              type="date"
              borderWidth={2}
              style={{
                borderColor: 'rgba(18, 23, 30, 0.40)',
                borderWidth: 0.5,
              }}
            />
            <FormLabel
              h={6}
              className="primary-font-semibold mt-4"
              color={'#41454B'}
            >
              Mtrc Name
            </FormLabel>
            <Input
              type="text"
              borderWidth={2}
              style={{
                borderColor: 'rgba(18, 23, 30, 0.40)',
                borderWidth: 0.5,
              }}
            />
            <div className="flex-row justify-between items-center mt-4 grid grid-cols-1 sm:grid-cols-2">
              <div>
                <FormLabel
                  h={6}
                  className="primary-font-semibold"
                  color={'#41454B'}
                >
                  Metrc ID
                </FormLabel>
                <Input
                  type="text"
                  borderWidth={2}
                  className="primary-font-medium"
                />
              </div>
              <div className="sm:w-full sm:pl-3 mt-4 sm:mt-0">
                <FormLabel
                  h={6}
                  className="primary-font-semibold whitespace-nowrap"
                  fontWeight={'medium'}
                  color={'#41454B'}
                >
                  Initial Quantity
                </FormLabel>
                <Input
                  type="text"
                  borderWidth={2}
                  className="primary-font-medium"
                  placeholder="50g"
                />
              </div>
            </div>
            <div className="flex-row justify-between items-center mt-4 grid grid-cols-1 sm:grid-cols-2">
              <div>
                <FormLabel
                  h={6}
                  className="primary-font-semibold"
                  color={'#41454B'}
                >
                  THC
                </FormLabel>
                <Input
                  type="text"
                  borderWidth={2}
                  className="primary-font-medium"
                  placeholder="2%"
                />
              </div>
              <div className="sm:w-full sm:pl-3 mt-4 sm:mt-0">
                <FormLabel
                  h={6}
                  className="primary-font-semibold whitespace-nowrap"
                  fontWeight={'medium'}
                  color={'#41454B'}
                >
                  CBD
                </FormLabel>
                <Input
                  type="text"
                  borderWidth={2}
                  className="primary-font-medium"
                  placeholder="1%"
                />
              </div>
            </div>
          </div>
          <div className="flex relative h-1/2">
            <div className="absolute bottom-0 right-0 flex flex-row px-10 md:px-0 lg:px-10">
              <div className="mt-20 hidden sm:block">
                <button
                  // as="button"
                  className="px-10 py-3 primary-font-semibold rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255, 138, 67, 0.50)',
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                    }}
                    className="whitespace-nowrap"
                  >
                    Edit product
                  </Text>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-row items-center justify-center pb-10">
        <div className="mr-10">
          <button
            // as="button"
            className="px-10 py-3 primary-font-semibold rounded-xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.20)',
              borderWidth: 0.3,
              borderColor: 'rgba(18, 23, 30, 0.50)',
              alignContent: 'flex-start',
            }}
          >
            <Text
              style={{
                color: 'rgba(18, 23, 30, 0.50)',
              }}
            >
              Cancel
            </Text>
          </button>
        </div>
        <div>
          <button
            // as="button"
            className="px-10 py-3 primary-font-semibold rounded-xl"
            style={{
              backgroundColor: 'rgba(255, 138, 67, 0.50)',
            }}
          >
            <Text
              style={{
                color: 'white',
              }}
            >
              Add product
            </Text>
          </button>
        </div>
      </div>
    </div>
  );
}
