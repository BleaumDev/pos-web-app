import { Box, Image, Text } from '@chakra-ui/react';

export default function GalleryAdd(): React.ReactElement {
  return (
    <Box
      style={{
        backgroundColor: '#E9F0F8',
        borderRadius: 7,
        width: 197,
        height: 171,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 50,
        paddingLeft: 50,
        marginTop: 16,
      }}
    >
      <Image
        src="/images/gallery-add.svg"
        style={{
          marginBottom: 15,
        }}
      />
      <Text
        className="primary-font-semibold"
        color="rgba(65, 69, 75, 0.70)"
        textAlign="center"
        fontSize={14}
      >
        Upload Image
      </Text>
      <Text
        className="primary-font-semibold"
        color="rgba(65, 69, 75, 0.70)"
        textAlign="center"
        fontSize={14}
      >
        150 x 140 px
      </Text>
    </Box>
  );
}
