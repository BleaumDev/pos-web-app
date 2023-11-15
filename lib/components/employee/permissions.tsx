import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Divider,
  Flex,
  Text,
} from '@chakra-ui/react';

const PermissionsPage = () => {
  return (
    <>
      <Flex gap="200px">
        <Checkbox w="20px" />
        <Text className="primary-font-semibold" fontSize="14px" color="#41454B">
          Policy Name
        </Text>
        <Text className="primary-font-semibold" fontSize="14px" color="#41454B">
          Type
        </Text>
        <Text className="primary-font-semibold" fontSize="14px" color="#41454B">
          Description
        </Text>
      </Flex>
      <Divider className="mx-5 mt-4" />
      <Flex height="200px">
        <Checkbox mt="10px" position="absolute" ml="-10px" />
        <Accordion w="100%" position="absolute" allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </>
  );
};

export default PermissionsPage;
