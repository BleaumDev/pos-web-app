import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { useState } from 'react';

const TaxRateInput = () => {
  const [addonText, setAddonText] = useState('$');

  const toggleAddonText = () => {
    setAddonText((prevText) => (prevText === '$' ? '%' : '$'));
  };

  return (
    <InputGroup>
      <Input
        background="#fff"
        className="primary-font-medium"
        h="33px"
        fontSize="12px"
        type="number"
        placeholder="Enter The Tax Rate"
      />
      <InputRightAddon
        background="#fff"
        h="33px"
        pt="0.5em"
        fontSize="12px"
        onClick={toggleAddonText}
        cursor="pointer"
      >
        {addonText}
      </InputRightAddon>
    </InputGroup>
  );
};

export default TaxRateInput;
