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
import Button from '../base/button';

const CancelModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        p="6px 12px"
        borderRadius="9px"
        border="0.5px solid #fff"
        onClick={onOpen}
        h="30px"
        color="#fff"
        fontSize="12px"
        _hover={{
          background: 'linear-gradient(238deg, #FF1E1E 23.36%, #FF4040 93.56%)',
        }}
        className="primary-font-semibold"
        boxShadow="0px 4px 4px 0px rgba(156, 156, 156, 0.23)"
        bg="linear-gradient(238deg, #FF1E1E 23.36%, #FF4040 93.56%)"
      >
        Cancel
      </Button>
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
          <ModalBody>
            <Flex justifyContent="center" alignItems="center">
              <Text
                color="#FF4040 "
                className="primary-font-extraBold"
                fontSize="16px"
              >
                Cancel Order?
              </Text>
            </Flex>
            <Divider className="mx-5 mt-4" />

            <Flex mt="10px" justifyContent="center" alignItems="center">
              <Text
                color="#41454B"
                className="primary-font-semi-bold-italic"
                fontSize="14px"
              >
                Order no.{' '}
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  #185,
                </span>{' '}
                Ordered by{' '}
                <span
                  style={{
                    color: '#FF8A43',
                  }}
                >
                  Devon Lane
                </span>{' '}
                at
              </Text>
            </Flex>
            <Flex mt="0px" justifyContent="center" alignItems="center">
              <Text
                color="#FF8A43"
                className="primary-font-semi-bold-italic"
                fontSize="14px"
              >
                23rd September, 2022
              </Text>
            </Flex>
            <Flex mt="10px" justifyContent="center" alignItems="center">
              <Text
                color="#41454B"
                className="primary-font-semi-bold-italic"
                fontSize="14px"
              >
                Do you want to Cancel this order?
              </Text>
            </Flex>
            <Box textAlign="center">
              <Button styledVariant="delete" w="full" mt="2em">
                Confirm Cancel
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CancelModel;
