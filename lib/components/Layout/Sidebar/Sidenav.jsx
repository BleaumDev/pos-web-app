import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Navbar from './AppbarInfo';

const Sidenav = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure(true, 'isOpen');
  const { isOpen: isInventoryOpen, onToggle: onInventoryToggle } =
    useDisclosure('isInventoryOpen');
  const router = useRouter();
  const isActive = (path) => {
    return router.pathname === path;
  };
  return (
    <>
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
            onClick={onToggle}
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
            onClick={onToggle}
            aria-label="Expand Sidebar"
            zIndex={9999}
          />
        )}
        <Collapse in={!isOpen}>
          <VStack spacing="4" mt={'3em'} align="stretch">
            <NextLink href="/">
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
            </NextLink>
            <Box cursor={'pointer'} onClick={onInventoryToggle}>
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
                  <Text
                    className="primary-font-medium"
                    fontSize="16px"
                    color={
                      isActive('/admin/inventory/products') ||
                      isActive('/admin/inventory/categories') ||
                      isActive('/admin/inventory/manufacturers') ||
                      isActive('/admin/inventory/print-labels') ||
                      isActive('/admin/inventory/transfers')
                        ? '#000000'
                        : '#12171E66'
                    }
                  >
                    Inventory
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Collapse in={!isInventoryOpen}>
              <Box
                borderLeft={'1px solid #E69066'}
                marginLeft={'15px !important'}
                transition=" 0.3s ease-in-out"
                pl={'38px'}
                mb="12px"
                width="208px !important"
              >
                <Box
                  className={
                    isActive('/admin/inventory/products')
                      ? 'active-tab'
                      : 'inactive-tab'
                  }
                >
                  <NextLink href="/admin/inventory/products">
                    <Text className="primary-font-semibold" mt={'10px'}>
                      Products
                    </Text>
                  </NextLink>
                </Box>
                <Box
                  className={
                    isActive('/admin/inventory/categories')
                      ? 'active-tab'
                      : 'inactive-tab'
                  }
                >
                  <NextLink href="/admin/inventory/categories">
                    <Text className="primary-font-semibold" mt={'10px'}>
                      Categories
                    </Text>
                  </NextLink>
                </Box>
                <Box
                  className={
                    isActive('/admin/inventory/manufacturers')
                      ? 'active-tab'
                      : 'inactive-tab'
                  }
                >
                  <NextLink href="/admin/inventory/manufacturers">
                    <Text className="primary-font-semibold" mt={'10px'}>
                      Manufacturers
                    </Text>
                  </NextLink>
                </Box>
                <Box
                  className={
                    isActive('/admin/inventory/print-labels')
                      ? 'active-tab'
                      : 'inactive-tab'
                  }
                >
                  <NextLink href="/admin/inventory/print-labels">
                    <Text className="primary-font-semibold" mt={'10px'}>
                      Print Labels
                    </Text>
                  </NextLink>
                </Box>
                <Box
                  className={
                    isActive('/admin/inventory/transfers')
                      ? 'active-tab'
                      : 'inactive-tab'
                  }
                >
                  <NextLink href="/admin/inventory/transfers">
                    <Text className="primary-font-semibold" mt={'10px'}>
                      Transfers
                    </Text>
                  </NextLink>
                </Box>
              </Box>
            </Collapse>
            <NextLink href="/">
              <Flex alignItems={'center'} width="full" mb="12px">
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
                    color="#12171E66"
                  >
                    Customers
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex alignItems={'center'} width="full" mb="12px">
                <Box width={'20%'}>
                  <Image
                    src={'/images/rewards.png'}
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
                    Rewards
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex alignItems={'center'} width="full" mb="12px">
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
                    color="#12171E66"
                  >
                    Order
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex alignItems={'center'} width="full" mb="12px">
                <Box width={'20%'}>
                  <Image
                    src={'/images/employee.png'}
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
                    Employees
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex alignItems={'center'} width="full" mb="12px">
                <Box width={'20%'}>
                  <Image
                    src={'/images/label.png'}
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
                    Labels
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex alignItems={'center'} width="full" mb="12px">
                <Box width={'20%'}>
                  <Image
                    src={'/images/Setting.png'}
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
                    Settings
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
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
            </NextLink>

            {/* Add more sidebar links as needed */}
          </VStack>
        </Collapse>
        <Collapse in={isOpen}>
          <Box
            w={isOpen ? '250px' : '70px'} // Adjust the width based on the sidebar state
            bg="white" // Adjust the margin as needed
            minH={'100vh'}
            mt={'3em'}
            zIndex="20"
          >
            <NextLink href="/">
              <Flex>
                <Image
                  src={'/images/dashboard.png'}
                  width={25}
                  height={25}
                  alt=""
                />
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex mt={'1em'}>
                <Image
                  src={'/images/inventory.png'}
                  width={25}
                  height={25}
                  alt=""
                />
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex mt={'1em'}>
                <Image src={'/images/User.png'} width={25} height={25} alt="" />
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex mt={'1em'}>
                <Image
                  src={'/images/rewards.png'}
                  width={25}
                  height={25}
                  alt=""
                />
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex mt={'1em'}>
                <Image
                  src={'/images/order.png'}
                  width={25}
                  height={25}
                  alt=""
                />
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex mt={'1em'}>
                <Image
                  src={'/images/employee.png'}
                  width={25}
                  height={25}
                  alt=""
                />
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex mt={'1em'}>
                <Image
                  src={'/images/label.png'}
                  width={25}
                  height={25}
                  alt=""
                />
              </Flex>
            </NextLink>
            <NextLink href="/">
              <Flex mt={'1em'}>
                <Image
                  src={'/images/Setting.png'}
                  width={25}
                  height={25}
                  alt=""
                />
              </Flex>
            </NextLink>
          </Box>
        </Collapse>
      </Box>
      <Box
        ml={{ base: '0', md: !isOpen ? '250px' : '70px' }}
        marginTop={'10em'}
        transition="0.3s ease-in-out"
      >
        {children}
      </Box>
      {/* White horizontal section outside of the sidebar */}
    </>
  );
};

export default Sidenav;
