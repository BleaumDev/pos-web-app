import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
} from '@chakra-ui/react';

interface BreadcrumbItems {
  label: string;
  href: string;
}

interface FloatingHeaderProps {
  title: string;
  age: string;
  breadcrumbs: BreadcrumbItems[];
  lastBreadcrumbColor: string;
}

const PosFloatingHeader: React.FC<FloatingHeaderProps> = ({
  title,
  age,
  breadcrumbs,
  lastBreadcrumbColor,
}) => {
  return (
    <Box
      background="#ffffff"
      h={{
        base: 'auto',
        md: '75px',
      }}
      mt="-4em"
      zIndex="100"
      mr="20px"
      borderRadius="0px 15px 15px 0px"
    >
      <Box
        display={{
          base: 'grid',
          md: 'flex',
        }}
        w="full"
      >
        <Box
          w={{
            base: '100%',
            md: '50%',
          }}
          m="10px 2em 2em 10em"
        >
          <Flex gap="8px">
            <Text
              fontWeight="400"
              color="#41454B"
              fontSize="22px"
              className="primary-font-semibold"
            >
              {title}
            </Text>
            <Text
              fontWeight="400"
              color="#41454BCC"
              mt="1em"
              fontSize="12px"
              className="primary-font-regular-italic"
            >
              {age}
            </Text>
          </Flex>
          <Breadcrumb
            spacing="4px"
            separator={<ChevronRightIcon color="#000000" />}
          >
            {breadcrumbs?.map((breadcrumb, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <BreadcrumbItem key={index}>
                <BreadcrumbLink
                  href={breadcrumb.href}
                  fontSize="13px"
                  color="#41454B99"
                  className="primary-font-semi-bold-italic"
                >
                  {index === breadcrumbs.length - 1 ? (
                    <Text
                      color={lastBreadcrumbColor}
                      fontSize="12px"
                      className="primary-font-semi-bold-italic"
                    >
                      {breadcrumb.label}
                    </Text>
                  ) : (
                    breadcrumb.label
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </Box>
      </Box>
    </Box>
  );
};

export default PosFloatingHeader;
