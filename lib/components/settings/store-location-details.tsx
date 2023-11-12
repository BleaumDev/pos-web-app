import { Box, Input, Select, Stack } from '@chakra-ui/react';
import Label from '../base/label';
import UploadSingleImage from '../base/upload-single-image';

const states = ['California', 'Texas', 'Florida'];

const StoreLocationDetails = () => {
  return (
    <Stack w="100%">
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
          Store Location Details
        </Label>

        <Stack w="100%" mt="1em">
          <Label
            fontSize={{ base: '12px', sm: '12px', md: '12px' }}
            className="primary-font-semibold"
          >
            Address
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
              w={{
                base: '250px',
                md: '250px',
              }}
              placeholder="Enter Address"
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
            City
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
              w={{
                base: '250px',
                md: '250px',
              }}
              placeholder="Enter City Name"
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
            State
            <span
              style={{
                color: '#FF8A43',
              }}
            >
              *
            </span>
          </Label>

          <Box mt="-8px">
            <Select
              color="rgba(65, 69, 75, 0.50)"
              border="1px solid rgba(18, 23, 30, 0.20)"
              placeholder="Select State"
              background="#fff"
              className="primary-font-medium"
              h="33px"
              fontSize="12px"
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </Box>
        </Stack>
        <Stack w="100%" mt="8px">
          <Label
            fontSize={{ base: '12px', sm: '12px', md: '12px' }}
            className="primary-font-semibold"
          >
            Zip Code
          </Label>

          <Box mt="-8px">
            <Input
              w={{
                base: '250px',
                md: '250px',
              }}
              placeholder="Type Zip Code"
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
            Time Zone
            <span
              style={{
                color: '#FF8A43',
              }}
            >
              *
            </span>
          </Label>

          <Box mt="-8px">
            <Select
              color="rgba(65, 69, 75, 0.50)"
              border="1px solid rgba(18, 23, 30, 0.20)"
              placeholder="Select Time zone"
              background="#fff"
              className="primary-font-medium"
              h="33px"
              fontSize="12px"
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </Box>
        </Stack>
      </Box>
      <Label
        fontSize={{ base: '12px', sm: '12px', md: '12px' }}
        className="primary-font-semibold"
        position="relative"
        left="35px"
        top="1em"
      >
        Logo
      </Label>
      <Box position="relative" left="14px" top="1em">
        <UploadSingleImage
          widthSelectedImage="164px"
          heightSelectedImage="136px"
          widthOfDefaultImage="200px"
          defaultImage="/images/upload-Image.png"
          addOrangeButton
        />
      </Box>
    </Stack>
  );
};

export default StoreLocationDetails;
