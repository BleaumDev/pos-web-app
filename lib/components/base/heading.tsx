import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

interface HeadingProps extends TextProps {
  htmlFor?: string;
}

const Heading = ({ children, ...props }: HeadingProps) => (
  <Text
    fontWeight="700"
    className="primary-font-semibold"
    fontSize={{ base: '20px', md: '24px' }}
    color="#41454B"
    mb={2}
    {...props}
  >
    {children}
  </Text>
);

export default Heading;
