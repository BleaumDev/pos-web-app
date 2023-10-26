import { Box, Flex, Img, Input } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import Button from './button';

interface UploadSingleImageProps {
  widthSelectedImage: string;
  heightSelectedImage: string;
  defaultImage?: string;
  widthOfDefaultImage?: string;
  addButton?: boolean;
}

const UploadSingleImage: React.FC<UploadSingleImageProps> = ({
  widthSelectedImage,
  heightSelectedImage,
  defaultImage,
  widthOfDefaultImage,
  addButton,
}) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const imageUrl = URL.createObjectURL(acceptedFiles[0]);
      setSelectedFile(imageUrl);
    },
  });

  const handleAddImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
  };

  return (
    <Box>
      {selectedFile ? (
        <Flex pl="2em" position="relative">
          <Box
            display="grid"
            position="relative"
            justifyItems="center"
            alignItems="start"
          >
            <Img
              src={selectedFile}
              alt="Uploaded Image"
              w={widthSelectedImage}
              h={heightSelectedImage}
              borderRadius="9px"
              objectFit="cover"
            />
            {addButton && (
              <Button
                styledVariant="blue"
                fontSize="12px"
                w="136px"
                h="33px"
                mt="10px"
                className="primary-font-semibold"
                onClick={handleAddImageClick}
              >
                <Img src="/images/gallery-add.png" w="16px" />
                Add Image
              </Button>
            )}
            <Box
              position="absolute"
              top="-1.3em"
              right="5px"
              cursor="pointer"
              onClick={handleRemoveImage}
            >
              <Img src="/images/close-circle.png" w="16px" />
            </Box>
          </Box>
        </Flex>
      ) : (
        <Flex pl="12px">
          <Box
            display="grid"
            justifyItems="center"
            alignItems="start"
            {...getRootProps()}
          >
            <Img
              src={defaultImage}
              alt="Uploaded Image"
              w={widthOfDefaultImage}
            />
            {addButton && (
              <Button
                styledVariant="blue"
                fontSize="12px"
                w="136px"
                h="33px"
                mt="10px"
                className="primary-font-semibold"
              >
                <Img src="/images/gallery-add.png" w="16px" />
                Add Image
              </Button>
            )}
            <input {...getInputProps()} style={{ display: 'none' }} />
          </Box>
        </Flex>
      )}
      <Input
        type="file"
        accept="image/*"
        onChange={handleAddImageClick}
        style={{ display: 'none' }}
        ref={(input) => {
          if (input) {
            fileInputRef.current = input;
          }
        }}
      />
    </Box>
  );
};

export default UploadSingleImage;
