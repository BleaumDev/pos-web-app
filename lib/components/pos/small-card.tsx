import { Box, Flex, Img, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface SmallCardProps {
  title?: string;
  image?: string;
}

const SmallCard = ({ title, image }: SmallCardProps) => {
  const [isImage2Visible, setIsImage2Visible] = useState(false);

  const toggleImage = () => {
    setIsImage2Visible(!isImage2Visible);
  };

  const borderStyle = isImage2Visible
    ? '0px solid #FF8A43'
    : '1px solid F6FCFF';
  const background = isImage2Visible
    ? 'url(/images/bg-12.png)' // Replace with the path to your background image when isImage2Visible is true
    : '#F6FCFF'; // Replace with the background color when isImage2Visible is false

  return (
    <Flex
      p="16px 12px"
      justifyContent="space-between"
      alignItems="center"
      mx="2px"
      background={background}
      backgroundSize="cover"
      border={borderStyle}
      backgroundRepeat="no-repeat"
      cursor="pointer"
      w={{
        base: 'calc(100% - 4px)',
        md: '120px',
      }}
      height={{
        base: '65px',
        md: '50px',
      }}
      gap="5px"
      borderRadius="62px"
      onClick={toggleImage}
    >
      <Box position="relative">
        {isImage2Visible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20Z"
              fill="#FFA382"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        ) : (
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
              strokeWidth="2"
            />
          </svg>
        )}
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
