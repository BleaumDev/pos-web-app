import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

interface MedicalSelectProps {
  imageSrc?: string;
  name?: string;
  licensecode?: string;
  licensenumber?: string;
}

const MedicalSelect = ({
  imageSrc,
  name,
  licensecode,
  licensenumber,
}: MedicalSelectProps) => {
  return (
    <Flex alignItems="center">
      <Img src={imageSrc} width="32px" height="32px" />
      <Box>
        <Text
          ml="10px"
          color="#41454B"
          fontSize="16px"
          className="primary-font-semibold"
        >
          {name}
        </Text>
        <Flex ml="13px">
          <Text
            fontSize="12px"
            className="primary-font-semi-bold-italic"
            color="#fff"
            background="#1098FF"
          >
            {licensecode}
          </Text>
          <Text
            fontSize="12px"
            className="primary-font-semi-bold-italic"
            color="rgba(65, 69, 75, 0.60)"
          >
            {licensenumber}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MedicalSelect;
