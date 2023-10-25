import { Box, Flex, Stack } from '@chakra-ui/react';

import Label from '../base/label';
import Text from '../base/text';

const CustomerInformationDetail = () => {
  return (
    <Box>
      <Box mt="1em">
        <Label
          fontSize={{ base: '16px', sm: '18px', md: '20px' }}
          className="glroy-bold"
        >
          Customer Information
        </Label>
      </Box>
      <Box
        mt="1em"
        borderRadius="5px"
        border="1px solid rgba(65, 69, 75,
                    0.20)"
        p="1.4em 1.5em"
        h="375px"
      >
        <Flex gap="0px">
          <Box>
            <Stack>
              <Text styledVariant="textSemiBold"> Name</Text>
              <Box mt="-10px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  Wade Warren
                </Label>
              </Box>
            </Stack>
            <Stack mt="5px">
              <Text styledVariant="textSemiBold"> Email</Text>
              <Box mt="-10px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  wade_warren@gmail.com
                </Label>
              </Box>
            </Stack>
            <Stack mt="5px">
              <Text styledVariant="textSemiBold"> Licence No</Text>
              <Box mt="-10px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  AP-FAAA-HR4P-VQOO-RDAK-C6W9-8J
                </Label>
              </Box>
            </Stack>
            <Stack mt="5px">
              <Text styledVariant="textSemiBold"> Shipping address</Text>
              <Box mt="-10px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Label>
              </Box>
            </Stack>
            <Stack mt="5px">
              <Text styledVariant="textSemiBold">Phone</Text>
              <Box mt="-10px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  +017593756329
                </Label>
              </Box>
            </Stack>
          </Box>
          <Box pl="1em">
            <Box textAlign="end">
              <Text
                fontSize="12px"
                className="primary-font-regular-italic"
                color="#0C8CE9"
                textDecoration="underline"
                cursor="pointer"
              >
                Edit Info
              </Text>
            </Box>
            <Stack mt="2em">
              <Text styledVariant="textSemiBold"> Customer Type</Text>
              <Box mt="-10px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  Medical
                </Label>
              </Box>
            </Stack>
            <Stack mt="5px">
              <Text styledVariant="textSemiBold"> Expiry Date</Text>
              <Box mt="-10px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  12/10/2023
                </Label>
              </Box>
            </Stack>
            <Stack mt="5px">
              <Text styledVariant="textSemiBold"> Billing address</Text>
              <Box mt="-10px">
                <Label
                  fontSize={{
                    base: '12px',
                    sm: '14px',
                    md: '14px',
                  }}
                  className="primary-font-semibold"
                >
                  Same as shipping address
                </Label>
              </Box>
            </Stack>
            <Stack mt="1.5em">
              <Flex justifyContent="space-between">
                <Text styledVariant="textSemiBold"> Bud-tender Notes</Text>
                <Text
                  fontSize="12px"
                  className="primary-font-regular-italic"
                  color="#0C8CE9"
                  textDecoration="underline"
                  cursor="pointer"
                >
                  See all
                </Text>
              </Flex>
              <Box mt="5px">
                <Flex mt="-10px">
                  <Label
                    fontSize={{
                      base: '12px',
                      sm: '14px',
                      md: '14px',
                    }}
                    className="primary-font-semibold"
                  >
                    Star Customer
                  </Label>
                  <Text
                    color="rgba(65, 69, 75, 0.7)"
                    fontSize="12px"
                    mb="5px"
                    className="primary-font-medium"
                  >
                    (Once in week for last 5 weeks)
                  </Text>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </Flex>
        <Box borderRadius="3px" background="#F6F6F6" h="auto" p="10px">
          <Flex justifyContent="space-between">
            <Text styledVariant="textSemiBold" fontSize="12px">
              {' '}
              Loyalty Points
            </Text>
            <Text
              fontSize="12px"
              className="primary-font-regular-italic"
              color="#0C8CE9"
              textDecoration="underline"
              cursor="pointer"
            >
              Edit Points
            </Text>
          </Flex>
          <Flex justifyContent="space-between" mt="10px">
            <Flex gap="6px">
              <Label
                fontSize={{
                  base: '10px',
                  sm: '12px',
                  md: '12px',
                }}
                className="primary-font-medium"
              >
                Current Points
              </Label>
              <Text
                className="primary-font-regular-italic"
                fontSize="12px"
                color="#FF8A43"
              >
                1000 pts
              </Text>
            </Flex>
            <Flex gap="6px">
              <Label
                fontSize={{
                  base: '10px',
                  sm: '12px',
                  md: '12px',
                }}
                className="primary-font-medium"
              >
                Total Points
              </Label>
              <Text
                className="primary-font-regular-italic"
                fontSize="12px"
                color="#FF8A43"
              >
                1300 pts
              </Text>
            </Flex>
            <Flex gap="6px">
              <Label
                fontSize={{
                  base: '10px',
                  sm: '12px',
                  md: '12px',
                }}
                className="primary-font-medium"
              >
                Points Spent
              </Label>
              <Text
                className="primary-font-regular-italic"
                fontSize="12px"
                color="#FF8A43"
              >
                300 pts
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerInformationDetail;
