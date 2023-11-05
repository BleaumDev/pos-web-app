import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import type { FC } from 'react';

interface ErrorMessageProps {
  message?: string;
  touched?: boolean;
  margin?: TextProps['margin'];
  mx?: TextProps['mx'];
  mt?: TextProps['mt'];
  mb?: TextProps['mb'];
  ml?: TextProps['ml'];
  mr?: TextProps['mr'];
}

const ErrorMessage: FC<ErrorMessageProps> = ({
  message,
  touched,
  ...props
}) => {
  if (!message || !touched) return null;
  return (
    <Text
      color="red.400"
      fontSize="14px"
      textTransform="capitalize"
      className="secondary-font-medium"
      mt={2}
      {...props}
    >
      {message}
    </Text>
  );
};

export default ErrorMessage;
