import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Switch,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import LabelledInput from '@lib/components/inputs/labelledInput';

export default function AddCategory(): React.ReactElement {
  const [categoryActive, setCategoryActive] = useBoolean(false);

  return (
    <Box
      style={{
        minHeight: '100vh',
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
              Add Category
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
          <LabelledInput
            placeholderText="Name Your Category"
            label="Category Name"
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
                color={!categoryActive ? 'rgba(65, 69, 75, 0.4)' : '#41454B'}
                className="primary-font-semibold"
              >
                Active
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          style={{
            marginTop: 20,
          }}
        >
          <Text className="primary-font-semibold">Image</Text>
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
  );
}
