import { Flex, Text } from '@chakra-ui/react';

interface PsoHeadingProps {
  heading: string;
  subText: string;
  subColor?: string;
  fontSize1?: string;
  fontSize2?: string;
}

const PsoHeading = ({
  heading,
  subText,
  subColor,
  fontSize1,
  fontSize2,
}: PsoHeadingProps) => {
  return (
    <Flex gap="8px">
      <Text color="#41454B" fontSize={fontSize1} className="glroy-bold">
        {heading}
      </Text>
      <Text
        color={subColor}
        fontSize={fontSize2}
        mt="7px"
        className="primary-font-semibold"
      >
        {subText}
      </Text>
    </Flex>
  );
};

export default PsoHeading;
