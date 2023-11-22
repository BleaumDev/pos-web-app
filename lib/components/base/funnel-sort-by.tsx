import { Box, Collapse, Image, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const FunnelText = [
  'Name: A to Z',
  'Name: Z to A',
  'Price: High to Low',
  'Price: Low to High',
];

const FunnelSort = () => {
  const [isOpenFunnel, setIsOpenFunnel] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleOptionsFunnel = () => {
    setIsOpenFunnel(!isOpenFunnel);
  };

  const closeOptionsFunnel = () => {
    setIsOpenFunnel(false);
  };

  return (
    <Box
      position="relative"
      onBlur={closeOptionsFunnel}
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src="/images/funnel.png"
        alt="sortBy"
        w="38px"
        cursor="pointer"
        h="38px"
        zIndex="1000"
        onClick={toggleOptionsFunnel}
      />
      <Collapse in={isOpenFunnel} animateOpacity>
        <Stack
          background={'#FFF9F7'}
          w="200px"
          position="absolute"
          left="-10em"
          top="-10px"
          zIndex="1000"
          className={`primary-font-semi-bold-italic ${
            isHovered ? 'primary-font-semibold' : ''
          }`}
          mt="3em"
          borderRadius="12px 0px 12px 12px"
        >
          {FunnelText.map((text, index) => (
            <Text
              px="15px"
              py="10px"
              key={index}
              onClick={toggleOptionsFunnel}
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
