import { Box, Flex, Grid, Img, Link, Text } from '@chakra-ui/react';

import Button from '../base/button';

const ThanksPage = () => {
  return (
    <Box>
      <Box mx="12px" mt="10em">
        <Flex justifyContent="center" alignItems="center" my="1em">
          <Img src="/images/bleaum.png" w="39px" h="45px" alt="bleaum" />
        </Flex>

        <Text
          color="#41454B"
          fontSize="14px"
          textAlign="center"
          mt="5px"
          className="primary-font-semibold"
        >
          Your Invoice have sent to:
        </Text>
        <Box mt="10px" textAlign="center">
          <Text
            color="#E69066"
            fontSize="14px"
            className="primary-font-semi-bold-italic"
          >
            anne_black12@testmail.com
          </Text>
        </Box>
        <Grid mt="10px" justifyContent="center" textAlign="center">
          <Text
            color="rgba(65, 69, 75, 0.70)"
            fontSize="14px"
            className="primary-font-semi-bold-italic"
          >
            Thank You For Shopping With Us.
          </Text>
          <Link href="/pos/payments">
            <Button
              mt="2em"
              w="full"
              styledVariant="blue"
              fontSize="12px"
              fontWeight="400"
            >
              Start New Order
            </Button>
          </Link>
        </Grid>

        <Box h="300px" />
      </Box>
    </Box>
  );
};

export default ThanksPage;
