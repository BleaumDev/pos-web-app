import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  FormLabel,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Switch,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Input from '@lib/components/base/input';
import UploadSingleImage from '@lib/components/base/upload-single-image';
import { useClassContext } from 'context/ClassContext';

export default function AddCategory(): React.ReactElement {
  const [categoryActive, setCategoryActive] = useBoolean(false);
  const { isClassToggled } = useClassContext();

  return (
    <>
      <Box
        w="auto"
        left="0"
        right="0"
        width={'100%'}
        className={isClassToggled ? 'toggled-class' : 'default-class'}
        pr="2em"
        zIndex={2}
      >
        <FloatingHeader
          title="Categories"
          itemCount="12+ Categories"
          csvImage
          refreshImage
          sortBy
          lastBreadcrumbColor="#FF8A43"
          breadcrumbs={[
            {
              label: 'Home',
              breadcrumLink: '/admin/inventory/categories',
            },
            {
              label: 'Inventory',
              breadcrumLink: '/admin/inventory/categories',
            },
            {
              label: 'Categories',
              breadcrumLink: '/admin/inventory/categories',
            },
            {
              label: 'Add Category',
              breadcrumLink: '/admin/inventory/categories/add-category',
            },
          ]}
          searchWithFilters
          searchWithFiltersPlaceholder="Products"
          searchWithFilterOptions={[
            {
              label: 'Flowers',
            },
            {
              label: 'Capsules',
            },
          ]}
          filterButton
          addNew="Category"
          addBulk="Categories"
          addButtons
          filter1="Flowers"
          filter2="Capsules"
        />
      </Box>
      <Box
        p="2em 2em 4em 2em"
        position="relative"
        top={{
          base: '0em',
          md: '8.5em',
        }}
        overflowX="hidden"
        overflowY="scroll"
        h="63vh"
        zIndex={1}
      >
        <Box
          borderRadius="14px"
          paddingBottom={20}
          paddingTop={10}
          backgroundColor="white"
        >
          <Box
            style={{
              flex: 'column',
            }}
          >
            <Box className="flex-row flex px-14">
              <Box as="button">
                <ChevronLeftIcon boxSize={30} />
              </Box>
              <Box>
                <Heading
                  h={5}
                  size="lg"
                  mb={2}
                  className="primary-font-medium whitespace-nowrap"
                  color="#41454B"
                  fontWeight="normal"
                >
                  Add Category
                </Heading>
              </Box>
            </Box>
            <Divider
              my="15px"
              w="95%"
              ml={{
                base: '1em',
                md: '4em',
              }}
              borderColor="rgba(18, 23, 30, 0.4)"
            />
          </Box>
          <SimpleGrid
            style={{
              marginTop: 20,
              display: 'grid',
              width: '100%',
              paddingLeft: 60,
              paddingRight: 60,
            }}
            gap={{ base: 30, md: 200 }}
            columns={{ sm: 2 }}
          >
            <GridItem>
              {/* <LabelledInput
              placeholderText="Name Your Category"
              label="Category Name"
            /> */}
              <FormLabel
                h={6}
                className="primary-font-semibold"
                color="#41454B"
              >
                Category Name
              </FormLabel>
              <Input
                type="text"
                borderWidth={2}
                style={{
                  borderColor: 'rgba(18, 23, 30, 0.40)',
                  borderWidth: 0.5,
                }}
                placeholder="Name Your Category"
              />
              <Box
                style={{
                  marginTop: 10,
                }}
              >
                <Text className="primary-font-semibold" style={{}}>
                  Status
                </Text>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: 200,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 15,
                }}
              >
                <Box
                  as="button"
                  onClick={() => {
                    setCategoryActive.off();
                  }}
                >
                  <Text
                    color={categoryActive ? 'rgba(65, 69, 75, 0.4)' : '#41454B'}
                    className="primary-font-semibold"
                  >
                    Inactive
                  </Text>
                </Box>
                <Box>
                  <Switch
                    size="lg"
                    isChecked={categoryActive}
                    onChange={setCategoryActive.toggle}
                  />
                </Box>
                <Box
                  as="button"
                  onClick={() => {
                    setCategoryActive.on();
                  }}
                >
                  <Text
                    color={
                      !categoryActive ? 'rgba(65, 69, 75, 0.4)' : '#41454B'
                    }
                    className="primary-font-semibold"
                  >
                    Active
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem
            // style={{
            //   marginTop: 20,
            // }}
            >
              <Box
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box>
                  <FormLabel
                    h={6}
                    className="primary-font-semibold"
                    color="#41454B"
                  >
                    Image
                  </FormLabel>
                  <UploadSingleImage
                    widthSelectedImage="164px"
                    heightSelectedImage="136px"
                    widthOfDefaultImage="164px"
                    defaultImage="/images/upload-Image.png"
                    addButton
                  />
                </Box>
              </Box>
            </GridItem>
            <Box
              display={{ base: 'none', sm: 'block' }}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 70,
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: 8,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#FF8A43',
                  paddingRight: 40,
                  paddingLeft: 40,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <Box>
                  <Image
                    src="/images/save.svg"
                    style={{
                      // alignSelf: 'center',
                      width: 16,
                      height: 16,
                      // marginBottom: 5,
                    }}
                    alt="pos"
                  />
                </Box>
                <Box>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 7,
                    }}
                    className="primary-font-semibold"
                  >
                    Save
                  </Text>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
          <Box
            display={{ base: 'block', sm: 'none', md: 'none' }}
            style={{
              // display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 8,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#FF8A43',
                paddingRight: 40,
                paddingLeft: 40,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <Box>
                <Image
                  src="/images/save.svg"
                  style={{
                    // alignSelf: 'center',
                    width: 16,
                    height: 16,
                    // marginBottom: 5,
                  }}
                  alt="pos"
                />
              </Box>
              <Box>
                <Text
                  style={{
                    color: 'white',
                    marginLeft: 7,
                  }}
                  className="primary-font-semibold"
                >
                  Save
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
