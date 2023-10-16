// components/CustomSelect.tsx
import { Box, Select, Text, useStyleConfig, VStack } from '@chakra-ui/react';
import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  onChange: (value: string) => void;
  value: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onChange,
  value,
}) => {
  const styles = useStyleConfig('Select', {});

  return (
    <Box>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={styles}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <VStack spacing={0} position="relative" top="-6px">
        {options.map((option) => (
          <Box
            key={option.value}
            bg={value === option.value ? 'blue.500' : 'white'}
            color={value === option.value ? 'white' : 'black'}
            p={2}
            borderRadius="md"
            _hover={{ bg: value === option.value ? 'blue.600' : 'gray.100' }}
            onClick={() => onChange(option.value)}
            cursor="pointer"
          >
            <Text>{option.label}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CustomSelect;
