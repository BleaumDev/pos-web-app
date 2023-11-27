import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'; // Assuming you're using Chakra UI
import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const CustomSelect = styled(Select)`
  margin-bottom: 20px;
  width: 100px;
`;

const customStyles = {
  placeholder: (baseStyles: any) => ({
    ...baseStyles,
    color: '#777a !important',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'start',
    width: '60px',

    justifyContent: 'start',
    paddingRight: '10px',
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
    color: state.isSelected ? 'rgba(65, 69, 75, 1)' : 'rgba(65, 69, 75, 0.50)',
    backgroundColor: state.isSelected ? '#fff' : '#fff',
    fontWeight: '500',
  }),
  input: (baseStyles: any) => ({
    ...baseStyles,
    border: 'none !important',
    background: '#FFE8DF !important',
    boxShadow: 'none !important',
    outline: 'none !important',
    minWidth: '50px',

    paddingRight: '10px',
    paddingLeft: '10px',
  }),
  control: (baseStyles: any) => ({
    ...baseStyles,
    borderRadius: '0px 8px 8px 0px ',
    fontSize: '14px',
    minHeight: '33px',
    marginTop: '14px',
    marginLeft: '-15px',
    background: 'rgba(246, 252, 255, 1) !important',
    border: '0.5px solid rgba(18, 23, 30, 0.10)',
    boxSizing: 'border-box',
    width: 'auto',
    height: '33px',
  }),
  // Style for the clear indicator (cross icon)
  clearIndicator: (provided: any) => ({
    ...provided,
    display: 'none', // Hide the clear indicator
  }),
  container: (baseStyles: any) => ({
    ...baseStyles,
    input: {
      background: '#FFE8DF !important',
      boxShadow: 'none !important',
      outline: 'none !important',
      minWidth: '50px',
    },
    '& input:focus': {
      background: '#F6FCFF !important',
      boxShadow: 'none !important',
      outline: 'none !important',
      border: 'none !important',
    },
  }),
};

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
        <CustomSelect
          options={options}
          styles={customStyles}
          isSearchable={false}
        />
      </InputRightAddon>
    </InputGroup>
  );
};

export default QuantitySelectInput;
