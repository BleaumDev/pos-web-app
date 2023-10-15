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
      h="full"
      minH={{
        base: '100vh',
        sm: '100vh',
        md: '100vh',
      }}
    >
      <Box
        p={{
          base: 2,
          sm: 8,
        }}
        pt={{
          base: '80px',
          sm: '106px',
        }}
        h="full"
        background="#fff"
        display="flex"
        justifyContent="center"
        alignContent="center"
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
