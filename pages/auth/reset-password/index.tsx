import { CardFooter, Stack } from '@chakra-ui/react';
import AuthLayout from '@lib/components/Auth/AuthLayout';
import {
  AuthCard,
  AuthCardBody,
  AuthCardHeader,
} from '@lib/components/Auth/card';
import Button from '@lib/components/base/button';
import Heading from '@lib/components/base/heading';
import Label from '@lib/components/base/label';
import SubHeading from '@lib/components/base/subHeading';
import PasswordInput from '@lib/components/inputs/PasswordInput';
import Link from 'next/link';

const ResetPassword = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthCardHeader>
          <Heading>Reset Your Password!</Heading>
          <SubHeading>
            Please enter your new password & reconfirm you password.
          </SubHeading>
        </AuthCardHeader>
        <AuthCardBody maxH="50vh">
          <Stack>
            <Label
              ml={2}
              fontSize={{ base: '12px', sm: '14px', md: '16px' }}
              className="primary-font-medium"
            >
              New Password
            </Label>

            <PasswordInput placeholder="Enter new password" />
          </Stack>
          <Stack mt="10px">
            <Label
              ml={2}
              fontSize={{ base: '12px', sm: '14px', md: '16px' }}
              className="primary-font-medium"
            >
              Confirm Password
            </Label>

            <PasswordInput placeholder="Re-Enter new password" />
          </Stack>
        </AuthCardBody>
        <CardFooter mt="1em">
          <Link href="/auth/congratulation" style={{ width: '100%' }}>
            <Button
              w="full"
              styledVariant="blue"
              fontSize={{ base: '12px', md: '16px ' }}
              fontWeight="400"
            >
              Set New Password
            </Button>
          </Link>
        </CardFooter>
      </AuthCard>
    </AuthLayout>
  );
};

export default ResetPassword;
