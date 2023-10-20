import type { InputProps } from '@chakra-ui/react';
import {
  Box,
  Img,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import type { ForwardRefRenderFunction } from 'react';
import { forwardRef } from 'react';

import ErrorMessage from '../ErrorMessage';

export interface BaseInputProps extends InputProps {
  helpText?: string;
  withArrow?: boolean; // New prop to control the arrow icon
}

export const baseInputStyles: InputProps = {
  color: '#fff !important',
  className: 'primary-font-medium',
  borderRadius: '4px',
  fontSize: { base: '12px', md: '14px' },
  h: { base: '33px', md: '33px' },
  boxSizing: 'border-box',
  _placeholder: {
    color: '#fff !important',
    opacity: 1,
  },
  background: '#FFA382 !important',
  border: '0.5px solid rgba(65, 69, 75, 0.30)',
  outline: 'none',
};

const InputComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  BaseInputProps
> = ({ helpText, withArrow, height, ...props }, ref) => {
  return (
    <Box style={{ flexGrow: 1 }}>
      <InputGroup>
        <Input
          ref={ref}
          {...baseInputStyles}
          readOnly
          h={height ?? baseInputStyles.h}
          {...props}
        />
        {withArrow && (
          <InputRightElement>
            <Img src="/images/down-white.png" w="12px" mt="-7px" />
          </InputRightElement>
        )}
      </InputGroup>
      {Boolean(helpText) && (
        <ErrorMessage mx={2} margin={0} message={helpText} touched />
      )}
    </Box>
  );
};

const ReadOnly = forwardRef(InputComponent);

ReadOnly.displayName = 'Input';

export default ReadOnly;
