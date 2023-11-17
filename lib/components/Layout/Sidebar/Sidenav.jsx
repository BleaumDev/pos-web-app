import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Image,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useClassContext } from 'context/ClassContext.tsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

const Sidenav = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure(true, 'isOpen');
  const { toggleClass } = useClassContext();
  const { isOpen: isInventoryOpen, onToggle: onInventoryToggle } =
    useDisclosure('isInventoryOpen');

  const { isOpen: isEmployeeOpen, onToggle: onEmployeeToggle } =
    useDisclosure('isEmployeeOpen');

  const { isOpen: isSettingOpen, onToggle: onSettingToggle } =
    useDisclosure('isSettingOpen');

  const router = useRouter();
  const isActive = (path) => {
    return router.pathname === path;
  };

  const isRouteInventory = router.pathname.startsWith('/admin/inventory');
  const isRouteAccessManagement = router.pathname.startsWith('/admin/employee');
  const isRouteSettings = router.pathname.startsWith('/admin/settings');
  const isRouteCustomers = router.pathname.startsWith('/admin/customers');

  return (
    <Flex>
      <Box position={'fixed'} w={'full'} top={'0px'} zIndex={9999}>
        <Navbar />
      </Box>
      <Box
        display={{
          base: 'none',
          md: 'block',
        }}
        w={!isOpen ? '250px' : '70px'}
        minH={!isOpen ? '100vh' : '100vh'}
        bg="#ffffff"
        p={!isOpen ? '2em 0em 2em 2em' : '2em 1em 1em 1em'}
        zIndex={10}
        position="fixed"
        left="0"
        top="6em"
        transition="width 0.3s ease-in-out"
      >
        {!isOpen ? (
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={() => {
              onToggle();
              toggleClass();
            }}
            position={'absolute'}
            background={'#ffffff'}
            boxShadow={'2px 1px 35px -11px rgba(0,0,0,0.75)'}
            right={'-20px'}
            borderRadius={'50%'}
            zIndex={9999}
            aria-label="Collapse Sidebar"
          />
        ) : (
          <IconButton
            icon={<ChevronRightIcon />}
            borderRadius={'50%'}
            boxShadow={'2px 1px 35px -11px rgba(0,0,0,0.75)'}
            background={'#ffffff'}
            position={'absolute'}
            right={'-20px'}
            onClick={() => {
              onToggle();
              toggleClass();
            }}
            aria-label="Expand Sidebar"
            zIndex={9999}
          />
        )}
        <Box overflow="auto" height="100vh">
          <Collapse in={!isOpen}>
            <VStack spacing="4" mt={'3em'} align="stretch">
              <Link href="/admin/dashboard">
                <Flex alignItems={'center'} width="full" mb="12px">
                  <Box width={'20%'}>
                    <Image
                      src={'/images/Category.png'}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Box>
                  <Box width={'80%'}>
                    <Text
                      className="primary-font-medium"
                      fontSize="16px"
                      color="#12171E66"
                    >
                      Dashboard
                    </Text>
                  </Box>
                </Flex>
              </Link>
              <Box cursor={'pointer'} mt="0px" onClick={onInventoryToggle}>
                <Flex alignItems={'center'} width="full" mb="12px">
                  <Box width={'20%'}>
                    <Image
                      src={'/images/inventory.png'}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Box>
                  <Box width={'80%'}>
                    <Link href="/admin/inventory/products">
                      <Text
                        className="primary-font-medium"
                        fontSize="16px"
                        color={
                          isActive('/admin/inventory/products') ||
                          isActive('/admin/inventory/categories') ||
                          isActive('/admin/inventory/manufacturers') ||
                          isActive('/admin/inventory/print-labels') ||
                          isActive('/admin/inventory/products/add-product') ||
                          isActive('/admin/inventory/transfers')
                            ? '#000000'
                            : '#12171E66'
                        }
                      >
                        Inventory
                      </Text>
                    </Link>
                  </Box>
                </Flex>
              </Box>
              <Collapse in={!isInventoryOpen && isRouteInventory}>
                <Box
                  borderLeft={'1px solid #E69066'}
                  marginLeft={'15px !important'}
                  transition=" 0.3s ease-in-out"
                  pl={'30px'}
                  mt="2em"
                  mb="12px"
                  zIndex="10"
                  width="208px !important"
                >
                  <Box
                    className={
                      isActive('/admin/inventory/products') ||
                      isActive('/admin/inventory/products/add-product') ||
                      isActive(
                        '/admin/inventory/products/edit-product-detail'
                      ) ||
                      isActive('/admin/inventory/products/product-detail')
                        ? 'active-tab'
                        : 'inactive-tab'
                    }
                  >
                    <Link href="/admin/inventory/products">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Products
                      </Text>
                    </Link>
                  </Box>
                  <Box
                    mt="-5px"
                    className={
                      isActive('/admin/inventory/categories') ||
                      isActive('/admin/inventory/categories/add-category') ||
                      isActive('/admin/inventory/categories/add-subcategory')
                        ? 'active-tab'
                        : 'inactive-tab'
                    }
                  >
                    <Link href="/admin/inventory/categories">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Categories
                      </Text>
                    </Link>
                  </Box>
                  <Box
                    mt="-5px"
                    className={
                      isActive('/admin/inventory/manufacturers') ||
                      isActive(
                        '/admin/inventory/manufacturers/add-manufacturer'
                      )
                        ? 'active-tab'
                        : 'inactive-tab'
                    }
                  >
                    <Link href="/admin/inventory/manufacturers">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Manufacturers
                      </Text>
                    </Link>
                  </Box>
                  <Box
                    mt="-5px"
                    className={
                      isActive('/admin/inventory/print-labels')
                        ? 'active-tab'
                        : 'inactive-tab'
                    }
                  >
                    <Link href="/admin/inventory/print-labels">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Print Labels
                      </Text>
                    </Link>
                  </Box>
                  <Box
                    mt="-5px"
                    className={
                      isActive('/admin/inventory/transfers')
                        ? 'active-tab'
                        : 'inactive-tab'
                    }
                  >
                    <Link href="/admin/inventory/transfers">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Transfers
                      </Text>
                    </Link>
                  </Box>
                </Box>
              </Collapse>
              <Link href="/admin/customers">
                <Flex alignItems={'center'} width="full">
                  <Box width={'20%'}>
                    <Image
                      src={'/images/User.png'}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Box>
                  <Box width={'80%'}>
                    <Text
                      className="primary-font-medium"
                      fontSize="16px"
                      color={isRouteCustomers ? '#000000' : '#12171E66'}
                    >
                      Customers
                    </Text>
                  </Box>
                </Flex>
              </Link>
              <Link href="/">
                <Flex alignItems={'center'} width="full">
                  <Box width={'20%'}>
                    <Image
                      src={'/images/rewards.png'}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Box>
                  <Box width={'80%'}>
                    <Link href="/admin/rewards">
                      <Text
                        className="primary-font-medium"
                        fontSize="16px"
                        color={
                          isActive('/admin/rewards') ? '#000000' : '#12171E66'
                        }
                      >
                        Rewards
                      </Text>
                    </Link>
                  </Box>
                </Flex>
              </Link>
              <Link href="/admin/orders">
                <Flex alignItems={'center'} width="full">
                  <Box width={'20%'}>
                    <Image
                      src={'/images/order.png'}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Box>
                  <Box width={'80%'}>
                    <Text
                      className="primary-font-medium"
                      fontSize="16px"
                      color={
                        isActive('/admin/orders') ||
                        isActive('/admin/orders/order-detail')
                          ? '#000000'
                          : '#12171E66'
                      }
                    >
                      Order
                    </Text>
                  </Box>
                </Flex>
              </Link>
              <Box onClick={onEmployeeToggle} cursor="pointer">
                <Flex alignItems={'center'} width="full">
                  <Box width={'20%'}>
                    <Image
                      src={'/images/employee.png'}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Box>
                  <Box width={'80%'}>
                    <Link href="/admin/employee/individual-employee">
                      <Text
                        className="primary-font-medium"
                        fontSize="16px"
                        color={
                          isActive('/admin/employee/individual-employee') ||
                          isActive('/admin/employee/employee-groups') ||
                          isActive('/admin/employee/add-employee-group') ||
                          isActive('/admin/employee/employee-detail') ||
                          isActive('/admin/employee/edit-employee') ||
                          isActive('/admin/employee/add-employee')
                            ? '#000000'
                            : '#12171E66'
                        }
                      >
                        Access Management
                      </Text>
                    </Link>
                  </Box>
                </Flex>
              </Box>
              <Collapse in={isEmployeeOpen && isRouteAccessManagement}>
                <Box
                  borderLeft={'1px solid #E69066'}
                  marginLeft={'15px !important'}
                  transition=" 0.3s ease-in-out"
                  pl={'30px'}
                  mt="-5px"
                  mb="12px"
                  zIndex="10"
                  width="208px !important"
                >
                  <Box
                    className={
                      isActive('/admin/employee/individual-employee') ||
                      isActive('/admin/employee/add-employee') ||
                      isActive('/admin/employee/edit-employee') ||
                      isActive('/admin/employee/employee-detail')
                        ? 'active-tab'
                        : 'inactive-tab'
                    }
                  >
                    <Link href="/admin/employee/individual-employee">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Individual Employee
                      </Text>
                    </Link>
                  </Box>
                  <Box
                    mt="-5px"
                    className={
                      isActive('/admin/employee/employee-groups') ||
                      isActive('/admin/employee/add-employee-group')
                        ? 'active-tab'
                        : 'inactive-tab'
                    }
                  >
                    <Link href="/admin/employee/employee-groups">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Employee Groups
                      </Text>
                    </Link>
                  </Box>
                </Box>
              </Collapse>
              <Link href="/">
                <Flex alignItems={'center'} width="full">
                  <Box width={'20%'}>
                    <Image
                      src={'/images/label.png'}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Box>
                  <Box width={'80%'}>
                    <Link href="/admin/labels">
                      <Text
                        className="primary-font-medium"
                        fontSize="16px"
                        color={
                          isActive('/admin/labels') ? '#000000' : '#12171E66'
                        }
                      >
                        Labels
                      </Text>
                    </Link>
                  </Box>
                </Flex>
              </Link>
              <Box onClick={onSettingToggle} cursor="pointer">
                <Flex alignItems={'center'} width="full">
                  <Box width={'20%'}>
                    <Image
                      src={'/images/Setting.png'}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Box>
                  <Box width={'80%'}>
                    <Link href="/admin/settings/general">
                      <Text
                        className="primary-font-medium"
                        fontSize="16px"
                        color={
                          isActive('/admin/settings/general') ||
                          isActive('/admin/settings/general/add-new-store')
                            ? '#000000'
                            : '#12171E66'
                        }
                      >
                        Settings
                      </Text>
                    </Link>
                  </Box>
                </Flex>
              </Box>
              <Collapse in={isSettingOpen && isRouteSettings}>
                <Box
                  borderLeft={'1px solid #E69066'}
                  marginLeft={'15px !important'}
                  transition=" 0.3s ease-in-out"
                  pl={'30px'}
                  mt="-5px"
                  mb="12px"
                  zIndex="10"
                  width="208px !important"
                >
                  <Box
                    className={
                      isActive('/admin/settings/general') ||
                      isActive('/admin/settings/general/add-new-store')
                        ? 'active-tab'
                        : 'inactive-tab'
                    }
                  >
                    <Link href="/admin/settings/general">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        General
                      </Text>
                    </Link>
                  </Box>
                  <Box
                    mt="-5px"
                    className={isActive('') ? 'active-tab' : 'inactive-tab'}
                  >
                    <Link href="/admin/settings/general">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Menus
                      </Text>
                    </Link>
                  </Box>
                  <Box
                    mt="-5px"
                    className={isActive('') ? 'active-tab' : 'inactive-tab'}
                  >
                    <Link href="/admin/settings/general">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Taxes
                      </Text>
                    </Link>
                  </Box>
                  <Box
                    mt="-5px"
                    className={isActive('') ? 'active-tab' : 'inactive-tab'}
                  >
                    <Link href="/admin/settings/general">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Compliances
                      </Text>
                    </Link>
                  </Box>
                  <Box
                    mt="-5px"
                    className={isActive('') ? 'active-tab' : 'inactive-tab'}
                  >
                    <Link href="/admin/settings/general">
                      <Text className="primary-font-semibold" mt={'10px'}>
                        Permission
                      </Text>
                    </Link>
                  </Box>
                </Box>
              </Collapse>
              <Link href="/auth/login">
                <Flex alignItems={'center'} width="full" mb="12px">
                  <Box width={'20%'}>
                    <Image
                      src={'/images/Logout.png'}
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Box>
                  <Box width={'80%'}>
                    <Text
                      className="primary-font-medium"
                      fontSize="16px"
                      color="#12171E66"
                    >
                      Logout
                    </Text>
                  </Box>
                </Flex>
              </Link>
              <Box h="200px" />
            </VStack>
          </Collapse>
        </Box>
      </Box>
      <Box
        pl={{ base: '0', md: !isOpen ? '250px' : '70px' }}
        marginTop={'10em'}
        w="100%"
        position="fixed"
        transition="0.3s ease-in-out"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default Sidenav;
