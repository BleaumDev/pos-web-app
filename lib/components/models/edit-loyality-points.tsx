import {
  Box,
  Divider,
  Flex,
  Img,
  Input,
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
const EditLoyalityPoints = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        fontSize="12px"
        className="primary-font-regular-italic"
        color="#0C8CE9"
        onClick={onOpen}
        textDecoration="underline"
        cursor="pointer"
      >
        Edit Points
      </Text>
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
                Edit Loyalty Points
              </Text>
            </Flex>
            <Divider
              border="1px solid"
              mt="5px"
              borderColor="rgba(65, 69, 75, 0.30)"
            />
            <Flex gap="4px" mt="1em" justifyContent="space-between">
              <Text
                color="#41454B"
                fontSize="14px"
                className="primary-font-semi-bold-italic"
              >
                Add Points to this customer
              </Text>
              <Flex gap="5px">
                <Input
                  defaultValue="600"
                  color="#FFA382"
                  borderRadius="2px"
                  fontSize="14px"
                  textAlign="center"
                  p="8px 10px"
                  className="primary-font-semi-bold-italic"
                  w="82px"
                  h="24px"
                  background="rgba(65, 69, 75, 0.08)"
                  _placeholder={{
                    color: '#FFA382',
                  }}
                />
                <Text
                  color="#41454B"
                  fontSize="14px"
                  className="primary-font-semibold"
                >
                  pts
                </Text>
              </Flex>
            </Flex>
            <Flex gap="4px" mt="1em" justifyContent="space-between">
              <Text
                color="rgba(65, 69, 75, 0.70)"
                fontSize="14px"
                className="primary-font-semibold"
              >
                Current Points
              </Text>
              <Text
                color="#41454B"
                fontSize="14px"
                className="primary-font-semibold"
              >
                1000 pts
              </Text>
            </Flex>
            <Flex gap="4px" mt="1em" justifyContent="space-between">
              <Text
                color="rgba(65, 69, 75, 0.70)"
                fontSize="14px"
                className="primary-font-semibold"
              >
                Total Points After Addition
              </Text>
              <Text
                color="#41454B"
                fontSize="14px"
                className="primary-font-semibold"
              >
                1600 pts
              </Text>
            </Flex>
            <Box textAlign="center">
              <Button styledVariant="blue" w="full" mt="2em">
                Done
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditLoyalityPoints;
