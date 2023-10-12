import { Box, Text, Image, Input } from '@chakra-ui/react';
import Heading from '@lib/components/base/heading';
import Product from '@lib/components/product';
import { TextInput } from '@lib/components/product/TextInput';
import { SearchIcon } from '@chakra-ui/icons';

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  availability: string;
  sku: string;
}

const generateProducts = (count: number): Array<IProduct> => {
  const products = [];
  for (let i = 1; i <= count; i++) {
    const product = {
      id: i,
      name: `Product ${i}`,
      description: `Description for Product ${i}`,
      price: 19.99 + i,
      availability: '23rd May, 2023',
      sku: `${i}ABC`,
    };
    products.push(product);
  }
  return products;
};

const products = generateProducts(50);

export default function Products(): React.ReactNode {
  return (
    <Box m="4em">
      <Box className="flex justify-between">
        <Heading h={6}>
          All Products{' '}
          <Box as="span" color="#FF8A43">
            {`(${3293}+)`}
          </Box>
        </Heading>
        <Box
          style={{
            backgroundColor: '#F8FBF8',
            paddingTop: 2,
            paddingBottom: 2,
          }}
          className="flex flex-row items-center pl-4 rounded-lg"
        >
          <SearchIcon />
          <Input
            style={{
              background: '#F8FBF8',
            }}
            className="ml-4"
            width={517}
            borderColor="none"
            variant="unstyled"
            placeholder="Scan/Search Product by Code or Name here..."
          />
          <Image
            src="/images/arrow-right.png"
            // className="py-1.5"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </Box>
      </Box>

      <Box mt={50}>
        <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 min-w-[100vh] sm:min-w-md">
          {products.map((product) => {
            return (
              // <Product
              //   id={product.id}
              //   name={product.name}
              //   sku={product.sku}
              //   price={product.price}
              //   description={product.description}
              //   availability={product.availability}
              // />
              <Box
                // as="button"
                className="mt-2 mb-2 px-3 py-5 min-w-[200px] rounded-3xl"
                style={{
                  backgroundColor: 'white',
                  margin: 10,
                }}
              >
                <Image src="/images/image2.png" />
                <Box className="flex flex-row justify-between items-center">
                  <Box>
                    <Heading
                      h={6}
                      fontSize={17}
                      color={'#41454B'}
                      // fontWeight="bold"
                      className="primary-font-semibold"
                    >
                      {product.name}
                    </Heading>
                  </Box>
                  <Box>
                    <Text className="primary-font-semibold" color="orange">
                      ${product.price.toFixed(2)}
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Text
                    className="inline primary-font-semibold font-light"
                    color="#41454B"
                    // fontSize={14}
                  >
                    SKU{' '}
                  </Text>
                  <Text className="inline font-thin primary-font-medium">
                    {product.sku}
                  </Text>
                </Box>
                {/* <Text className="primary-font-regular" color={'#41454B'}>
                  In store at {product.availability}
                </Text> */}
                <Box>
                  <Text
                    className="inline primary-font-semibold font-normal"
                    color="#41454B"
                    // fontSize={14}
                  >
                    In store at{' '}
                  </Text>
                  <Text className="inline font-thin primary-font-medium">
                    {product.availability}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
