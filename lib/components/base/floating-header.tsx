import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Flex,
  Image,
  Img,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

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
  breadcrumLink: string;
}

interface FloatingHeaderProps {
  title?: string;
  itemCount?: string;
  csvImage?: string;
  refreshImage?: string;
  breadcrumbs?: BreadcrumbItems[];
  lastBreadcrumbColor?: string;
  simpleSearch?: boolean;
  sortBy?: boolean;
  productFilter?: boolean;
  addButtons?: boolean;
  addNew?: string;
  addBulk?: string;
  filter1?: string;
  filter2?: string;
  filterButton?: boolean;
  searchWithFilters?: boolean;
  addLink?: string;
  productDetail?: boolean;
  editDetail?: boolean;
  editLink?: string;
  printImage?: boolean;
  cancelLink?: string;
  confirmLink?: string;
  primaryButton?: boolean;
  secondaryButton?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
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
  addButtons,
  addNew,
  productDetail,
  addBulk,
  productFilter,
  filter1,
  filter2,
  printImage,
  filterButton,
  searchWithFilters,
  addLink,
  editDetail,
  editLink,
  confirmLink,
  cancelLink,
  primaryButton,
  secondaryButton,
  primaryLabel,
  secondaryLabel,
}) => {
  const constructedHref = `/${addLink}`;
  const constructedHref1 = `/${editLink}`;
  const constructedHref2 = `/${cancelLink}`;
  const constructedHref3 = `/${confirmLink}`;
  return (
    <Box
      background="#ffffff"
      h={{
        base: 'auto',
        md: 'auto',
      }}
      mt="-4em"
      pb="1em"
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
                <Link href={breadcrumb.breadcrumLink}>
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
                </Link>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          {editDetail && (
            <Link href={constructedHref1}>
              <Button
                p="10px 18px"
                mt="1.5em"
                className="primary-font-semibold"
                color="#fff"
                fontSize="12px"
                bg="linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)"
                borderRadius="7px"
                _hover={{
                  bg: 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                }}
              >
                <Img src="/images/edit.png" mr="5px" w="16px" />
                Edit Details
              </Button>
            </Link>
          )}
          {productDetail && (
            <Flex mt="1.5em" gap="10px">
              <Link href={constructedHref2}>
                <Button
                  p="10px 40px"
                  className="primary-font-semibold"
                  color="rgba(18, 23, 30, 0.50)"
                  fontSize="12px"
                  bg="transparent"
                  border="0.3px solid rgba(18, 23, 30, 0.50)"
                  borderRadius="7px"
                  _hover={{
                    bg: 'transparent',
                  }}
                >
                  Cancel
                </Button>
              </Link>
              <Link href={constructedHref3}>
                <Button
                  p="10px 40px"
                  className="primary-font-semibold"
                  color="#fff"
                  fontSize="12px"
                  bg="#FF8A43"
                  border="2px solid #FFD8C0;"
                  borderRadius="7px"
                  _hover={{
                    bg: '#FF8A43',
                  }}
                >
                  Confirm Edit
                </Button>
              </Link>
            </Flex>
          )}
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
            gap="5px"
          >
            {primaryButton && (
              <Box
                as="button"
                boxShadow="2xl"
                bg="linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)"
                style={{
                  // width: 134,
                  // height: 31,
                  paddingLeft: 18,
                  paddingRight: 18,
                  paddingTop: 10,
                  paddingBottom: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                  flexDirection: 'row',
                }}
              >
                <Box
                  style={{
                    borderRadius: 4,
                    borderColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 2,
                    padding: 4,
                  }}
                >
                  <AddIcon color="white" boxSize={2} />
                </Box>
                <Text
                  className="primary-font-semibold"
                  fontSize={14}
                  color="white"
                  fontWeight="medium"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  {primaryLabel}
                </Text>
              </Box>
            )}
            {addButtons && (
              <>
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
                <Link href={constructedHref}>
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
                </Link>
              </>
            )}
            <Image
              src={refreshImage}
              alt="refresh-circle"
              w="38px"
              cursor="pointer"
              h="38px"
            />
            {printImage && (
              <Image
                src="/images/print.png"
                alt="refresh-circle"
                w="38px"
                cursor="pointer"
                h="38px"
              />
            )}
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
                {secondaryButton && (
                  <Box
                    as="button"
                    boxShadow="2xl"
                    style={{
                      width: 134,
                      height: 31,
                      backgroundColor: '#FF8A43',
                      padding: 8,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 3,
                    }}
                  >
                    <Text
                      className="primary-font-semibold"
                      fontSize={12}
                      color="white"
                      fontWeight="medium"
                    >
                      + {secondaryLabel}
                    </Text>
                  </Box>
                )}
              </Flex>
            )}
            {sortBy && (
              <Image
                src="/images/sortBy.png"
                alt="sortBy"
                w="38px"
                cursor="pointer"
                h="38px"
              />
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default FloatingHeader;
