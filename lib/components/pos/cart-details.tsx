import { Box, Flex, Img, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

import AddProduct from './add-product';
import PaymentMethod from './payment-method';

const CartDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleExpanded1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  return (
    <Box>
      <AddProduct />
      <Box mx="10px">
        <hr style={{ borderTop: '1px dashed rgba(65, 69, 75, 1)' }} />
        <Flex justifyContent="space-between" mt="6px">
          <Text
            color="rgba(65, 69, 75, 0.60)"
            fontSize="12px"
            className="primary-font-semi-bold-italic"
          >
            Sub Total
          </Text>
          <Text
            color="#41454B"
            fontSize="14px"
            className="primary-font-semi-bold-italic"
          >
            $ 500.00
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mt="6px">
          <Text color="#41454B" fontSize="14px" className="glroy-bold">
            Total Discount
          </Text>
          <Flex gap="5px">
            <Text
              color="#41454B"
              fontSize="14px"
              className="primary-font-semibold"
            >
              $ 500.00
            </Text>
            <Box cursor="pointer" onClick={toggleExpanded}>
              <Img
                src={isExpanded ? '/images/down.png' : '/images/up.png'}
                w="12px"
                h="auto"
                transition="0.3s ease-in-out"
                mt="3px"
              />
            </Box>
          </Flex>
        </Flex>
        <hr style={{ borderTop: '1px dashed rgba(65, 69, 75, 1)' }} />
        {isExpanded && (
          <Box mt="10px" transition="0.3s ease-in-out">
            <Flex justifyContent="space-between">
              <Text
                color="rgba(65, 69, 75, 0.60)"
                fontSize="12px"
                className="primary-font-semi-bold-italic"
              >
                Coupon Code
              </Text>
              <Input
                defaultValue="b32super"
                color="#FFA382"
                borderRadius="2px"
                fontSize="14px"
                p="8px 10px"
                className="primary-font-semi-bold-italic"
                w="82px"
                textAlign="center"
                h="24px"
                background="rgba(65, 69, 75, 0.08)"
                _placeholder={{
                  color: '#FFA382',
                }}
              />
            </Flex>
            <Flex gap="4px" mt="8px" justifyContent="space-between">
              <Box>
                <Flex>
                  <Text
                    color="rgba(65, 69, 75, 0.60)"
                    fontSize="12px"
                    className="primary-font-semi-bold-italic"
                  >
                    Use Loyalty Points
                  </Text>
                  <Text
                    color="#FFA382"
                    fontSize="12px"
                    className="primary-font-regular-italic"
                  >
                    (1320 pt)
                  </Text>
                </Flex>
                <Text
                  color="rgba(65, 69, 75, 0.60)"
                  fontSize="12px"
                  className="primary-font-semi-bold-italic"
                >
                  (100pt= <span style={{ color: '#FFA382' }}>$0.10</span>)
                </Text>
              </Box>
              <Input
                defaultValue="420 pt"
                color="#FFA382"
                borderRadius="2px"
                fontSize="14px"
                textAlign="center"
                p="8px 10px"
                className="primary-font-semi-bold-italic"
                w="82px"
                h="24px"
                background="rgba(65, 69, 75, 0.08)"
                _placeholder={{
                  color: '#FFA382',
                }}
              />
            </Flex>
          </Box>
        )}
        <hr style={{ borderTop: '1px dashed rgba(65, 69, 75, 1)' }} />
        <Flex justifyContent="space-between" mt="6px">
          <Text color="#41454B" fontSize="14px" className="glroy-bold">
            Total Tax
          </Text>
          <Flex gap="5px">
            <Text
              color="#41454B"
              fontSize="14px"
              className="primary-font-semibold"
            >
              $ 29.82
            </Text>
            <Box cursor="pointer" onClick={toggleExpanded1}>
              <Img
                src={isExpanded1 ? '/images/down.png' : '/images/up.png'}
                w="12px"
                h="auto"
                transition="0.3s ease-in-out"
                mt="3px"
              />
            </Box>
          </Flex>
        </Flex>
        <hr style={{ borderTop: '1px dashed rgba(65, 69, 75, 1)' }} />
        {isExpanded1 && (
          <Box mt="10px" transition="0.3s ease-in-out">
            <Flex justifyContent="space-between">
              <Text
                color="rgba(65, 69, 75, 0.60)"
                fontSize="12px"
                className="primary-font-semi-bold-italic"
              >
                CA Excise Tax
              </Text>
              <Text
                color="rgba(65, 69, 75, 0.80)"
                fontSize="12px"
                className="primary-font-semi-bold-italic"
              >
                $ 6.56
              </Text>
            </Flex>
            <Flex justifyContent="space-between" mt="10px">
              <Text
                color="rgba(65, 69, 75, 0.60)"
                fontSize="12px"
                className="primary-font-semi-bold-italic"
              >
                CA Sales Tax
              </Text>
              <Text
                color="rgba(65, 69, 75, 0.80)"
                fontSize="12px"
                className="primary-font-semi-bold-italic"
              >
                $ 8.06
              </Text>
            </Flex>
            <Flex justifyContent="space-between" mt="10px">
              <Text
                color="rgba(65, 69, 75, 0.60)"
                fontSize="12px"
                className="primary-font-semi-bold-italic"
              >
                City of San Jacinto
              </Text>
              <Text
                color="rgba(65, 69, 75, 0.80)"
                fontSize="12px"
                className="primary-font-semi-bold-italic"
              >
                $ 13.82
              </Text>
            </Flex>
          </Box>
        )}
        <hr
          style={{
            borderTop: '1px dashed rgba(65, 69, 75, 1)',
          }}
        />
        <Flex justifyContent="space-between" mt="1em">
          <Text
            color="rgba(65, 69, 75, 0.60)"
            fontSize="12px"
            className="primary-font-semi-bold-italic"
          >
            Tips to Budtender
          </Text>
          <Box position="relative">
            <Input
              defaultValue="1"
              color="#FFA382"
              borderRadius="2px"
              fontSize="14px"
              p="8px 10px"
              className="primary-font-semi-bold-italic"
              w="82px"
              textAlign="center"
              h="24px"
              background="rgba(65, 69, 75, 0.08)"
              _placeholder={{
                color: '#FFA382',
              }}
            />
            <Text
              className="primary-font-semi-bold-italic"
              fontSize="14px"
              color="#41454B"
              position="absolute"
              top="3px"
              left="10px"
            >
              {' '}
              $
            </Text>
          </Box>
        </Flex>
        <hr style={{ borderTop: '1px dashed #000', marginTop: '1em' }} />
        <Flex justifyContent="space-between" mt="6px">
          <Text color="#41454B" fontSize="14px" className="glroy-bold">
            Total Payable
          </Text>
          <Flex gap="5px">
            <Text
              color="#41454B"
              fontSize="14px"
              className="primary-font-semibold"
            >
              $ 550.00
            </Text>
          </Flex>
        </Flex>
        <PaymentMethod />
        <hr
          style={{
            borderTop: '1px solid rgba(65, 69, 75, 0.20)k',
            marginTop: '1em',
          }}
        />
        <Text color="#41454B" fontSize="16px" mt="5px" className="glroy-bold">
          Bud-tender Notes/experience
        </Text>
        <Box
          background="rgba(65, 69, 75, 0.08)"
          borderRadius="4px"
          mt="10px"
          p="8px 16px"
        >
          <Text
            color="rgba(18, 23, 30, 0.60)"
            fontSize="12px"
            className="primary-font-semi-bold-italic"
          >
            Non-refundable products. Non-changeable.
          </Text>
        </Box>

        <Box h="300px" />
      </Box>
    </Box>
  );
};

export default CartDetail;
