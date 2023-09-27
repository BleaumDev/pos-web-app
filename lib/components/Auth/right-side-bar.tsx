import { Box } from '@chakra-ui/react';
import Image from 'next/image';

const RighSidebar = () => {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      p={{ base: '10px', md: '15px' }}
      h="full"
      pos="relative"
    >
      <Image
        style={{
          objectFit: 'cover',
        }}
        alt="image"
        fill
        src="/images/auth_bg_right.avif"
      />
    </Box>
  );
};

export default RighSidebar;
