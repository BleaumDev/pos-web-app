/* eslint-disable react-hooks/rules-of-hooks */
import type { UseDisclosureProps } from '@chakra-ui/react';
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
import PosNavbar from '@lib/components/Layout/Sidebar/PosNavbar';
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
              Choose Order Type
            </Text>
            <Link href="/pos">
              <Button
                w="full"
                borderRadius="8px"
                border="0.4px solid #192837"
                bg="#EBFBFF"
                _hover={{
                  background:
                    'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                  color: '#fff',
                }}
                mt="10px"
                className="primary-font-medium"
                fontSize="12px"
              >
                New Order
              </Button>
            </Link>
            <Link href="/pos">
              <Button
                w="full"
                borderRadius="8px"
                border="0.4px solid #192837"
                bg="#EBFBFF"
                _hover={{
                  background:
                    'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                  color: '#fff',
                }}
                mt="10px"
                className="primary-font-medium"
                fontSize="12px"
              >
                Pending Order
              </Button>
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default index;
