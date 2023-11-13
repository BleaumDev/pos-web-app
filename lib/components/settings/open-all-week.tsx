import { Box, Flex, Grid } from '@chakra-ui/react';
import Label from '../base/label';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const OpenAllWeek = () => {
  return (
    <Box>
      <Grid gap={2} mt="8px">
        {days.map((day) => (
          <Flex justifyContent="space-between" key={day}>
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              {day}
            </Label>
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-medium"
            >
              Open 24 Hours
            </Label>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default OpenAllWeek;
