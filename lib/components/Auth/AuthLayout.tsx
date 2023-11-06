import { Box, SimpleGrid } from '@chakra-ui/react';
import RighSidebar from './right-side-bar';

type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Props): React.ReactElement {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      alignItems="center"
      justifyContent="center"
      position="relative"
      background="#fff"
      h="full"
      minH={{
        base: '100vh',
        sm: '100vh',
        md: '100vh',
      }}
    >
      <Box
        px={{
          base: 2,
          sm: 10,
        }}
        h="full"
        background="#fff"
        alignItems="center"
        display="flex"
        justifyContent="center"
        sx={{
          form: {
            width: '95%',
          },
        }}
      >
        {children}
      </Box>
      <Box h="full">
        <RighSidebar />
      </Box>
    </SimpleGrid>
  );
}

export default AuthLayout;
