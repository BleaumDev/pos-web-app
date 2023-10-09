import { Box, Flex, Text } from '@chakra-ui/react';
import { type FC } from 'react';

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: FC<AppShellProps> = ({ children }) => {
  return (
    <Flex minH="100vh" flexDirection="column" justifyContent="space-between">
      <Box
        id="app-shell-content"
        mx="auto"
        mt={{
          base: '80px',
          sm: '106px',
        }}
        mb={{
          base: '70px',
          sm: '0px',
        }}
        w="full"
        h="full"
        flex={1}
      >
        {children}
      </Box>
      <Box
        display={{
          base: 'none',
          sm: 'flex',
        }}
        as="footer"
        justifyContent="space-between"
        alignItems="center"
        bg="black"
        color="white"
        w="100%"
        h="70px"
        px={6}
      >
        <Text
          className="primary-font-medium"
          color="#fff"
          fontSize={{ base: '13px', md: '20px' }}
        >
          Footer will be here
        </Text>
      </Box>
    </Flex>
  );
};

export default AppShell;
