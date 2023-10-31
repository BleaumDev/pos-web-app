import { Box, Flex, Stack } from '@chakra-ui/react';

import Button from '../base/button';
import PosDatePicker from '../base/data-picker';
import Input from '../base/input';
import Label from '../base/label';
import UploadSingleImage from '../base/upload-single-image';

const DetailedInformation = () => {
  return (
    <>
      <Stack mt="20px">
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Product Name
        </Label>

        <Box mt="-5px">
          <PosDatePicker />
        </Box>
      </Stack>
      <Stack mt="8px">
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Metrc Name
        </Label>

        <Box mt="-5px">
          <Input placeholder="Choco Hub" h="33px" />
        </Box>
      </Stack>
      <Flex gap="10px" mt="8px" w="full">
        <Stack w="50%">
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            Metrc ID
          </Label>

          <Box mt="-5px">
            <Input placeholder="3567892" h="33px" />
          </Box>
        </Stack>
        <Stack w="50%">
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            Initial Quantity
          </Label>

          <Box mt="-5px">
            <Input placeholder="50g" h="33px" />
          </Box>
        </Stack>
      </Flex>
      <Flex gap="10px" mt="8px" w="full">
        <Stack w="50%">
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            THC
          </Label>

          <Box mt="-5px">
            <Input placeholder="2%" h="33px" />
          </Box>
        </Stack>
        <Stack w="50%">
          <Label
            fontSize={{ base: '12px', sm: '14px', md: '14px' }}
            className="primary-font-semibold"
          >
            CBD
          </Label>

          <Box mt="-5px">
            <Input placeholder="1%" h="33px" />
          </Box>
        </Stack>
      </Flex>
      <Stack justifyContent="center" mt="45px">
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
        >
          Image
        </Label>
        <UploadSingleImage
          widthSelectedImage="164px"
          heightSelectedImage="136px"
          widthOfDefaultImage="200px"
          defaultImage="/images/upload-Image.png"
          addButton
        />
      </Stack>
      <Flex justifyContent="end" gap="21px" mt="5em" alignItems="end">
        <Button
          className="primary-font-semibold"
          border=" 0.3px solid rgba(18, 23, 30, 0.50)"
          fontSize="14px"
          styledVariant="outline"
          color="rgba(18, 23, 30, 0.50)"
        >
          Cancel
        </Button>
        <Button
          className="primary-font-semibold"
          fontSize="14px"
          styledVariant="blue"
          _hover={{
            background: 'rgba(255, 138, 67, 0.50)',
          }}
          background="rgba(255, 138, 67, 0.50)"
        >
          Add product
        </Button>
      </Flex>
    </>
  );
};

export default DetailedInformation;
