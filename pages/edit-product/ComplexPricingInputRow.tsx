import { Box, FormLabel, Input } from '@chakra-ui/react';

export default function ComplexPricingInputRow(): React.ReactElement {
  return (
    <Box className="flex-row justify-between items-center mt-4 grid grid-cols-1 sm:grid-cols-2">
      <Box className="w-full">
        <FormLabel
          h={6}
          className="primary-font-semibold whitespace-nowrap"
          fontWeight="medium"
          color="#41454B"
        >
          Weight
        </FormLabel>
        <Input type="text" borderWidth={2} className="primary-font-medium" />
      </Box>
      <Box className="sm:pl-3 mt-4 sm:mt-0">
        <FormLabel
          h={6}
          className="primary-font-semibold whitespace-nowrap"
          color="#41454B"
        >
          Price
        </FormLabel>
        <Input type="text" borderWidth={2} className="primary-font-medium" />
      </Box>
    </Box>
  );
}
