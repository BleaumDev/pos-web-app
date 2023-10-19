// eslint-disable-next-line simple-import-sort/imports
import {
  Card,
  CardBody,
  CardHeader,
  type CardBodyProps,
  type CardHeaderProps,
  type CardProps,
} from '@chakra-ui/react';

const AuthCardHeader: React.FC<CardHeaderProps> = ({ children, ...props }) => (
  <CardHeader textAlign="center" {...props}>
    {children}
  </CardHeader>
);

const AuthCardBody: React.FC<CardBodyProps> = ({ children, ...props }) => (
  <CardBody
    mx="auto"
    w="100%"
    display="flex"
    flexDir="column"
    gap={4}
    {...props}
    overflowY="auto"
    sx={{
      '&::-webkit-scrollbar': {
        height: '10px',
        width: '10px',
        borderRadius: '9999px',
        display: 'block',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '9999px',
        background: 'rgb(239, 239, 239, 0.8)',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(0, 194, 203) !important',
        borderRadius: '9999px',
        height: '10px',
        width: '10px',
        display: 'block',
      },
      input: {
        color: 'rgba(100, 100, 108, 1)',
      },
    }}
  >
    {children}
  </CardBody>
);

const AuthCard: React.FC<CardProps> = ({ children, ...props }) => (
  <Card
    {...props}
    w={{ base: '100%' }}
    maxW={{ sm: '470px' }}
    mx={{
      base: 'auto',
      sm: 'auto',
      md: '0em',
    }}
    bg="white"
    borderRadius="2rem"
    shadow="none"
    variant="elevated"
  >
    {children}
  </Card>
);

export { AuthCard, AuthCardBody, AuthCardHeader };
