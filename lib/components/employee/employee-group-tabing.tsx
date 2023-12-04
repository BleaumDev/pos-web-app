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
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../base/button';
import EmployeesList from './employees-list';
import PermissionsPage from './permissions';

const EmployeeGroupTabing = () => {
  const { colorMode } = useColorMode();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <Tabs
        isLazy
        mt="2em"
        position="relative"
        index={activeTab}
        onChange={handleTabChange}
      >
        <TabList>
          <Tab
            fontSize="12px !important"
            className="primary-font-semi-bold-italic"
            color="rgba(65, 69, 75, 0.50)"
            _selected={{
              color: colorMode === 'light' ? '#FF8A43' : 'gray.800',
              borderBottom:
                colorMode === 'light'
                  ? '2px solid #FF8A43'
                  : '2px solid teal.500',
            }}
          >
            Employees
          </Tab>
          <Tab
            fontSize="12px !important"
            color="rgba(65, 69, 75, 0.50)"
            className="primary-font-semi-bold-italic"
            _selected={{
              color: colorMode === 'light' ? '#FF8A43' : 'gray.800',
              borderBottom:
                colorMode === 'light'
                  ? '2px solid #FF8A43'
                  : '2px solid teal.500',
            }}
          >
            Permissions
          </Tab>
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
          <TabPanel>
            <EmployeesList />
            {activeTab === 0 && (
              <Link href="/admin/employee/employee-groups/add-employee">
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
                  Add Employee
                </Button>
              </Link>
            )}
          </TabPanel>
          <TabPanel>
            <PermissionsPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default EmployeeGroupTabing;
