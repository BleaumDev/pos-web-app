import type { InputProps } from '@chakra-ui/react';
import { Box, Input as BaseInput } from '@chakra-ui/react';
import type { ForwardRefRenderFunction } from 'react';
import { forwardRef } from 'react';

import ErrorMessage from '../ErrorMessage';

export interface BaseInputProps extends InputProps {
  helpText?: string;
}

export const baseInputStyles: InputProps = {
  color: '#41454B !important',
  className: 'primary-font-medium',
  borderRadius: '4px',
  fontSize: { base: '12px', md: '14px' },
  h: { base: '35px', md: '40px' },
  boxSizing: 'border-box',
  background: '#FFFFFF !important',
  border: '1px solid rgba(18, 23, 30, 0.20)',
  outline: 'none',
};

const InputComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  BaseInputProps
> = ({ helpText, height, ...props }, ref) => {
  return (
    <Box style={{ flexGrow: 1 }}>
      <BaseInput
        ref={ref}
        {...baseInputStyles}
        h={height ?? baseInputStyles.h}
        {...props}
      />
      {Boolean(helpText) && (
        <ErrorMessage mx={2} margin={0} message={helpText} touched />
      )}
    </Box>
  );
};

const Input = forwardRef(InputComponent);

Input.displayName = 'Input';

export default Input;
