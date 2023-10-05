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
import Navbar from './AppbarInfo';

const Sidenav = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isInventoryOpen, onToggle: onInventoryToggle } =
    useDisclosure();
  return (
    <>
      <Box position={'fixed'} w={'full'} top={'0px'}>
        <Navbar toggleSidebar={onToggle} />
      </Box>
      <Box
        w={isOpen ? '250px' : '70px'}
        minH={isOpen ? '100vh' : '100vh'}
        bg="#ffffff"
        p="4"
        zIndex={10}
        position="fixed"
        left="0"
        top="6em"
        transition="width 0.3s ease-in-out"
      >
        {isOpen ? (
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={onToggle}
            position={'absolute'}
            background={'#ffffff'}
            boxShadow={'2px 1px 35px -11px rgba(0,0,0,0.75)'}
            right={'-20px'}
            borderRadius={'50%'}
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
          />
        )}
        <Collapse in={isOpen}>
          <VStack spacing="4" mt={'3em'} align="stretch">
            <NextLink href="/">
              <Flex alignItems={'center'} width="full">
                <Box width={'20%'}>
                  <Image
                    src={'/images/Category.png'}
                    width={25}
                    height={25}
                    alt=""
                  />
                </Box>
                <Box width={'80%'}>
                  <Text className="primary-font-medium" color="#12171E66">
                    Dashboard
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <Box cursor={'pointer'} onClick={onInventoryToggle}>
              <Flex alignItems={'center'} width="full">
                <Box width={'20%'}>
                  <Image
                    src={'/images/inventory.png'}
                    width={25}
                    height={25}
                    alt=""
                  />
                </Box>
                <Box width={'80%'}>
                  <Text className="primary-font-medium" color="#12171E66">
                    Inventory
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Collapse in={isInventoryOpen}>
              <Box
                borderLeft={'1px solid #E69066'}
                marginLeft={'15px !important'}
                transition=" 0.3s ease-in-out"
                pl={'3em'}
              >
                <NextLink href="/">
                  <Text
                    className="primary-font-semibold"
                    mt={'10px'}
                    color="#12171E66"
                  >
                    Products
                  </Text>
                </NextLink>
                <NextLink href="/">
                  <Text
                    className="primary-font-semibold"
                    mt={'10px'}
                    color="#12171E66"
                  >
                    Categories
                  </Text>
                </NextLink>
                <NextLink href="/">
                  <Text
                    className="primary-font-semibold"
                    mt={'10px'}
                    color="#12171E66"
                  >
                    Manufacturers
                  </Text>
                </NextLink>
                <NextLink href="/">
                  <Text
                    className="primary-font-semibold"
                    mt={'10px'}
                    color="#12171E66"
                  >
                    Print Labels
                  </Text>
                </NextLink>
                <NextLink href="/">
                  <Text
                    className="primary-font-semibold"
                    mt={'10px'}
                    color="#12171E66"
                  >
                    Transfers
                  </Text>
                </NextLink>
              </Box>
            </Collapse>
            <NextLink href="/">
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
                  <Text className="primary-font-medium" color="#12171E66">
                    Customers
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
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
                  <Text className="primary-font-medium" color="#12171E66">
                    Rewards
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
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
                  <Text className="primary-font-medium" color="#12171E66">
                    Order
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
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
                  <Text className="primary-font-medium" color="#12171E66">
                    Employees
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
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
                  <Text className="primary-font-medium" color="#12171E66">
                    Labels
                  </Text>
                </Box>
              </Flex>
            </NextLink>
            <NextLink href="/">
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
                  <Text className="primary-font-medium" color="#12171E66">
                    Settings
                  </Text>
                </Box>
              </Flex>
            </NextLink>

            {/* Add more sidebar links as needed */}
          </VStack>
        </Collapse>
        <Collapse in={!isOpen}>
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
        ml={isOpen ? '12em' : '5em'}
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
