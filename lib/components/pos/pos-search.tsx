import { Box, Flex, Input } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const PosSearch = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box
        gap="20px"
        mt="1em"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <Box position="relative">
          <Input
            placeholder="Scan/Search Product by Code or Name here..."
            background="#F8FBF8"
            className="primary-font-medium"
            fontSize="12px"
            h="40px"
            pl="4em"
            position="relative"
            border="none"
            w="486px"
            color="rgba(18, 23, 30, 0.50)"
            borderRadius="4px"
          />
          <Box position="absolute" top="10px" left="10px">
            <Image
              src="/images/search-normal.png"
              width={20}
              height={20}
              alt="logo"
            />
          </Box>
        </Box>

        <Box cursor="pointer">
          <Image
            src="/images/search-orange.png"
            width={36}
            height={36}
            alt="logo"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default PosSearch;
