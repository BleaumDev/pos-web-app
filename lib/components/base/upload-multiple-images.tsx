/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

import { Box, Flex, Icon, Img, Input } from '@chakra-ui/react';
import Button from './button';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { nanoid } from '@reduxjs/toolkit';
import { FileWithPath, useDropzone } from 'react-dropzone';
import SwiperInstance from 'swiper';
import { Navigation } from 'swiper/modules';

SwiperCore.use([Navigation]);

interface UploadMultipleImagesProps {
  widthSelectedImage: string;
  heightSelectedImage: string;
  widthOfDefaultImage?: string;
  addButton?: boolean;
}

const UploadMultipleImages: React.FC<UploadMultipleImagesProps> = ({
  widthSelectedImage,
  heightSelectedImage,
  widthOfDefaultImage,
  addButton,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<FileWithPath[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: FileWithPath[]) => {
      const imageUrls = acceptedFiles.map((file) => URL.createObjectURL(file));
      setSelectedFiles((prevSelectedFiles) => [
        ...prevSelectedFiles,
        ...acceptedFiles,
      ]);
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
        <Flex justifyContent="center" alignItems="center" mt="1em">
          <Button
            styledVariant="blue"
            fontSize="12px"
            w="136px"
            h="33px"
            className="primary-font-semibold"
          >
            <Img src="/images/gallery-add.png" w="16px" mr="10px" />
            Add Images
          </Button>
        </Flex>
      );
    }
    return null;
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [selectedFiles]);

  return (
    <Box>
      {selectedFiles.length > 0 ? (
        <Flex position="relative" mt="6em">
          <Swiper
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            onSwiper={(swiper: any) => {
              swiperRef.current = swiper;
            }}
          >
            {selectedFiles.map((imageUrl, index) => (
              <SwiperSlide
                key={nanoid()}
                style={{
                  transform:
                    index === selectedFiles.length - 1
                      ? 'translate(0%, 0px)'
                      : 'translate(30%, 0px)',
                }}
              >
                <Box position="relative">
                  <Img
                    src={
                      typeof imageUrl === 'string'
                        ? imageUrl
                        : URL.createObjectURL(imageUrl)
                    }
                    alt={`Uploaded Image ${index + 1}`}
                    w={widthSelectedImage}
                    h={heightSelectedImage}
                    borderRadius="9px"
                    objectFit="cover"
                  />
                  <Box
                    className="remove-image-button"
                    position="absolute"
                    top="4px"
                    left="8.3em"
                    cursor="pointer"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <Img src="/images/close-circle-grey.png" w="25px" />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Box>
            <div className="swiper-button-next">
              <Icon
                as={ChevronRightIcon}
                w={6}
                h={6}
                color="rgba(65, 69, 75, 1)"
              />
            </div>
          </Box>
          <div className="swiper-button-prev">
            <Icon
              as={ChevronLeftIcon}
              w={6}
              h={6}
              color="rgba(65, 69, 75, 1)"
            />
          </div>
        </Flex>
      ) : (
        <Flex justifyContent="center" alignItems="center" mt="6em">
          <Box display="grid" {...getRootProps()}>
            <Img
              src="/images/multiple-upload.png"
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
