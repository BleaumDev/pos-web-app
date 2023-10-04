import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Collapse, IconButton, Link, Text, VStack, useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link';
import Navbar from './AppbarInfo';

const Sidenav = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Navbar toggleSidebar={onToggle} />
      <Box
        w={isOpen ? '250px' : '70px'}
        minH="100vh"
        bg="teal.200"
        p="4"
        position="fixed"
        left="0"
        top="0"
        transition="width 0.3s ease-in-out"
      >
        {isOpen ? (
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={onToggle}
            mb={4}
            aria-label="Collapse Sidebar"
          />
        ) : (
          <IconButton
            icon={<ChevronRightIcon />}
            onClick={onToggle}
            mb={4}
            aria-label="Expand Sidebar"
          />
        )}
        <Collapse in={isOpen}>
          <VStack spacing="4" align="stretch">
            <NextLink href="/">
              <Link>
                <Text fontSize="xl" fontWeight="bold" color="teal.900">
                  Home
                </Text>
              </Link>
            </NextLink>
            <NextLink href="/about">
              <Link>
                <Text fontSize="xl" fontWeight="bold" color="teal.900">
                  About
                </Text>
              </Link>
            </NextLink>
            {/* Add more sidebar links as needed */}
          </VStack>
        </Collapse>
      </Box>
      {/* White horizontal section outside of the sidebar */}
      {/* <Collapse in={!isOpen}>
        <Box
          w={isOpen ? '250px' : '70px'} // Adjust the width based on the sidebar state
          h="2px"
          bg="white"
          my="4" // Adjust the margin as needed
        >
          <h1>Rabia</h1>
          <h1>Rabia</h1>
          <h1>Rabia</h1>
          <h1>Rabia</h1>
          <h1>Rabia</h1>
          <h1>Rabia</h1>
          <h1>Rabia</h1>
          <h1>Rabia</h1>
          <h1>Rabia</h1>
          <h1>Rabia</h1>
          <h1>Rabia</h1>
          <h1>Rabia</h1>
        </Box>
      </Collapse> */}
    </>
  );
};

export default Sidenav;
