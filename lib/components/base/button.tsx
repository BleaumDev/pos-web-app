import type { ButtonProps } from '@chakra-ui/react';
import { Button as BaseButton } from '@chakra-ui/react';
import type { RefObject } from 'react';
import React from 'react';

export interface BaseButtonPropsType extends ButtonProps {
  children?: React.ReactNode;
  ref?: RefObject<HTMLButtonElement>;
  styledVariant?: 'outline' | 'blue';
}

function Button({
  children,
  styledVariant,
  ref,
  ...props
}: BaseButtonPropsType) {
  let buttonStyleProps: ButtonProps = {
    borderRadius: '10px',
    px: '2.5rem',
    bg: '#00c2cb',
    color: 'white',
    _hover: {
      background: '#00c2cbaa',
    },
    boxShadow: '0px 8px 22px #00C2CB59',
  };

  if (styledVariant === 'outline') {
    buttonStyleProps = {
      ...buttonStyleProps,
      bg: 'transparent',
      color: '#192837 ',
      border: '1px solid #192837',
      _hover: {
        bg: 'transparent',
      },
      boxShadow: 'none',
    };
  } else if (styledVariant === 'blue') {
    buttonStyleProps = {
      ...buttonStyleProps,
      bg: 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
      _hover: {
        bg: 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
      },
      boxShadow: 'none',
    };
  }

  return (
    <BaseButton size="lg" ref={ref} {...buttonStyleProps} {...props}>
      {children}
    </BaseButton>
  );
}

export default Button;
