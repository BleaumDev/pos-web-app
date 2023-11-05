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

const DeleteOrderModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        src="/images/more.png"
        id="img_col"
        width="30px"
        onClick={onOpen}
        ml={{
          base: '1em',
          md: '4em',
        }}
        style={{ cursor: 'pointer' }}
        height="30px"
        alt=""
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
          <ModalBody>
            <Flex justifyContent="center" alignItems="center">
              <Text
                color="#FF4040 "
                className="primary-font-extraBold"
                fontSize="16px"
              >
                Delete Order?
              </Text>
            </Flex>
            <Divider
              border="1px solid"
              mt="5px"
              borderColor="rgba(65, 69, 75, 0.30)"
            />
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
                Do you want to Delete this order?
              </Text>
            </Flex>
            <Box textAlign="center">
              <Button styledVariant="delete" w="full" mt="2em">
                Delete
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteOrderModel;
