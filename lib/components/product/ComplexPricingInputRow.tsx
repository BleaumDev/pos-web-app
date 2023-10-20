import { Box, Flex, Stack } from '@chakra-ui/react';

import Input from '../base/input';
import Label from '../base/label';

export default function ComplexPricingInputRow(): React.ReactElement {
  return (
    <Flex gap="30px" mt="14px">
      <Stack>
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Weight
        </Label>

        <Box mt="-5px">
          <Input placeholder="Insert weight" h="33px" />
        </Box>
      </Stack>
      <Stack>
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Price
        </Label>

        <Box mt="-5px">
          <Input placeholder="Insert price" h="33px" />
        </Box>
      </Stack>
    </Flex>
  );
}
