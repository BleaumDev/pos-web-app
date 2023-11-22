import { Box, Input, Stack } from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import Label from '../base/label';
import Select, { OptionsType } from '../base/select';
import UploadSingleImage from '../base/upload-single-image';

const states: OptionsType = [
  {
    key: 'California',
    value: 'California',
    label: 'California',
  },
  {
    key: 'Texas',
    value: 'Texas',
    label: 'Texas',
  },
  {
    key: 'Florida',
    value: 'Florida',
    label: 'Florida',
  },
];
const StoreLocationDetails = () => {
  return (
    <Box
      w={{
        base: '100%',
        sm: '100%',
        md: '33.3%',
      }}
    >
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
            <Box>
              <Box
                borderRadius="8px"
                m={{
                  base: '0em 0em',
                  md: '0em 2em',
                }}
                p="1em"
                border="0.5px solid rgba(65, 69, 75, 0.30)"
              >
                <Label
                  fontSize={{ base: '12px', sm: '14px', md: '14px' }}
                  className="primary-font-semibold"
                >
                  Store Location Details
                </Label>

                <Stack w="100%" mt="1em">
                  <Label
                    fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                    className="primary-font-semibold"
                  >
                    Address
                    <span
                      style={{
                        color: '#FF8A43',
                      }}
                    >
                      *
                    </span>
                  </Label>

                  <Box mt="-8px">
                    <Input
                      placeholder="Enter Address"
                      background="#fff"
                      className="primary-font-medium"
                      h="33px"
                      fontSize="12px"
                    />
                  </Box>
                </Stack>
                <Stack w="100%" mt="8px">
                  <Label
                    fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                    className="primary-font-semibold"
                  >
                    City
                    <span
                      style={{
                        color: '#FF8A43',
                      }}
                    >
                      *
                    </span>
                  </Label>

                  <Box mt="-8px">
                    <Input
                      placeholder="Enter City Name"
                      background="#fff"
                      className="primary-font-medium"
                      h="33px"
                      fontSize="12px"
                    />
                  </Box>
                </Stack>
                <Stack w="100%" mt="8px">
                  <Label
                    fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                    className="primary-font-semibold"
                  >
                    State
                    <span
                      style={{
                        color: '#FF8A43',
                      }}
                    >
                      *
                    </span>
                  </Label>

                  <Box mt="-8px">
                    <Field
                      name="states"
                      borderRadius="4px"
                      component={Select}
                      fontSize="14px"
                      minHeight="33px"
                      height="33px"
                      options={states}
                      placeholder="Select State"
                    />
                  </Box>
                </Stack>
                <Stack w="100%" mt="8px">
                  <Label
                    fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                    className="primary-font-semibold"
                  >
                    Zip Code
                  </Label>

                  <Box mt="-8px">
                    <Input
                      placeholder="Type Zip Code"
                      background="#fff"
                      className="primary-font-medium"
                      h="33px"
                      fontSize="12px"
                    />
                  </Box>
                </Stack>
                <Stack w="100%" mt="8px">
                  <Label
                    fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                    className="primary-font-semibold"
                  >
                    Time Zone
                    <span
                      style={{
                        color: '#FF8A43',
                      }}
                    >
                      *
                    </span>
                  </Label>

                  <Box mt="-8px">
                    <Field
                      name="states"
                      borderRadius="4px"
                      component={Select}
                      fontSize="14px"
                      minHeight="33px"
                      height="33px"
                      options={states}
                      placeholder="Select State"
                    />
                  </Box>
                </Stack>
              </Box>
              <Label
                fontSize={{ base: '12px', sm: '12px', md: '12px' }}
                className="primary-font-semibold"
                position="relative"
                left="35px"
                top="1em"
              >
                Logo
              </Label>
              <Box position="relative" left="14px" top="1em">
                <UploadSingleImage
                  widthSelectedImage="164px"
                  heightSelectedImage="136px"
                  widthOfDefaultImage="200px"
                  defaultImage="/images/upload-Image.png"
                  addOrangeButton
                />
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default StoreLocationDetails;
