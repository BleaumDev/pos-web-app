import {
  Box,
  Divider,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Label from '../base/label';
const pricingData = [
  { weight: '01g', price: '$3.80' },
  { weight: '3.5g', price: '$5.10' },
  { weight: '07g', price: '$8.20' },
  { weight: '14g', price: '$14.30' },
  { weight: '56g', price: '$20.40' },
  { weight: '112g', price: '$25.40' },
  { weight: '224g', price: '$30.40' },
];
const ComplexPricingModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        fontSize="8px"
        mt="5px"
        onClick={onOpen}
        className="primary-font-semi-bold-italic"
        color="#4891FF"
        borderBottom="1px solid #4891FF"
      >
        (Complex)
      </Text>
      <Modal
        size={'sm'}
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
            top="5px"
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
                Complex Pricing Details
              </Text>
            </Flex>
            <Divider className="mx-5 mt-4" />

            <Flex mt="10px" justifyContent="center" alignItems="center">
              <Text
                color="#41454B"
                className="primary-font-semi-bold-italic"
                fontSize="14px"
              >
                SKU :
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  #1426384,
                </span>{' '}
              </Text>
            </Flex>
            <Flex mt="2px" justifyContent="center" alignItems="center">
              <Text
                color="#41454B"
                className="primary-font-semi-bold-italic"
                fontSize="14px"
              >
                Product Name:
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  Volts Cannabis CBD Capsules,
                </span>{' '}
              </Text>
            </Flex>
            <Text
              color="#FF8A43"
              className="primary-font-semi-bold-italic"
              fontSize="14px"
              ml="10px"
              mt="1em"
            >
              Pricing Details
            </Text>
            <Flex
              width="100%"
              px="2em"
              mt="1em"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                w="100%"
                border="0.5px solid rgba(65, 69, 75, 0.70)"
                padding="10px"
                borderRadius="10px"
              >
                <Flex justifyContent="space-between">
                  <Label
                    fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                    className="primary-font-semibold"
                  >
                    Weight
                  </Label>
                  <Label
                    fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                    className="primary-font-semibold"
                  >
                    Price
                  </Label>
                </Flex>
                <Divider />
                {pricingData.map((item, index: any) => (
                  <Flex
                    justifyContent="space-between"
                    _hover={{
                      background: '#FF8A43',
                    }}
                    px="10px"
                    key={index}
                    mt="12px"
                  >
                    <Label
                      fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                      className="primary-font-semibold"
                    >
                      {item.weight}
                    </Label>
                    <Text
                      borderRadius="4px"
                      color="rgba(65, 69, 75, 0.70)"
                      className="primary-font-medium"
                      padding="2px 12px"
                      fontSize="12px"
                      textAlign="center"
                    >
                      {item.price}
                    </Text>
                  </Flex>
                ))}
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ComplexPricingModel;
