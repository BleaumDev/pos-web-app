import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import MedicalModel from './medical-model';
import RecreationalModel from './recreational-model';

const CancelModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        p="6px 12px"
        borderRadius="9px"
        border="0.5px solid #fff"
        onClick={onOpen}
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
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          border="0.4px solid #000"
          borderRadius="24px"
          bg="#fff"
          p="60px 10px"
        >
          <ModalBody>
            <Flex justifyContent="center" alignItems="center">
              <Text
                color="#FF4040"
                className="primary-font-medium"
                fontSize="16px"
              >
                Cancel Order?
              </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              <Text
                color="#000"
                className="primary-font-extraBold"
                fontSize="30px"
              >
                Bleaum POS
              </Text>
            </Flex>
            <Text
              mt="20px"
              color="#41454B"
              className="primary-font-medium"
              fontSize="14px"
            >
              Choose Customer Type
            </Text>
            <MedicalModel />
            <RecreationalModel />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CancelModel;
