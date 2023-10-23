import { Box, CardFooter } from '@chakra-ui/react';
import AuthLayout from '@lib/components/Auth/AuthLayout';
import { AuthCard, AuthCardHeader } from '@lib/components/Auth/card';
import Button from '@lib/components/base/button';
import Heading from '@lib/components/base/heading';
import SubHeading from '@lib/components/base/subHeading';
import Link from 'next/link';

const ForgetPassword = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthCardHeader>
          <Heading
            fontSize={{
              base: '30px',
              md: '48px',
            }}
            className="primary-font-medium"
          >
            Congratulation!
          </Heading>
          <Box mx="0em" mt="1em">
            <SubHeading fontSize="24px" className="primary-font-regular-italic">
              Your password has been changed successfully.
            </SubHeading>
          </Box>
        </AuthCardHeader>

        <CardFooter mt="-10px">
          <Link href="/auth/login" style={{ width: '100%' }}>
            <Button
              w="full"
              styledVariant="blue"
              fontSize={{ base: '12px', md: '16px ' }}
              fontWeight="400"
            >
              Go to Login
            </Button>
          </Link>
        </CardFooter>
      </AuthCard>
    </AuthLayout>
  );
};

export default ForgetPassword;
