// eslint-disable-next-line simple-import-sort/imports
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, IconButton, Input } from '@chakra-ui/react';
import { useState } from 'react';

import { baseInputStyles, type BaseInputProps } from '../base/input';
import ErrorMessage from '../ErrorMessage';

function PasswordInput({ helpText, ...props }: BaseInputProps) {
  const [view, setView] = useState<boolean>(false);

  const toggleView = () => {
    setView((prevView) => !prevView);
  };

  return (
    <>
      <Box position="relative">
        <Input
          {...baseInputStyles}
          {...props}
          className="primary-font-regular-italic"
          type={view ? 'text' : 'password'}
        />
        <IconButton
          aria-label="view-icon"
          cursor="pointer"
          rounded="full"
          position="absolute"
          right="2"
          top="50%"
          color="#12171E33"
          transform="translateY(-50%)"
          zIndex={3}
          bg="transparent"
          icon={view ? <ViewOffIcon /> : <ViewIcon />}
          onClick={toggleView}
        />
      </Box>

      {Boolean(helpText) && (
        <ErrorMessage mx={2} margin={0} message={helpText} touched />
      )}
    </>
  );
}

export default PasswordInput;
