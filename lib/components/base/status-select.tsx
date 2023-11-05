// components/CustomSelect.tsx

import { Box, Collapse, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

interface CustomSelectProps {
  options: { label: string; color: string }[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label: '',
    color: '',
  });

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: { label: string; color: string }) => {
    setSelectedOption(option);
    toggleOptions();
  };

  return (
    <Box position="relative">
      <Image
        src="/images/status.png"
        alt="Status"
        onClick={toggleOptions}
        w="95px"
        cursor="pointer"
        position="absolute"
        right={0}
        top="-5em"
        h="38px"
      />
      <Collapse in={isOpen}>
        <Flex
          direction="column"
          position="absolute"
          top="100%"
          right={0}
          minW="120px"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          zIndex={999}
        >
          {options.map((option) => (
            <Text
              key={option.label}
              p={2}
              cursor="pointer"
              _hover={{ bg: 'gray.100' }}
              onClick={() => handleOptionClick(option)}
              color={option.color}
            >
              {option.label}
            </Text>
          ))}
        </Flex>
      </Collapse>
      {selectedOption.label && (
        <Text mt={2} color={selectedOption.color}>
          Selected Option: {selectedOption.label}
        </Text>
      )}
    </Box>
  );
};

export default CustomSelect;
