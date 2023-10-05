import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Input,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import Image from 'next/image';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p="4" bg="linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)">
      <Flex align="center">
        {/* <IconButton
          icon={<HamburgerIcon />}
          mr="4"
          color="white"
          aria-label="Toggle Sidebar"
        /> */}
        <Spacer />
      </Flex>
      <Flex w={'full'}>
        <Flex
          ml={'1.5em'}
          justifyContent={'space-between'}
          alignItems={'center'}
          w={'55%'}
        >
          <Image src="/images/logo.png" width={35} height={35} alt="logo" />
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={'20px'}
          >
            <Input
              placeholder="Scan/Search Product by Code or Name here..."
              background={'#E9F0F8'}
              className="primary-font-medium"
              w={'600px'}
              fontSize={'12px'}
              h={'40px'}
              color={'#41454B'}
              borderRadius={'4px'}
            />
            <Box cursor={'pointer'}>
              <Image
                src="/images/search-nav.png"
                width={40}
                height={40}
                alt="logo"
              />
            </Box>
          </Flex>
        </Flex>
        <Flex justifyContent={'end'} w={'45%'}>
          <Flex gap={'1em'}>
            <Button
              p={'10px 24px'}
              color={'#fff'}
              fontSize={'16px'}
              cursor={'pointer'}
              _hover={{ background: '#E69066' }}
              className={'primary-font-medium'}
              border={'2px solid #fff'}
              borderRadius={'33px'}
              background={'#FF8A43'}
            >
              POS
            </Button>
            <Box cursor={'pointer'}>
              <Image
                src="/images/notification.png"
                width={40}
                height={40}
                cursor={'pointer'}
                alt="logo"
              />
            </Box>
            <Button
              p={'14px 18px'}
              color={'#fff'}
              display={'flex'}
              gap={'10px'}
              cursor={'pointer'}
              _hover={{ background: '#E69066' }}
              fontSize={'16px'}
              className={'primary-font-medium'}
              boxShadow={'0px 4px 4px 0px rgba(251, 100, 100, 0.23)'}
              icon={<AddIcon />}
              borderRadius={'9px'}
              background={'#FF8A43'}
            >
              <Image src={'/images/plus.png'} width={15} height={15} alt={''} />
              Add New Item
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
