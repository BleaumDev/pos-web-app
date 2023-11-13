// components/TimeRangeInput.tsx

import { Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

interface TimeRangeInputProps {
  startTime: string;
  endTime: string;
  onChange: (start: string, end: string) => void;
}

const TimeRangeInput: React.FC<TimeRangeInputProps> = ({
  startTime,
  endTime,
  onChange,
}) => {
  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, endTime);
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(startTime, e.target.value);
  };

  return (
    <Flex alignItems="center">
      <Input
        type="time"
        fontSize="12px"
        value={startTime}
        w="53px"
        pl="10px !important"
        pr="10px !important"
        h="23px"
        color="#FF8A43"
        onChange={handleStartTimeChange}
        mr={2}
      />
      <Text>-</Text>
      <Input
        type="time"
        pl="10px !important"
        pr="10px !important"
        w="53px"
        h="23px"
        fontSize="12px"
        color="#FF8A43"
        value={endTime}
        onChange={handleEndTimeChange}
        ml={2}
      />
    </Flex>
  );
};

export default TimeRangeInput;
