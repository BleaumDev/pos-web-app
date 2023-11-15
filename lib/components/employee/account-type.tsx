import {
  Box,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Label from '../base/label';
import Select, { OptionsType } from '../base/select';

const groupSelection: OptionsType = [
  {
    key: 'Purchasing Manager',
    value: 'Purchasing Manager',
    label: 'Purchasing Manager',
  },
  {
    key: 'Store Manager',
    value: 'Store Manager',
    label: 'Store Manager',
  },
  {
    key: 'Admin Manager',
    value: 'Admin Manager',
    label: 'Admin Manager',
  },
  {
    key: 'Sales Manager',
    value: 'Sales Manager',
    label: 'Sales Manager',
  },
];

const AccountType = () => {
  const [selectedValue, setSelectedValue] = useState('administrative');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const router = useRouter();
  const isEmployeeDetailRoute =
    router.pathname === '/admin/employee/employee-detail';
  return (
    <Formik
      initialValues={{
        selectedOption: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <form>
          {isEmployeeDetailRoute ? (
            <Stack w="100%" mt="12px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Account Type
              </Label>

              <Box mt="-5px">
                <RadioGroup onChange={handleRadioChange} value={selectedValue}>
                  <Stack direction="column">
                    <Radio value="administrative" position="relative">
                      Administrative
                    </Radio>
                    <Radio value="accessControlled">Access Controlled</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </Stack>
          ) : (
            <Stack w="100%" mt="12px">
              <Label
                fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                className="primary-font-semibold"
              >
                Account Type
              </Label>

              <Box mt="-5px">
                <RadioGroup onChange={handleRadioChange} value={selectedValue}>
                  <Stack direction="column">
                    <Radio value="administrative" position="relative">
                      Administrative
                      <Box position="absolute" top="3px" left="12em">
                        <Popover>
                          <PopoverTrigger>
                            <Image
                              src="/images/info-icon.png"
                              w="12px"
                              h="12.6px"
                            />
                          </PopoverTrigger>
                          <PopoverContent w="200px">
                            <PopoverArrow />
                            <PopoverBody>
                              By Selecting this type the account holder will get
                              access to all this portal
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </Box>
                    </Radio>
                    <Radio value="accessControlled">
                      Access Controlled
                      <Box position="absolute" top="3px" left="12em">
                        <Popover>
                          <PopoverTrigger>
                            <Image
                              src="/images/info-icon.png"
                              w="12px"
                              h="12.6px"
                            />
                          </PopoverTrigger>
                          <PopoverContent w="200px">
                            <PopoverArrow />
                            <PopoverBody>
                              By Selecting this type the account holder will get
                              access of the selected group permissions
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </Box>
                    </Radio>
                  </Stack>
                </RadioGroup>

                {selectedValue === 'accessControlled' && (
                  <Box mt={4}>
                    <Field
                      name="selectedOption"
                      borderRadius="4px"
                      component={Select}
                      fontSize="12px"
                      minHeight="35px"
                      height="35px"
                      options={groupSelection}
                      placeholder="Select your employee group"
                    />
                  </Box>
                )}
              </Box>
            </Stack>
          )}
        </form>
      )}
    </Formik>
  );
};

export default AccountType;
