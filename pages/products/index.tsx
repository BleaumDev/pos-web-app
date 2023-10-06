import { Box } from '@chakra-ui/react';
import Heading from '@lib/components/base/heading';
import Product from '@lib/components/product';
import { TextInput } from '@lib/components/product/TextInput';

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

export default function Products() {
  return (
    <Box m="4em">
      <div className="flex justify-between">
        <Heading h={6}>
          All Products
          <Box as="span" color="#FF8A43">
            {`(${3293}+)`}
          </Box>
        </Heading>
        <TextInput />
      </div>

      <Box mt={50}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-w-[100vh] sm:min-w-md">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                name={product.name}
                sku={product.sku}
                price={product.price}
                availability={product.availability}
              />
            );
          })}
        </div>
      </Box>
    </Box>
  );
}
