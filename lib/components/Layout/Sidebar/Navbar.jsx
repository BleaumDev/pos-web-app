import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Input,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import PosModel from '@lib/components/models/pos-model';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const { isOpen: isMobileModeOpen, onToggle: onMobileModeToggle } =
    useDisclosure();
  return (
    <>
      <Box p="4" bg="linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)">
        <Flex
          align="center"
          justifyContent={'space-between'}
          display={{
            base: 'flex',
            md: 'none',
          }}
        >
          <Image src="/images/logo.png" width={35} height={35} alt="logo" />

          <Box
            gap={'20px'}
            display={{
              base: 'none',
              md: 'flex',
            }}
          >
            <Input
              placeholder="Scan/Search Product by Code or Name here..."
              background={'#E9F0F8'}
              className="primary-font-medium"
              fontSize={'12px'}
              h={'40px'}
              w={'300px'}
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
          </Box>
          <IconButton
            onClick={onMobileModeToggle}
            icon={<HamburgerIcon />}
            mr="4"
            color="#FF8A43"
            aria-label="Toggle Sidebar"
          />
        </Flex>

        <Flex
          w={'full'}
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          <Flex
            ml={'1.5em'}
            justifyContent={'space-between'}
            alignItems={'center'}
            w={'55%'}
          >
            <Box w={'25%'}>
              <Link href="/auth/login">
                <Image
                  src="/images/logo.png"
                  width={35}
                  height={35}
                  alt="logo"
                />
              </Link>
            </Box>
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              gap={'20px'}
              w={'75%'}
            >
              <Input
                placeholder="Scan/Search Product by Code or Name here..."
                background={'#E9F0F8'}
                className="primary-font-medium"
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
              <PosModel />
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
                borderRadius={'9px'}
                background={'#FF8A43'}
              >
                <Image
                  src={'/images/plus.png'}
                  width={15}
                  height={15}
                  alt={''}
                />
                Add New Item
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Collapse in={isMobileModeOpen}>
        <Box background={'#fff'}>
          <Text
            className="primary-font-medium"
            py={'10px'}
            px={'15px'}
            color="#12171E66"
          >
            Dashboard
          </Text>
          <Select
            className="primary-font-medium"
            color="#12171E66"
            placeholder="Inventory"
            border={'none'}
          >
            <option value="option1">Products</option>
            <option value="option2">Categories</option>
            <option value="option3">Manufacturers</option>
            <option value="option3">Print Labels</option>
            <option value="option3">Transfers</option>
          </Select>
          <Text
            className="primary-font-medium"
            py={'10px'}
            px={'15px'}
            color="#12171E66"
          >
            Customers
          </Text>
          <Text
            className="primary-font-medium"
            py={'10px'}
            px={'15px'}
            color="#12171E66"
          >
            Rewards
          </Text>
          <Text
            className="primary-font-medium"
            py={'10px'}
            px={'15px'}
            color="#12171E66"
          >
            Order
          </Text>
          <Text
            className="primary-font-medium"
            py={'10px'}
            px={'15px'}
            color="#12171E66"
          >
            Employees
          </Text>
          <Text
            className="primary-font-medium"
            py={'10px'}
            px={'15px'}
            color="#12171E66"
          >
            Labels
          </Text>
          <Text
            className="primary-font-medium"
            py={'10px'}
            px={'15px'}
            color="#12171E66"
          >
            Settings
          </Text>
          <Flex justifyContent={'center'} py={'1em'} w={'full'}>
            <Flex gap={'4em'}>
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
                borderRadius={'9px'}
                background={'#FF8A43'}
              >
                <Image
                  src={'/images/plus.png'}
                  width={15}
                  height={15}
                  alt={''}
                />
                Add New Item
              </Button>
            </Flex>
          </Flex>
          <Flex py={'1em'} w={'full'} justifyContent="center">
            <Flex gap={'20px'}>
              <Input
                placeholder="Scan/Search Product by Code or Name here..."
                background={'#E9F0F8'}
                className="primary-font-medium"
                fontSize={'12px'}
                h={'40px'}
                w={'300px'}
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
        </Box>
      </Collapse>
    </>
  );
};

export default Navbar;
