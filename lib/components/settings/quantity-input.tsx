import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'; // Assuming you're using Chakra UI
import React from 'react';
import { default as ReactSelect } from 'react-select';

const options = [
  { value: 'Each', label: 'Each' },
  { value: 'Grams', label: 'Grams' },
  { value: 'Oz(Fluids/Solid)', label: 'Oz(Fluids/Solid)' },
  { value: 'Milligrams', label: 'Milligrams' },
];

interface CustomSelectInputProps {
  inputPlaceholder: string;
}

const QuantitySelectInput: React.FC<CustomSelectInputProps> = ({
  inputPlaceholder,
}) => {
  return (
    <InputGroup>
      <Input
        background="#fff"
        className="primary-font-medium"
        h="33px"
        fontSize="12px"
        w="300px"
        type="number"
        placeholder={inputPlaceholder}
      />
      <InputRightAddon
        background="transparent"
        border="none"
        h="33px"
        pt="0.5em"
        fontSize="12px"
        cursor="pointer"
      >
        <ReactSelect
          styles={{
            placeholder: (baseStyles) => ({
              ...baseStyles,
              color: '#777a !important',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'start',
              paddingRight: '10px',
              zIndex: 1,
              paddingLeft: '10px',
            }),
            valueContainer: (baseStyles: any) => ({
              ...baseStyles,
              padding: '0px',
            }),
            singleValue: (baseStyles: any) => ({
              ...baseStyles,
              padding: '2px 8px',
            }),
            menuList: (baseStyles: any) => ({
              ...baseStyles,
              background: '#F6FCFF',
              position: 'absolute',
              width: '100%',
              zIndex: 9999,
              borderRadius: '5px',
              boxShadow: '2px 4px 40px 0px rgba(0, 0, 0, 0.15)',
              boxSizing: 'border-box',
            }),
            menu: (baseStyles: any) => ({
              ...baseStyles,
              outline: 'none !important',
              border: 'none !important',
              width: '150px',
              boxShadow: 'none !important',
              marginTop: '0px',
              marginLeft: '-6em',
              zIndex: 9999,
            }),
            option: (baseStyles: any, state: { isSelected: any }) => ({
              ...baseStyles,
              '&:hover': {
                background: '#FF8A43',
                color: '#fff',
              },
              zIndex: 9999,

              color: state.isSelected
                ? 'rgba(65, 69, 75, 1)'
                : 'rgba(65, 69, 75, 0.50)',
              backgroundColor: state.isSelected ? '#fff' : '#fff',
              fontWeight: '500',
            }),
            input: (baseStyles: any) => ({
              ...baseStyles,
              border: 'none !important',
              background: '#FFE8DF !important',
              boxShadow: 'none !important',
              outline: 'none !important',
              minWidth: '100px',

              paddingRight: '10px',
              paddingLeft: '10px',
            }),
            control: (baseStyles: any) => ({
              ...baseStyles,
              borderRadius: '0px 8px 8px 0px ',
              fontSize: '14px',
              position: 'absolute !important',
              top: '-23px !important',
              minHeight: '33px',
              marginTop: '3px',
              marginLeft: '-15px',
              background: 'rgba(246, 252, 255, 1) !important',
              border: '0.5px solid rgba(18, 23, 30, 0.10)',
              boxSizing: 'border-box',
              width: '100px',
              height: '33px',
            }),
            // Style for the clear indicator (cross icon)
            clearIndicator: (provided) => ({
              ...provided,
              display: 'none', // Hide the clear indicator
            }),
            container: (baseStyles) => ({
              ...baseStyles,
              input: {
                background: 'none !important',
                boxShadow: 'none !important',

                outline: 'none !important',
                minWidth: '50px',
              },
              '& input:focus': {
                background: 'none !important',
                boxShadow: 'none !important',
                outline: 'none !important',
                border: 'none !important',
              },
            }),
          }}
          isClearable
          options={options}
          isSearchable={false}
          placeholder={'Select...'}
        />
      </InputRightAddon>
    </InputGroup>
  );
};

export default QuantitySelectInput;
