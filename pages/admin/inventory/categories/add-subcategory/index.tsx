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
import GalleryAdd from '@lib/components/inputs/GalleyAdd';
import LabelledSelect from '@lib/components/inputs/LabelledSelect';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';

export default function AddSubcategory(): React.ReactElement {
  const [subcategoryActive, setSubcategoryActive] = useBoolean(false);

  return (
    <Sidenav>
      <Box position="relative" mt="0em" w="auto">
        <FloatingHeader
          title="Categories"
          itemCount="12+ Categories"
          csvImage="/images/csv-file.png"
          refreshImage="/images/refresh-circle.png"
          lastBreadcrumbColor="#FF8A43"
          breadcrumbs={[
            {
              label: 'Home',
              breadcrumLink: '/admin/inventory/products',
            },
            {
              label: 'Categories',
              breadcrumLink: '/categories/',
            },
          ]}
          searchWithFilters
          filterButton
          addNew="Manufacturer"
          addButtons
          addBulk="Manufacturers"
          filter1="Cresco Labs"
          filter2="Aphria Inc."
        />
      </Box>
      <Box
        style={{
          minHeight: '100vh',
          marginLeft: 19,
          borderRadius: 14,
          marginTop: 20,
        }}
        paddingTop={20}
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
          <Divider className="mx-5 mt-4" />
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
              <Text className="primary-font-medium" style={{}}>
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
                <GalleryAdd />
              </Box>
              <Box
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                  paddingTop: 12,
                  paddingBottom: 12,
                  borderRadius: 8,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 100,
                }}
                as="button"
                bgGradient="linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)"
              >
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  {/* <Image
                    src="/images/gallery-add.svg"
                    style={{
                      width: 16,
                      height: 16,
                      marginRight: 10,
                      // backgroundColor: 'white',
                    }}
                    color={'white'}
                  /> */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 46 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      marginRight: 10,
                      marginTop: 2,
                    }}
                  >
                    <path
                      d="M17.375 18.7501C19.4461 18.7501 21.125 17.0712 21.125 15.0001C21.125 12.9291 19.4461 11.2501 17.375 11.2501C15.3039 11.2501 13.625 12.9291 13.625 15.0001C13.625 17.0712 15.3039 18.7501 17.375 18.7501Z"
                      stroke="#FFFFFF"
                      stroke-width="2.8125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.875 3.75012H17.375C8 3.75012 4.25 7.50012 4.25 16.8751V28.1251C4.25 37.5001 8 41.2501 17.375 41.2501H28.625C38 41.2501 41.75 37.5001 41.75 28.1251V18.7501"
                      stroke="#FFFFFF"
                      stroke-width="2.8125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M30.0312 9.37512H40.3438"
                      stroke="#FFFFFF"
                      stroke-width="2.8125"
                      stroke-linecap="round"
                    />
                    <path
                      d="M35.1875 14.5314V4.21887"
                      stroke="#FFFFFF"
                      stroke-width="2.8125"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.50586 35.5314L14.7496 29.3252C16.2309 28.3314 18.3684 28.4439 19.6996 29.5877L20.3184 30.1314C21.7809 31.3877 24.1434 31.3877 25.6059 30.1314L33.4059 23.4377C34.8684 22.1814 37.2309 22.1814 38.6934 23.4377L41.7496 26.0627"
                      stroke="#FFFFFF"
                      stroke-width="2.8125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <Text
                    style={{
                      color: 'white',
                    }}
                    className="primary-font-semibold"
                  >
                    Add Image
                  </Text>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <Box
            display={{ base: 'none', sm: 'block' }}
            style={{
              position: 'absolute',
              bottom: 40,
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
    </Sidenav>
  );
}
