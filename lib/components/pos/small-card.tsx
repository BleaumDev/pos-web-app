import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

interface SmallCardProps {
  title?: string;
  image?: string;
}

const SmallCard = ({ title, image }: SmallCardProps) => {
  return (
    <Flex
      p="16px 12px"
      justifyContent="space-between"
      alignItems="center"
      background="#F6FCFF"
      border="1px solid F6FCFF"
      cursor="pointer"
      w="auto"
      height="48px"
      gap="5px"
      borderRadius="62px"
    >
      <Box position="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20Z"
            fill="#F7FCFF"
            stroke="white"
            stroke-width="2"
          />
        </svg>
        <Img
          src={image}
          position="absolute"
          top="1px"
          w="36px"
          h="36px"
          left="1px"
        />
      </Box>
      <Text color="#41454B" fontSize="12px" className="primary-font-extraBold">
        {title}
      </Text>
    </Flex>
  );
};

export default SmallCard;
