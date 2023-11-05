import type { TextProps } from '@chakra-ui/react';
import { Text as BaseText } from '@chakra-ui/react';
import type { RefObject } from 'react';
import React from 'react';

export interface BaseTextPropsType extends TextProps {
  children?: React.ReactNode;
  ref?: RefObject<HTMLButtonElement>;
  styledVariant?: 'textMedium' | 'textLabel' | 'textSemiBold';
}

function Text({ children, styledVariant, ref, ...props }: BaseTextPropsType) {
  let textStyleProps: TextProps = {};

  if (styledVariant === 'textMedium') {
    textStyleProps = {
      ...textStyleProps,
      color: 'rgba(65, 69, 75, 0.70) ',
      className: 'primary-font-medium',

      fontSize: '14px',
    };
  } else if (styledVariant === 'textLabel') {
    textStyleProps = {
      ...textStyleProps,
      bg: 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
      _hover: {
        bg: 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
      },
      boxShadow: 'none',
    };
  } else if (styledVariant === 'textSemiBold') {
    textStyleProps = {
      ...textStyleProps,
      color: 'rgba(65, 69, 75, 0.70) ',
      className: 'primary-font-semibold',

      fontSize: '14px',
    };
  }

  return (
    <BaseText
      size="lg"
      ref={ref as RefObject<HTMLParagraphElement> | null | undefined}
      {...textStyleProps}
      {...props}
    >
      {children}
    </BaseText>
  );
}

export default Text;
