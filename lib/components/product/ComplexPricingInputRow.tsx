import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Input from '../base/input';
import Label from '../base/label';
export default function ComplexPricingInputRow(): React.ReactElement {
  const [pricingData, setPricingData] = useState([{ weight: '', price: '' }]);

  const handleAddRow = () => {
    setPricingData([...pricingData, { weight: '', price: '' }]);
  };

  const handleDeleteRow = (index: number) => {
    if (pricingData.length > 1) {
      const updatedData = [...pricingData];
      updatedData.splice(index, 1);
      setPricingData(updatedData);
    }
  };

  const handleWeightChange = (value: string, index: number) => {
    const updatedData = [...pricingData];
    updatedData[index].weight = value;
    setPricingData(updatedData);
  };

  const handlePriceChange = (value: string, index: number) => {
    const updatedData = [...pricingData];
    updatedData[index].price = value;
    setPricingData(updatedData);
  };

  return (
    <Box>
      {pricingData.map((row, index) => (
        <Flex key={index} gap="30px" mt="14px">
          <Stack>
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Weight
            </Label>
            <Box mt="-5px">
              <Input
                placeholder="Insert weight"
                h="33px"
                value={row.weight}
                onChange={(e) => handleWeightChange(e.target.value, index)}
              />
            </Box>
          </Stack>
          <Stack>
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Price
            </Label>
            <Box mt="-5px">
              <Input
                placeholder="Insert price"
                h="33px"
                value={row.price}
                onChange={(e) => handlePriceChange(e.target.value, index)}
              />
            </Box>
          </Stack>
          {pricingData.length > 1 && (
            <IconButton
              icon={<DeleteIcon />}
              aria-label="Delete row"
              color="#FFA382"
              background="none"
              mt="1.5em"
              ml="-2em"
              onClick={() => handleDeleteRow(index)}
            />
          )}
        </Flex>
      ))}
      <Box mt={4}>
        <Label
          fontSize={{ base: '12px', sm: '14px', md: '14px' }}
          className="primary-font-semibold"
          onClick={handleAddRow}
          cursor="pointer"
          color="#FFA382"
          display="flex"
          alignItems="center"
        >
          <AddIcon fontSize="10px" mr={2} />
          Add more
        </Label>
      </Box>
    </Box>
  );
}
