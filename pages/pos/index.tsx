/* eslint-disable react-hooks/rules-of-hooks */
import {
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  UseDisclosureProps,
} from '@chakra-ui/react';
import PosNavbar from '@lib/components/Layout/Sidebar/PosNavbar';
import MedicalModel from '@lib/components/models/medical-model';
import RecreationalModel from '@lib/components/models/recreational-model';
import Link from 'next/link';
import { useState } from 'react';

const index = () => {
  const [defaultIsOpen] = useState(true);
  const { isOpen, onClose } = useDisclosure({
    defaultIsOpen,
  } as UseDisclosureProps);
  return (
    <div>
      <PosNavbar />
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent
          border="0.4px solid #000"
          borderRadius="24px"
          bg="#fff"
          p="60px 10px"
        >
          <ModalBody>
            <Link href="/pos/order-type">
              <Img
                src="/images/arrow-square.png"
                alt="arrow-square"
                width="32px"
                height="32px"
                position="relative"
                top="-3em"
              />
            </Link>
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
    </div>
  );
};

export default index;
