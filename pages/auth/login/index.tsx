import { CardFooter, Checkbox, Flex, Stack, Text } from '@chakra-ui/react';
import AuthLayout from '@lib/components/Auth/auth-layout';
import {
  AuthCard,
  AuthCardBody,
  AuthCardHeader,
} from '@lib/components/Auth/card';
import Button from '@lib/components/base/button';
import Heading from '@lib/components/base/heading';
import Input from '@lib/components/base/input';
import Label from '@lib/components/base/label';
import PasswordInput from '@lib/components/inputs/PasswordInput';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthCardHeader py="2rem">
          <Heading>Let's start with Log In!</Heading>
        </AuthCardHeader>
        <AuthCardBody maxH="50vh">
          <Stack>
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '16px' }}
              ml={2}
              className="primary-font-medium"
            >
              Email Address
            </Label>

            <Input placeholder="Enter your email address" />
            {/* <ErrorMessage
                  touched={props.touched.email}
                  message={
                    t(
                      (props.errors.email as keyof typeof resources.common) ||
                        ''
                    ) || ''
                  }
                /> */}
          </Stack>
          <Stack mt="2em">
            <Label
              ml={2}
              fontSize={{ base: '12px', sm: '14px', md: '16px' }}
              className="primary-font-medium"
            >
              Password
            </Label>

            <PasswordInput placeholder="Password" />
          </Stack>
          <Flex mt="2em" justifyContent="space-between">
            <Checkbox
              colorScheme="blue"
              className="primary-font-regular-italic"
              defaultChecked
            >
              Remember Me
            </Checkbox>
            <Link href="/auth/forget-password">
              <Text
                className="primary-font-regular"
                fontSize="14px"
                cursor="pointer"
                color="#FF8A43"
                borderBottom="1px solid #FF8A43"
              >
                Forgot Password?
              </Text>
            </Link>
          </Flex>
        </AuthCardBody>
        <CardFooter mt="-2em">
          <Button
            w="full"
            styledVariant="blue"
            fontSize={{ base: '12px', md: '20px ' }}
            fontWeight="400"
          >
            Login
          </Button>
        </CardFooter>
      </AuthCard>
    </AuthLayout>
  );
};

export default LoginPage;
