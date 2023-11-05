import {
  Box,
  Button,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';

import Select from '../base/select';
import MedicalSelect from '../pos/medical-select';

const medicalData = [
  {
    key: 'Wade Warren',
    value: 'Wade Warren',
    label: (
      <Link href="/pos/payments">
        <MedicalSelect
          imageSrc="/images/profile1.png"
          name="Wade Warren"
          licensecode="AP-FA"
          licensenumber="AA-HR4P-VQOO-RDAK-C6W9-8J"
        />
      </Link>
    ),
  },
  {
    key: 'John Wick',
    value: 'John Wick',
    label: (
      <Link href="/pos/payments">
        <MedicalSelect
          imageSrc="/images/profile2.png"
          name="Wade Warren"
          licensecode="AP-FA"
          licensenumber="AB-45HS-LOWO-JCEA-1CKW-5A"
        />
      </Link>
    ),
  },
  {
    key: 'John Wick',
    value: 'John Wick',
    label: (
      <Link href="/pos/payments">
        <MedicalSelect
          imageSrc="/images/profile3.png"
          name="Raphael Nadal"
          licensecode="AP-FA"
          licensenumber="AL-ASAE-6SHE-L22W-LA4W-5A"
        />
      </Link>
    ),
  },
];
const MedicalModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSelectChange = () => {};

  return (
    <>
      <Button
        w="full"
        borderRadius="8px"
        border="0.4px solid #192837"
        bg="#EBFBFF"
        onClick={onOpen}
        _hover={{
          background: 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
          color: '#fff',
        }}
        mt="10px"
        className="primary-font-medium"
        fontSize="12px"
      >
        Medical
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
            <a href="/pos">
              <Img
                src="/images/arrow-square.png"
                alt="arrow-square"
                width="32px"
                height="32px"
                position="relative"
                top="-3em"
              />
            </a>
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
              Medical ID
            </Text>
            <Select
              name="sort"
              height="38px"
              placeholder="Enter your Medical ID here"
              options={medicalData}
              onChange={handleSelectChange}
            />
            <Text
              color="#41454B"
              my="5px"
              fontSize="14px"
              className="primary-font-semibold"
              textAlign="center"
            >
              or
            </Text>
            <Text
              color="#41454B"
              fontSize="14px"
              my="5px"
              className="primary-font-semi-bold-italic"
              textAlign="center"
            >
              Simply Scan your Licence
            </Text>
            <Box textAlign="center">
              <Button
                w="124px"
                h="45px"
                borderRadius="8px"
                color="#fff"
                border="1px solid #fff"
                bg="#FF8A43"
                mt="10px"
                _hover={{
                  background: '#FF8A43',
                  color: '#fff',
                }}
                className="primary-font-medium"
                fontSize="14px"
              >
                Scan
              </Button>
            </Box>
            <Flex justifyContent="center" textAlign="center" mt="1em" gap="1em">
              <Text
                fontSize="14px"
                color="#41454B"
                className="primary-font-semibold"
              >
                Don’t have an account?
              </Text>
              <Link href="/admin/customers/add-customer">
                <Text
                  fontSize="14px"
                  color="#1098FF"
                  className="primary-font-semibold"
                >
                  Create new account
                </Text>
              </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MedicalModel;
