import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Spacer, useColorMode } from '@chakra-ui/react';

const Navbar = ({ toggleSidebar }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p="4" bg="teal.500">
      <Flex align="center">
        <IconButton
          icon={<HamburgerIcon />}
          onClick={toggleSidebar}
          mr="4"
          color="white"
          aria-label="Toggle Sidebar"
        />
        <Spacer />
        <IconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          color="white"
          aria-label="Toggle Dark Mode"
        />
      </Flex>
    </Box>
  );
};

export default Navbar;