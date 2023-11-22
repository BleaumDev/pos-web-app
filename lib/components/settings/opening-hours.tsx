import { Box, Checkbox, Flex, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import Label from '../base/label';
import AddOpeningHours from './add-opening-hours';
import OpenAllWeek from './open-all-week';

const states = ['California', 'Texas', 'Florida'];

const OpeningHoursPage = () => {
  const [openAllWeek, setOpenAllWeek] = useState(false);

  const handleCheckboxChange = () => {
    setOpenAllWeek((prev) => !prev);
  };

  return (
    <Stack
      w={{
        base: '100%',
        sm: '100%',
        md: '33.3%',
      }}
    >
      <Box
        borderRadius="8px"
        m={{
          base: '0em 0em',
          md: '0em 2em',
        }}
        p="1em"
        border="0.5px solid rgba(65, 69, 75, 0.30)"
      >
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Opening Hours
        </Label>

        <Flex justifyContent="end" gap="10px" alignItems="center" mt="8px">
          <Checkbox
            size="sm"
            colorScheme="orange"
            onChange={handleCheckboxChange}
          />
          <Label
            fontSize={{ base: '12px', sm: '12px', md: '12px' }}
            className="primary-font-medium"
          >
            Open 24 hours
          </Label>
        </Flex>
        <Flex justifyContent="end" gap="10px" alignItems="center" mt="8px">
          <Label
            fontSize={{ base: '12px', sm: '12px', md: '12px' }}
            className="primary-font-medium"
          >
            Opens at
          </Label>
          -
          <Label
            fontSize={{ base: '12px', sm: '12px', md: '12px' }}
            className="primary-font-medium"
          >
            Close at
          </Label>
        </Flex>
        {openAllWeek ? (
          <Box mt="8px">
            <OpenAllWeek />
          </Box>
        ) : (
          <>
            <Box mt="8px">
              <AddOpeningHours />
            </Box>
          </>
        )}
      </Box>
    </Stack>
  );
};

export default OpeningHoursPage;
