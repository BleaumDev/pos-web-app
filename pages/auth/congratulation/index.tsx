import { Box, CardFooter } from '@chakra-ui/react';
import AuthLayout from '@lib/components/Auth/auth-layout';
import { AuthCard, AuthCardHeader } from '@lib/components/Auth/card';
import Button from '@lib/components/base/button';
import Heading from '@lib/components/base/heading';
import SubHeading from '@lib/components/base/subHeading';

const ForgetPassword = () => {
  return (
    <AuthLayout>
      <AuthCard mt="8em">
        <AuthCardHeader py="2rem">
          <Heading fontSize="48px" className="primary-font-medium">
            Congratulation!
          </Heading>
          <Box mx="2em">
            <SubHeading fontSize="24px" className="primary-font-regular-italic">
              Your password has been changed successfully.
            </SubHeading>
          </Box>
        </AuthCardHeader>

        <CardFooter mt="-2em">
          <Button
            w="full"
            styledVariant="blue"
            fontSize={{ base: '12px', md: '20px ' }}
            fontWeight="400"
          >
            Go to Login
          </Button>
        </CardFooter>
      </AuthCard>
    </AuthLayout>
  );
};

export default ForgetPassword;
