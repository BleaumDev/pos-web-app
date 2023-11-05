import {
  Box,
  Divider,
  Flex,
  Image,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Button from '../base/button';
const pricingData = [
  { weight: '01g', price: '$3.80' },
  { weight: '3.5g', price: '$5.10' },
  { weight: '07g', price: '$8.20' },
  { weight: '14g', price: '$14.30' },
  { weight: '56g', price: '$20.40' },
  { weight: '112g', price: '$25.40' },
  { weight: '224g', price: '$30.40' },
];
const DownloadCSVModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        src="/images/csv-file.png"
        alt="csv-file"
        w="38px"
        onClick={onOpen}
        cursor="pointer"
        h="38px"
      />
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent borderRadius="24px" bg="#fff" p="60px 10px">
          <Img
            src="/images/close-circle-grey.png"
            position="absolute"
            top="-1em"
            right="-10px"
            boxSize="24px"
            w="40px"
            h="40px"
            cursor="pointer"
            onClick={onClose} // Close the modal when the close icon is clicked
          />
          <ModalBody mt="-2em">
            <Flex justifyContent="center" alignItems="center">
              <Text color="#41454B " className="glroy-bold" fontSize="16px">
                Generate and download Orders csv file?
              </Text>
            </Flex>
            <Divider
              border="1px solid"
              mt="5px"
              borderColor="rgba(65, 69, 75, 0.30)"
            />
            <Flex
              mt="10px"
              justifyContent="center"
              textAlign="center"
              alignItems="center"
            >
              <Text
                color="#41454B"
                className="primary-font-semi-bold-italic"
                fontSize="14px"
                lineHeight="1.5em"
              >
                There are
                <span
                  style={{
                    marginLeft: '5px',
                    marginRight: '5px',
                    color: '#FF8A43',
                  }}
                >
                  10473 items
                </span>{' '}
                .A large number of items can cause the csv generation to take
                some time.
              </Text>
            </Flex>

            <Flex mt="10px" justifyContent="center" alignItems="center">
              <Text
                color="#41454B"
                className="primary-font-semi-bold-italic"
                fontSize="14px"
              >
                Do you want to continue?
              </Text>
            </Flex>
            <Box textAlign="center">
              <Button styledVariant="blue" w="full" mt="2em">
                Download
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DownloadCSVModel;
