import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

interface SubHeadingProps extends TextProps {
  htmlFor?: string;
}

const SubHeading = ({ children, ...props }: SubHeadingProps) => (
  <Text
    className="primary-font-medium"
    fontSize={{ base: '12px', md: '14px' }}
    color="#41454B99"
    textAlign="center"
    mb={2}
    {...props}
  >
    {children}
  </Text>
);

export default SubHeading;
