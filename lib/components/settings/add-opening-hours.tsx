import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Label from '../base/label';
import TimeRangeInput from '../base/time-inputs';

interface WeeklyScheduleProps {
  initialSchedule?: { [day: string]: { startTime: string; endTime: string } };
  onChange?: (schedule: {
    [day: string]: { startTime: string; endTime: string };
  }) => void;
}

const defaultSchedule = {
  Monday: { startTime: '09:00', endTime: '17:00' },
  Tuesday: { startTime: '', endTime: '' },
  Wednesday: { startTime: '09:00', endTime: '17:00' },
  Thursday: { startTime: '09:00', endTime: '17:00' },
  Friday: { startTime: '09:00', endTime: '17:00' },
  Saturday: { startTime: '09:00', endTime: '12:00' },
  Sunday: { startTime: '09:00', endTime: '12:00' },
};

const AddOpeningHours: React.FC<WeeklyScheduleProps> = ({
  initialSchedule = defaultSchedule,
  onChange,
}) => {
  const [schedule, setSchedule] = useState(initialSchedule);

  const handleTimeRangeChange = (
    day: string,
    startTime: string,
    endTime: string
  ) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: { startTime, endTime },
    }));

    if (onChange) {
      onChange(schedule);
    }
  };

  return (
    <Box>
      <Flex direction="column">
        {Object.entries(schedule).map(([day, { startTime, endTime }]) => (
          <Flex
            key={day}
            mb={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flex="0 0 100px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                {day}
              </Label>
            </Box>

            <TimeRangeInput
              startTime={startTime}
              endTime={endTime}
              onChange={(start, end) => handleTimeRangeChange(day, start, end)}
            />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default AddOpeningHours;
