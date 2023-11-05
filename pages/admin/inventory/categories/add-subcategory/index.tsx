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
import LabelledSelect from '@lib/components/inputs/LabelledSelect';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import { useClassContext } from 'context/ClassContext';

export default function AddSubcategory(): React.ReactElement {
  const [subcategoryActive, setSubcategoryActive] = useBoolean(false);
  const { isClassToggled } = useClassContext();

  return (
    <Sidenav>
      <Box
        w="auto"
        left="0"
        right="0"
        width={'100%'}
        className={isClassToggled ? 'toggled-class' : 'default-class'}
        position="fixed"
        pr="2em"
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
              label: 'Add Sub-category',
              breadcrumLink: '/admin/inventory/categories/add-sub-category',
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
          primaryButton
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
        top="8.5em"
        overflowX="hidden"
        overflowY="scroll"
        h="63vh"
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
                  Add Sub-category
                </Heading>
              </Box>
            </Box>
            <Divider
              my="15px"
              w="95%"
              ml="4em"
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
            gap={{ base: 30, md: 250 }}
            columns={{ sm: 2 }}
          >
            <GridItem>
              <LabelledSelect
                options={[
                  { value: '', label: '' },
                  { value: 'Ices', label: 'Ices' },
                  { value: 'Pre-Rolled', label: 'Pre-Rolled' },
                  { value: 'Flowers', label: 'Flowers' },
                  { value: 'Tablets', label: 'Tablets' },
                  { value: 'CBD Products', label: 'CBD Products' },
                  { value: 'Oil Capsules', label: 'Oil Capsules' },
                  { value: 'Oral Sprays', label: 'Oral Sprays' },
                  { value: 'Gel', label: 'Gel' },
                  { value: 'Chewable', label: 'Chewable' },
                  { value: 'Essential Oil', label: 'Essential Oil' },
                ]}
                label="Category Name"
              />
              {/* <LabelledInput
              placeholderText="Sub-category Name"
              label="Black Ice Feminized Seeds"
            /> */}
              <FormLabel
                h={6}
                className="primary-font-semibold mt-2"
                color="#41454B"
              >
                Sub-category Name
              </FormLabel>
              <Input
                type="text"
                borderWidth={2}
                style={{
                  borderColor: 'rgba(18, 23, 30, 0.40)',
                  borderWidth: 0.5,
                }}
                placeholder="Sub-category Name"
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
                    setSubcategoryActive.off();
                  }}
                >
                  <Text
                    color={
                      subcategoryActive ? 'rgba(65, 69, 75, 0.4)' : '#41454B'
                    }
                    className="primary-font-semibold"
                  >
                    Inactive
                  </Text>
                </Box>
                <Box>
                  <Switch
                    size="lg"
                    isChecked={subcategoryActive}
                    onChange={setSubcategoryActive.toggle}
                  />
                </Box>
                <Box
                  as="button"
                  onClick={() => {
                    setSubcategoryActive.on();
                  }}
                >
                  <Text
                    color={
                      !subcategoryActive ? 'rgba(65, 69, 75, 0.4)' : '#41454B'
                    }
                    className="primary-font-semibold"
                  >
                    Active
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
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
                    widthOfDefaultImage="200px"
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
                bottom: 5,
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
                    alt="save"
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
                  alt="save"
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
    </Sidenav>
  );
}
