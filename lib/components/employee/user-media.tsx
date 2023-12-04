import { Box, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Label from '../base/label';
import UploadSingleImage from '../base/upload-single-image';

const states = ['California', 'Texas', 'Florida'];

const UserMediaPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Box>
      {isClient && (
        <Box>
          <Stack mt="1em">
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Profile Image
            </Label>

            <Box ml="0em">
              <UploadSingleImage
                widthSelectedImage="164px"
                heightSelectedImage="136px"
                widthOfDefaultImage="164px"
                defaultImage="/images/upload-Image.png"
                addButton
              />
            </Box>
          </Stack>
          <Stack w="100%" mt="2em">
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '14px' }}
              className="primary-font-semibold"
            >
              Identification Document
            </Label>

            <Box ml="0em">
              <UploadSingleImage
                widthSelectedImage="246px"
                heightSelectedImage="168px"
                widthOfDefaultImage="246px"
                defaultImage="/images/upload-license.png"
                addButton
              />
            </Box>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default UserMediaPage;
