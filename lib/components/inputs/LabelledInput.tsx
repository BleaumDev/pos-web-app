import { Box, FormLabel, Input } from '@chakra-ui/react';

interface ILabelledInputProps {
  label: string;
  placeholderText?: string;
}

export default function LabelledInput({
  label,
  placeholderText = '',
}: ILabelledInputProps): React.ReactElement {
  return (
    <Box>
      <FormLabel h={6} className="primary-font-semibold mt-7" color="#41454B">
        {label}
      </FormLabel>
      <Input
        type="text"
        borderWidth={2}
        style={{
          borderColor: 'rgba(18, 23, 30, 0.40)',
          borderWidth: 0.5,
        }}
        placeholder={placeholderText}
      />
    </Box>
  );
}
