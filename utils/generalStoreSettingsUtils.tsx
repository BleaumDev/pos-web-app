import { Box, Flex, Image, Img, Td, Text } from '@chakra-ui/react';

export function mapGenneralStoreSettingDataToRows(
  generatStoreSettingData: Array<any>
): Array<JSX.Element[]> {
  return generatStoreSettingData.map((store) => [
    <Td className="text-center" key="userName">
      {store.startedAt}
    </Td>,
    <Td key="img" display="flex" alignItems="center" justifyContent="center">
      <Flex justifyContent="center" alignItems="center" id="img_col" gap="10px">
        <Image
          src={store.imgSrc}
          width={{
            base: 'auto',
            md: '100%',
          }}
          height="40px"
          alt=""
        />
        <Text
          color="rgba(65, 69, 75, 0.70)"
          className="primary-font-semibold"
          dangerouslySetInnerHTML={{ __html: store.storeName }}
        />
      </Flex>
    </Td>,
    <Td className="text-center" key="storeLocation">
      <Text
        color="rgba(65, 69, 75, 0.70)"
        className="primary-font-semibold"
        dangerouslySetInnerHTML={{ __html: store.storeLocation }}
      />
    </Td>,
    <Td className="text-center" key="storeManager">
      {store.storeManager}
    </Td>,

    <Td className="text-center" key="phone">
      {store.phone}
    </Td>,
    <Td className="text-center" key="email">
      {store.email}
    </Td>,
    <Td
      className="text-center"
      key="openStatus"
      display="flex"
      alignContent="center"
      justifyContent="center"
      gap="2em"
      border="none !important"
      color={
        store.openStatus === 'Open Now' ? 'rgba(8, 117, 76, 1)' : '#FF1E1E'
      }
    >
      <Box w="60px">{store.openStatus}</Box>
      <Img
        src="/images/down.png"
        alt="down-arrow"
        mt="8px"
        width="9px"
        height="9px"
      />
    </Td>,
  ]);
}
