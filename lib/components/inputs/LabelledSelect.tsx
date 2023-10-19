import type { SelectProps } from '@chakra-ui/react';
import { FormLabel, Select } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';

interface ILabelledSelectProps extends SelectProps {
  label: string;
  options: { value: string; label: string }[];
  backgroundColor?: string;
  textColor?: string;
}

export default function LabelledSelect({
  label,
  options,
  backgroundColor = 'white',
  textColor = 'black',
}: ILabelledSelectProps): React.ReactElement {
  return (
    <>
      <FormLabel
        h={6}
        className="primary-font-semibold mt-4 font-normal text-md"
        fontWeight="medium"
        color="#41454B"
      >
        {label}
      </FormLabel>
      <Select
        backgroundColor={backgroundColor}
        color={textColor}
        className="primary-font-medium"
        style={{
          borderColor: 'rgba(18, 23, 30, 0.40)',
          borderWidth: 0.5,
        }}
      >
        {options.map((option) => (
          <option key={nanoid()} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </>
  );
}
