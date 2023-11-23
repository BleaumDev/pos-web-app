import { Box, Input, Stack } from '@chakra-ui/react';
import Label from '../base/label';
import PosPhoneInput from '../base/phone-input';

const StoreDetails = () => {
  return (
    <Box
      borderRadius="8px"
      m={{
        base: '0em 0em',
        md: '0em 2em',
      }}
      className="store-box"
      p="1em"
      border="0.5px solid rgba(65, 69, 75, 0.30)"
    >
      <Label
        fontSize={{ base: '12px', sm: '14px', md: '14px' }}
        className="primary-font-semibold"
      >
        Store Details
      </Label>

      <Stack w="100%" mt="1em">
        <Label
          fontSize={{ base: '12px', sm: '12px', md: '12px' }}
          className="primary-font-semibold"
        >
          Store Name
          <span
            style={{
              color: '#FF8A43',
            }}
          >
            *
          </span>
        </Label>

        <Box mt="-8px">
          <Input
            placeholder="Name your Employee"
            background="#fff"
            className="primary-font-medium"
            h="33px"
            fontSize="12px"
          />
        </Box>
      </Stack>
      <Stack w="100%" mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '12px', md: '12px' }}
          className="primary-font-semibold"
        >
          Manager
        </Label>

        <Box mt="-8px">
          <Input
            placeholder="Enter The Manager Name"
            background="#fff"
            className="primary-font-medium"
            h="33px"
            fontSize="12px"
          />
        </Box>
      </Stack>
      <Stack w="100%" mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '12px', md: '12px' }}
          className="primary-font-semibold"
        >
          Assistant Manager
        </Label>

        <Box mt="-8px">
          <Input
            placeholder="Enter The Assistant Manager Name"
            background="#fff"
            className="primary-font-medium"
            h="33px"
            fontSize="12px"
          />
        </Box>
      </Stack>
      <Stack w="100%" mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '12px', md: '12px' }}
          className="primary-font-semibold"
        >
          Cannabis Licence No.
        </Label>

        <Box mt="-8px">
          <Input
            placeholder="Enter The Cannabis Licence No."
            background="#fff"
            className="primary-font-medium"
            h="33px"
            fontSize="12px"
          />
        </Box>
      </Stack>
      <Stack w="100%" mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '12px', md: '12px' }}
          className="primary-font-semibold"
        >
          Business Licence No.
        </Label>

        <Box mt="-8px">
          <Input
            placeholder="Enter The Business Licence No."
            background="#fff"
            className="primary-font-medium"
            h="33px"
            fontSize="12px"
          />
        </Box>
      </Stack>
      <Stack w="100%" mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '12px', md: '12px' }}
          className="primary-font-semibold"
        >
          Phone No
        </Label>

        <Box mt="-8px">
          <PosPhoneInput />
        </Box>
      </Stack>
      <Stack w="100%" mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '12px', md: '12px' }}
          className="primary-font-semibold"
        >
          Email ID
        </Label>

        <Box mt="-8px">
          <Input
            placeholder="Enter Email Id"
            background="#fff"
            className="primary-font-medium"
            h="33px"
            fontSize="12px"
          />
        </Box>
      </Stack>
      <Stack w="100%" mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '12px', md: '12px' }}
          className="primary-font-semibold"
        >
          Website
        </Label>

        <Box mt="-8px">
          <Input
            placeholder="Enter Website link"
            background="#fff"
            className="primary-font-medium"
            h="33px"
            fontSize="12px"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default StoreDetails;
