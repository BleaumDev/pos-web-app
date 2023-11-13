import { Box, Collapse, Image, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const FunnelText = [
  'Name: A to Z',
  'Name: Z to A ',
  'Price: High to Low ',
  'Price: Low to High',
];

const FunnelSort = () => {
  const [isOpenFunnel, setIsOpenFunnel] = useState(false);

  const toggleOptionsFunnel = () => {
    setIsOpenFunnel(!isOpenFunnel);
  };
  return (
    <Box position="relative">
      <Image
        src="/images/funnel.png"
        alt="sortBy"
        w="38px"
        cursor="pointer"
        h="38px"
        zIndex="1000"
        onClick={toggleOptionsFunnel}
      />
      <Collapse in={isOpenFunnel}>
        <Stack
          background={'#FFF9F7'}
          w="200px"
          position="absolute"
          left="-8em"
          top="5px"
          zIndex="1000"
          mt="3em"
          borderRadius="12px 0px 12px 12px"
        >
          {FunnelText.map((text, index) => (
            <Text
              px="15px"
              py="10px"
              key={index}
              onClick={toggleOptionsFunnel}
              className="primary-font-semibold"
              color="rgba(65, 69, 75, 0.80)"
              cursor="pointer"
              fontSize="14px"
              _hover={{
                background: '#FF8A43',
                color: '#fff',
                transition: '0.3s ease-in-out',
                borderRadius: '12px 0px 12px 12px',
              }}
            >
              {text}
            </Text>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
};

export default FunnelSort;
