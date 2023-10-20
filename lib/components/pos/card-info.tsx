/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { Flex, Input, Text } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';
import { useRef } from 'react';

const CardInfo = () => {
  const cardNumberInputRefs = Array.from({ length: 4 }, () =>
    useRef<HTMLInputElement>(null)
  );
  const expiryDateInputRef = useRef<HTMLInputElement>(null);
  const cvvInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    inputRefs: React.RefObject<HTMLInputElement>[]
  ) => {
    if (e.target.value.length === 0 && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (e.target.value.length === 4 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleExpiryDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length === 2 && value.indexOf('/') === -1) {
      e.target.value = `${value}/`;
    }
  };

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mt="1em">
        <Text
          color="#41454B"
          fontSize="14px"
          className="primary-font-semi-bold-italic"
        >
          Card No.
        </Text>
        <Flex w="200px" gap="10px">
          {cardNumberInputRefs.map((inputRef, index) => (
            <Input
              key={index}
              p="0px"
              ref={inputRef}
              background="#f0f0f1 !important"
              color="#FFA382"
              maxLength={4}
              textAlign="center"
              height="24px"
              borderRadius="2px"
              fontSize="13px"
              className="primary-font-semi-bold-italic"
              onChange={(e) => handleInputChange(e, index, cardNumberInputRefs)}
            />
          ))}
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mt="1em">
        <Text
          color="#41454B"
          fontSize="14px"
          className="primary-font-semi-bold-italic"
        >
          Expiry Date
        </Text>
        <Input
          p="0px"
          ref={expiryDateInputRef}
          background="#f0f0f1 !important"
          color="#FFA382"
          maxLength={5}
          textAlign="center"
          height="24px"
          w="80px"
          borderRadius="2px"
          fontSize="12px"
          className="primary-font-semi-bold-italic"
          placeholder="MM/YY"
          onChange={handleExpiryDateChange}
        />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mt="1em">
        <Text
          color="#41454B"
          fontSize="14px"
          className="primary-font-semi-bold-italic"
        >
          CVV
        </Text>
        <Input
          p="0px"
          ref={cvvInputRef}
          background="#f0f0f1 !important"
          color="#FFA382"
          maxLength={3}
          textAlign="center"
          height="22px"
          w="80px"
          borderRadius="2px"
          fontSize="14px"
          className="primary-font-semi-bold-italic"
        />
      </Flex>
    </>
  );
};

export default CardInfo;
