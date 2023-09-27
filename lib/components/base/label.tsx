import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

interface LabelProps extends TextProps {
  htmlFor?: string;
}

const Label = ({ children, ...props }: LabelProps) => (
  <Text
    m="0 !important"
    as="label"
    className="primary-font-medium"
    fontWeight="400"
    fontSize={{ base: '14px', md: '16px' }}
    color="#41454B"
    {...props}
  >
    {children}
  </Text>
);

export default Label;
