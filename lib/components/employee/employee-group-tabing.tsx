import {
  Box,
  Flex,
  Image,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Button from '../base/button';
import EmployeesList from './employees-list';
import PermissionsPage from './permissions';

const EmployeeGroupTabing = () => {
  return (
    <>
      <Tabs isLazy mt="2em" position="relative">
        <TabList>
          <Tab fontSize="12px !important">Employees</Tab>
          <Tab fontSize="12px !important">Permissions</Tab>
        </TabList>
        <Flex gap="12px" mt="2em" mx="1em">
          <Input
            placeholder="Search here..."
            background="#E9F0F8"
            className="primary-font-semibold"
            fontSize="12px"
            h="30px"
            w={{
              base: '250px',
              md: '332px',
            }}
            _placeholder={{
              color: '#41454B',
            }}
            color="#41454B"
            borderRadius="4px"
          />
          <Box cursor="pointer">
            <Image
              src="/images/search-orange.png"
              width={7}
              height={7}
              alt="logo"
            />
          </Box>
        </Flex>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <EmployeesList />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <PermissionsPage />
          </TabPanel>
        </TabPanels>
        <Button
          styledVariant="orange"
          position="absolute"
          borderRadius="3px"
          className="primary-font-regular-italic"
          height="27px"
          w="128px"
          top="1px"
          fontSize="12px"
          right="1px"
        >
          Add Employee{' '}
        </Button>
      </Tabs>
    </>
  );
};

export default EmployeeGroupTabing;
