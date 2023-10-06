import { extendTheme } from '@chakra-ui/react';
import { Tajawal } from '@next/font/google';
import { withProse } from '@nikolovlazar/chakra-ui-prose';
import { StepsTheme as Steps } from 'chakra-ui-steps';
//
const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
});

const breakpoints = {
  xs: '350px',
  sm: '640px',
  medium: '720px',
  md: '1023px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1600px',
};

export const theme = extendTheme(
  {
    breakpoints,
    fonts: {
      body: tajawal.style.fontFamily,
      heading: tajawal.style.fontFamily,
    },
    components: {
      Steps,
      Image: {
        variants: {
          primary: {
            objectFit: 'none',
          },
        },
      },
      Text: {
        variants: {
          readonly: {
            dir: 'rtl',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            boxShadow: '0px 2px 6px 0px #13124212',
            border: '1px solid #EFF0F6',
            mt: '1em',
            color: '#64646C',
            background: '#00C2CB26',
            padding: '15px',
            borderRadius: '10px',
            fontSize: '12px',
          },
          enText: {
            fontSize: '18px',
            bg: '#00C2CB',
            w: '50px',
            h: '50px',
            cursor: 'pointer',
            paddingY: '11px',
            paddingX: '13px',
            color: '#fff',
            fontWeight: '400',
            borderRadius: '21.43px',
          },
          عText: {
            fontSize: '18px',
            bg: '#1A1A1D',
            w: '50px',
            cursor: 'pointer',
            h: '50px',
            paddingY: '9px',
            fontFamily: 'Poppins',
            paddingStart: '19px',
            color: '#fff',
            fontWeight: '400',
            borderRadius: '21.43px',
          },
        },
      },
      Button: {
        variants: {
          primary: {
            bg: 'primary.100',
            my: '20px',
            p: ' 10px 60px',
            borderRadius: '50px',
            fontSize: '14px',
            color: 'white',

            _hover: {
              bg: 'primary.100',
            },
          },
          saveButton: {
            bg: 'primary.100',
            borderRadius: '25px',
            color: 'white',
            padding: '26px 28px',
            marginLeft: '15px',
            marginTop: '40px',

            _hover: {
              bg: 'primary.100',
            },
          },
          cancelButton: {
            bg: '#eaeaea',
            borderRadius: '25px',
            color: 'white',
            padding: '26px 28px',
            marginTop: '40px',

            _hover: {
              bg: '#eaeaea',
            },
          },
          filterButton: {
            bg: 'primary.100',
            my: '20px',
            p: ' 5px 20px',
            borderRadius: '10px',
            fontSize: '14px',
            color: 'white',
            _hover: {
              bg: 'primary.100',
            },
          },
          navButton: {
            bg: 'primary.100',
            p: ' 25px 40px',
            borderRadius: '25px',
            fontSize: '14px',
            color: 'white',

            _hover: {
              bg: 'primary.100',
            },
          },
          journeyButton: {
            bg: 'primary.100',
            fontSize: '16px',
            display: 'block',
            mx: 'auto',
            opacity: '0.8',
            w: '180px',
            borderRadius: '16px',
            color: 'whitesmoke',
            mt: '13px',
            _hover: {
              opacity: '1',
              bg: 'primary.100',
            },
          },
          editButton: {
            position: 'absolute',
            right: '5px',
            p: '5px',
            m: '0',
            gap: '5px',
            fontSize: '12px',
            h: 'auto',
            bg: 'primary.100',
            boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
            top: '10px',
            _hover: {
              bg: 'primary.100',
            },
          },
          keywordButton: {
            bg: 'primary.100',
            padding: '14px 18px',
            color: 'white',
            fontSize: '12px',
            borderRadius: '25px',
            gap: '10px',
            mt: '7px',
          },
          authButton: {
            bg: 'primary.100',
            my: '20px',
            p: '10px 60px',
            borderRadius: '50px',
            fontSize: '14px',
            color: 'white',
          },
        },
      },
      Input: {
        variants: {
          primary: {
            field: {
              bg: 'fieldsBg.100',
              color: 'black',
              fontWeight: 'medium',
              height: '60px',
              mt: '20px',
              _hover: {
                bg: 'gray.100',
              },
              _placeholder: {
                color: '#333',
              },
              _focus: {
                boxShadow: '0 0 0 1px #333',
                bg: 'gray.100',
              },
            },
          },
          secondary: {
            field: {
              bg: '#EAEAEA',
              color: 'black',
              height: '40px',
              fontWeight: 'bold',
              fontSize: '13px',
              mt: '5px',
              _hover: {
                bg: 'gray.100',
              },
              _placeholder: {
                color: '#333',
              },
              _focus: {
                boxShadow: 'none',
                bg: '#EAEAEA',
                border: 'none',
              },
            },
          },
          tertiary: {
            field: {
              bg: '#fff',
              color: 'black',
              fontWeight: 'bold',
              height: '70px',
              _hover: {
                bg: 'gray.100',
              },
              _placeholder: {
                color: '#333',
              },
              _focus: {
                boxShadow: '0 0 0 1px #333',
                bg: 'gray.100',
              },
            },
          },
          searchBar: {
            field: {
              bg: 'white',
              color: '#000000',
              borderRadius: '25px',
              height: '50px',
              _hover: {
                bg: 'white',
              },
              _placeholder: {
                color: '#333',
              },
              _focus: {
                boxShadow: 'none',
                bg: 'white',
              },
            },
          },
          fileUpload: {
            field: {
              bg: 'white',
              w: '190px',
              mt: '13px',
              _hover: { bg: 'white' },
              _active: { bg: 'white' },
              _focus: { bg: 'white' },
            },
          },
        },
      },
    },
    colors: {
      primary: {
        100: '#f5b3b5',
        200: 'rgb(255 255 255 / 75%)',
      },
      secondary: {
        100: '#F5B3B4',
      },
      fieldsBg: {
        100: '#fff9fa',
      },
      primaryBlue: {
        500: '#00C2CB',
        600: '#03989E',
      },
      cyan: {
        500: '#00C2CB',
        600: '#03989E',
      },
    },
  },
  withProse({
    baseStyle: {
      span: {
        margin: '0 !important',
        padding: '0 !important',
      },
      h1: {
        margin: '0 !important',
        padding: '0 !important',
      },
      h2: {
        margin: '0 !important',
        padding: '0 !important',
      },
      h3: {
        margin: '0 !important',
        padding: '0 !important',
      },
      h4: {
        margin: '0 !important',
        padding: '0 !important',
      },
      h5: {
        margin: '0 !important',
        padding: '0 !important',
      },
      h6: {
        margin: '0 !important',
        padding: '0 !important',
      },
      p: {
        margin: '0 !important',
        padding: '0 !important',
      },
      li: {
        margin: '0 !important',
        padding: '0 !important',
      },
    },
  })
);
