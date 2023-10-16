import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';

const categories = ['Capsules', 'Edibles', 'Tinctures', 'Flowers', 'Drinks'];
const manufacturers = [
  'Cresco Labs',
  'Aphira Inc',
  'Steep Hill, INC',
  'Trulieve Canabis',
  'MariMed Inc',
];
const priceRanges = [
  '$0 to $50',
  '$51 to $100',
  '$101 to $150',
  '$151 to $200',
  '$201 to $250',
];

interface BreadcrumbItems {
  label: string;
  href: string;
}

interface FloatingHeaderProps {
  title: string;
  itemCount: string;
  csvImage: string;
  refreshImage: string;
  breadcrumbs: BreadcrumbItems[];
  lastBreadcrumbColor: string;
  simpleSearch?: boolean;
  sortBy?: string;
  productFilter?: boolean;
  addNew: string;
  addBulk: string;
  filter1?: string;
  filter2?: string;
  filterButton?: boolean;
  searchWithFilters?: boolean;
}

const FloatingHeader: React.FC<FloatingHeaderProps> = ({
  title,
  itemCount,
  csvImage,
  refreshImage,
  breadcrumbs,
  lastBreadcrumbColor,
  simpleSearch,
  sortBy,
  addNew,
  addBulk,
  productFilter,
  filter1,
  filter2,
  filterButton,
  searchWithFilters,
}) => {
  return (
    <Box
      background="#ffffff"
      h={{
        base: 'auto',
        md: '200px',
      }}
      mt="-4em"
      zIndex="100"
      mr="20px"
      borderRadius="0px 20px 50px 0px"
    >
      <Box
        display={{
          base: 'grid',
          md: 'flex',
        }}
        w="full"
      >
        <Box
          w={{
            base: '100%',
            md: '50%',
          }}
          m="2em"
        >
          <Flex gap="12px">
            <Text
              fontWeight="400"
              color="#41454B"
              fontSize="16px"
              className="primary-font-semibold"
            >
              {title}
            </Text>
            <Text
              fontWeight="400"
              color="#FF8A43"
              mt="4px"
              fontSize="12px"
              className="primary-font-extraBold"
            >
              {itemCount}
            </Text>
          </Flex>
          <Breadcrumb
            spacing="4px"
            separator={<ChevronRightIcon color="#000000" />}
          >
            {breadcrumbs?.map((breadcrumb, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={breadcrumb.href}>
                  {index === breadcrumbs.length - 1 ? (
                    <Text
                      color={lastBreadcrumbColor}
                      fontSize="13px"
                      className="primary-font-semi-bold-italic"
                    >
                      {breadcrumb.label}
                    </Text>
                  ) : (
                    breadcrumb.label
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          {searchWithFilters && (
            <Flex gap="20px" mt="2em">
              <Flex>
                <Select
                  placeholder="Products"
                  w="100px"
                  borderRadius="4px 0px 0px 4px"
                >
                  <option value="Flower">Flower</option>
                  <option value="Capsules">Capsules</option>
                  <option value="All">All</option>
                </Select>
                <Input
                  placeholder="Search here ..."
                  background="#E9F0F8"
                  className="primary-font-medium"
                  fontSize="12px"
                  h="40px"
                  w="332px"
                  _placeholder={{
                    color: '#41454B',
                  }}
                  color="#41454B"
                  borderRadius="0px 4px 4px 0"
                />
              </Flex>
              <Box cursor="pointer">
                <Image
                  src="/images/search-orange.png"
                  width={10}
                  height={10}
                  alt="logo"
                />
              </Box>
            </Flex>
          )}
          {simpleSearch && (
            <Flex gap="20px" mt="2em">
              <Input
                placeholder="Search here by SKU or Product Name"
                background="#E9F0F8"
                className="primary-font-medium"
                fontSize="12px"
                h="40px"
                w="332px"
                _placeholder={{
                  color: '#41454B',
                }}
                color="#41454B"
                borderRadius="4px"
              />
              <Box cursor="pointer">
                <Image
                  src="/images/search-orange.png"
                  width={10}
                  height={10}
                  alt="logo"
                />
              </Box>
            </Flex>
          )}
        </Box>
        <Box
          w={{
            base: '100%',
            md: '50%',
          }}
          m="2em"
        >
          <Flex
            justifyContent={{
              base: 'start',
              md: 'end',
            }}
            gap="10px"
          >
            <Button
              display="flex"
              background="transparent"
              borderRadius="4px"
              border="1px solid #41454B"
              color="#41454B"
              fontSize="12px"
              className="primary-font-medium"
              _hover={{
                background: 'transparent',
              }}
              gap="10px"
            >
              <Image
                src="/images/add-bulk.png"
                alt="refresh-circle"
                w="15px"
                cursor="pointer"
                h="15px"
              />
              Add Bulk {addBulk}
            </Button>
            <Button
              display="flex"
              background=" linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)"
              borderRadius="4px"
              color="#ffffff"
              fontSize="12px"
              className="primary-font-medium"
              _hover={{
                background:
                  'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
              }}
              gap="10px"
            >
              <Image
                src="/images/plus-square.png"
                alt="refresh-circle"
                w="15px"
                cursor="pointer"
                h="15px"
              />
              Add New {addNew}
            </Button>
            <Image
              src={refreshImage}
              alt="refresh-circle"
              w="38px"
              cursor="pointer"
              h="38px"
            />
            <Image
              src={csvImage}
              alt="csv-file"
              w="38px"
              cursor="pointer"
              h="38px"
            />
          </Flex>
          <Flex
            justifyContent={{
              base: 'start',
              md: 'end',
            }}
            mt="2em"
            gap="10px"
          >
            {productFilter && (
              <>
                <Select placeholder="Category">
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
                <Select placeholder="Manufacturers">
                  {manufacturers.map((manufacturer) => (
                    <option key={manufacturer} value={manufacturer}>
                      {manufacturer}
                    </option>
                  ))}
                </Select>
                <Select placeholder="Price">
                  {priceRanges.map((priceRange) => (
                    <option key={priceRange} value={priceRange}>
                      {priceRange}
                    </option>
                  ))}
                </Select>
              </>
            )}
            {filterButton && (
              <Flex textAlign="center" alignItems="center" gap="10px">
                <Button
                  display="flex"
                  background="#E9F0F8"
                  borderRadius="4px"
                  height="24px"
                  color="#41454B"
                  fontSize="12px"
                  gap="5px"
                  className="primary-font-regular-italic"
                >
                  All
                  <Image
                    src="/images/close-circle.png"
                    alt="refresh-circle"
                    w="12px"
                    cursor="pointer"
                    h="12px"
                  />
                </Button>
                <Button
                  display="flex"
                  background="#E9F0F8"
                  borderRadius="4px"
                  height="24px"
                  color="#41454B"
                  fontSize="12px"
                  gap="5px"
                  className="primary-font-regular-italic"
                >
                  {filter1}
                  <Image
                    src="/images/close-circle.png"
                    alt="refresh-circle"
                    w="12px"
                    cursor="pointer"
                    h="12px"
                  />
                </Button>
                <Button
                  display="flex"
                  background="#E9F0F8"
                  borderRadius="4px"
                  height="24px"
                  color="#41454B"
                  fontSize="12px"
                  gap="5px"
                  className="primary-font-regular-italic"
                >
                  {filter2}

                  <Image
                    src="/images/close-circle.png"
                    alt="refresh-circle"
                    w="12px"
                    cursor="pointer"
                    h="12px"
                  />
                </Button>
              </Flex>
            )}
            <Image
              src={sortBy}
              alt="sortBy"
              w="38px"
              cursor="pointer"
              h="38px"
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default FloatingHeader;
