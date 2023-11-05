import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import Label from '../base/label';

const StatsDetail = () => {
  return (
    <Flex my="1em" justifyContent="space-between">
      <Box mt="-8px">
        <Stack w="100%" mt="8px">
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            Total Cost
          </Label>

          <Box mt="-10px">
            <Label
              fontSize={{ base: '20px', sm: '20px', md: '24px' }}
              className="glroy-bold"
            >
              $3245.6
            </Label>
          </Box>
          <Box mt="-10px">
            <Label
              fontSize={{ base: '12px', sm: '12px', md: '12px' }}
              className="primary-font-medium"
              color="rgba(65, 69, 75, 0.40)"
            >
              Latest cost last 365 days
            </Label>
          </Box>
        </Stack>
      </Box>
      <hr
        style={{
          width: '1.5px',
          height: '77px',
          backgroundColor: 'rgba(65, 69, 75, 0.4)',
        }}
      />
      <Box mt="-8px">
        <Stack w="100%" mt="8px">
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            Total Order
          </Label>

          <Flex mt="-10px" alignItems="end">
            <Label
              fontSize={{ base: '20px', sm: '20px', md: '24px' }}
              className="glroy-bold"
            >
              423
            </Label>
            <Text
              color="rgba(65, 69, 75, 0.7)"
              fontSize="14px"
              mb="5px"
              className="primary-font-medium"
            >
              Products
            </Text>
          </Flex>
          <Box mt="-10px">
            <Label
              fontSize={{ base: '12px', sm: '12px', md: '12px' }}
              className="primary-font-medium"
              color="rgba(65, 69, 75, 0.40)"
            >
              Total order last 365 days
            </Label>
          </Box>
        </Stack>
      </Box>
      <hr
        style={{
          width: '1.5px',
          height: '77px',
          backgroundColor: 'rgba(65, 69, 75, 0.4)',
        }}
      />
      <Box mt="-8px">
        <Stack w="100%" mt="8px">
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            Total Loyalty Points
          </Label>

          <Flex mt="-10px" alignItems="end">
            <Label
              fontSize={{ base: '20px', sm: '20px', md: '24px' }}
              className="glroy-bold"
            >
              6240
            </Label>
            <Text
              color="rgba(65, 69, 75, 0.7)"
              fontSize="14px"
              mb="5px"
              className="primary-font-medium"
            >
              Pts
            </Text>
          </Flex>
          <Box mt="-10px">
            <Label
              fontSize={{ base: '12px', sm: '12px', md: '12px' }}
              className="primary-font-medium"
              color="rgba(65, 69, 75, 0.40)"
            >
              Total earned points last 365 days
            </Label>
          </Box>
        </Stack>
      </Box>
      <hr
        style={{
          width: '1.5px',
          height: '77px',
          backgroundColor: 'rgba(65, 69, 75, 0.4)',
        }}
      />
      <Box mt="-8px">
        <Stack w="100%" mt="8px">
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            CBD% Available
          </Label>

          <Flex mt="-10px" alignItems="end">
            <Label
              fontSize={{ base: '20px', sm: '20px', md: '24px' }}
              className="glroy-bold"
            >
              1.39
            </Label>
            <Text
              color="rgba(65, 69, 75, 0.7)"
              fontSize="14px"
              mb="5px"
              className="primary-font-medium"
            >
              gm
            </Text>
          </Flex>
          <Box mt="-10px">
            <Label
              fontSize={{ base: '12px', sm: '12px', md: '12px' }}
              className="primary-font-medium"
              color="rgba(65, 69, 75, 0.40)"
            >
              Total available CBD% for next 30 days
            </Label>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default StatsDetail;
