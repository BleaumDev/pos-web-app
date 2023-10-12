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
import React from 'react';

import MedicalModel from './medical-model';
import RecreationalModel from './recreational-model';

const PosModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        p="10px 24px"
        color="#fff"
        fontSize="16px"
        cursor="pointer"
        _hover={{ background: '#FF8A43' }}
        className="primary-font-medium"
        border="2px solid #fff"
        onClick={onOpen}
        borderRadius="33px"
        background="#FF8A43"
      >
        POS
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
                color="#000"
                className="primary-font-medium"
                fontSize="16px"
              >
                Welcome back to
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

export default PosModel;
