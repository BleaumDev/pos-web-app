/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

import { Box, Flex, Img, Input } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component

import Button from './button';

interface UploadMultipleImagesProps {
  widthSelectedImage: string;
  heightSelectedImage: string;
  defaultImages?: string[];
  widthOfDefaultImage?: string;
  addButton?: boolean;
}

const UploadMultipleImages: React.FC<UploadMultipleImagesProps> = ({
  widthSelectedImage,
  heightSelectedImage,
  widthOfDefaultImage,
  addButton,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const imageUrls = acceptedFiles.map((file) => URL.createObjectURL(file));
      setSelectedFiles([...selectedFiles, ...imageUrls]);
    },
  });

  const handleAddImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const renderAddImageButton = () => {
    if (addButton) {
      return (
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
      );
    }
    return null;
  };

  return (
    <Box>
      {selectedFiles.length > 0 ? (
        <Flex pl="2em" position="relative">
          <Carousel showArrows dynamicHeight width="200px">
            {selectedFiles.map((imageUrl, index) => (
              <div key={index}>
                <Img
                  src={imageUrl}
                  alt={`Uploaded Image ${index + 1}`}
                  w={widthSelectedImage}
                  h={heightSelectedImage}
                  borderRadius="9px"
                  objectFit="cover"
                />
                {renderAddImageButton()}
                <Box
                  position="absolute"
                  top="2em"
                  right="2em"
                  cursor="pointer"
                  onClick={() => handleRemoveImage(index)}
                >
                  <Img src="/images/close-circle.png" w="16px" />
                </Box>
              </div>
            ))}
          </Carousel>
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
              src="/images/upload-Image.png"
              alt="Uploaded Image"
              w={widthOfDefaultImage}
            />
            {renderAddImageButton()}
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

export default UploadMultipleImages;
