import { Box, Flex, Img, Text } from '@chakra-ui/react';
import { useState } from 'react';

import Button from '../base/button';
import CartDetail from './cart-details';
import EmailOrPrintInvoicePage from './email-or-print';
import InvoicePage from './invoice';
import ThanksPage from './thanks';

const CartPage = () => {
  const [activeComponent, setActiveComponent] = useState('CartDetail');
  const [buttonText, setButtonText] = useState('Pay Now');
  const handleFinalizeOrder = () => {
    if (activeComponent === 'CartDetail') {
      setActiveComponent('InvoicePage');
      setButtonText('Finalize Order');
    } else if (activeComponent === 'InvoicePage') {
      setActiveComponent('EmailOrPrintInvoicePage');
      setButtonText('Email Invoice');
    } else if (activeComponent === 'EmailOrPrintInvoicePage') {
      setActiveComponent('ThanksPage');
      setButtonText('Finalize Order');
    }
  };

  const handlePrintInvoice = () => {
    setActiveComponent('ThanksPage');
  };

  return (
    <Box mt="-4em" borderRadius="1em" background="#ffffff" zIndex={1000}>
      <Flex
        p="20px 20px 10px 20px"
        borderBottom="1px solid #000000"
        justifyContent="space-between"
      >
        <Text
          fontSize="16px"
          className="primary-font-semibold"
          color="#41454B"
          fontWeight="400"
        >
          New Order Bill
        </Text>
        <Flex fontSize="12px" gap="5px">
          <Text
            color="rgba(65, 69, 75, 0.50)"
            className="primary-font-semibold"
          >
            Bud-tender:
          </Text>
          <Text color="#41454B" className="primary-font-semi-bold-italic">
            Mr. Happy
          </Text>
        </Flex>
      </Flex>
      <Box
        overflowY={{
          base: 'hidden',
          md: 'scroll',
        }}
        overflowX="hidden"
        h={{
          base: 'auto',
          md: '100vh',
        }}
      >
        {activeComponent === 'CartDetail' && <CartDetail />}
        {activeComponent === 'InvoicePage' && <InvoicePage />}
        {activeComponent === 'EmailOrPrintInvoicePage' && (
          <EmailOrPrintInvoicePage />
        )}
        {activeComponent === 'ThanksPage' && <ThanksPage />}
        <Flex gap="1em" mt="-15em" mb="200px" px="12px" w="full">
          {activeComponent !== 'ThanksPage' &&
            activeComponent !== 'EmailOrPrintInvoicePage' && (
              <>
                {activeComponent === 'InvoicePage' ? (
                  <Button
                    w="full"
                    styledVariant="outline"
                    fontSize="12px"
                    className="primary-font-semibold"
                    onClick={() => {
                      // Add logic to handle the "Edit Order" action here
                    }}
                  >
                    Edit Order
                  </Button>
                ) : (
                  <Button
                    w="full"
                    styledVariant="outline"
                    fontSize="12px"
                    className="primary-font-semibold"
                  >
                    Save
                  </Button>
                )}
                <Button
                  w="full"
                  styledVariant="blue"
                  fontSize="12px"
                  fontWeight="400"
                  onClick={handleFinalizeOrder}
                >
                  {buttonText}
                </Button>
              </>
            )}

          {activeComponent === 'EmailOrPrintInvoicePage' && (
            <Flex gap="1em" mt="-1em" justifyContent="space-between" w="full">
              <Button
                w="full"
                styledVariant="blue"
                fontSize="12px"
                fontWeight="400"
              >
                <Img src="/images/sms.png" alt="email" w="16px" mr="10px" />
                Email Invoice
              </Button>
              <Button
                w="full"
                styledVariant="outline"
                fontSize="12px"
                onClick={handlePrintInvoice}
                className="primary-font-semibold"
              >
                <Img src="/images/printer.png" alt="email" w="16px" mr="10px" />
                Print Invoice
              </Button>
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default CartPage;
