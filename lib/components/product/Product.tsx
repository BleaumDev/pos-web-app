/* eslint-disable */

import { Heading, Image, Text } from '@chakra-ui/react';

interface IProduct {
  name: string;
  price: number;
  availability?: string;
  sku?: string;
}

export default function Product({ name, price, availability, sku }: IProduct) {
  return (
    <div
      className="mt-2 mb-2 px-3 py-5 min-w-[200px] rounded-3xl"
      style={{
        backgroundColor: 'white',
        margin: 10,
      }}
    >
      <Image src="/images/image2.png" alt="" />
      <div className="flex flex-row justify-between items-center">
        <div>
          <Heading
            h={6}
            fontSize={17}
            color="#41454B"
            className="primary-font-semibold"
          >
            {name}
          </Heading>
        </div>
        <div>
          <Text className="primary-font-semibold" color="orange">
            ${price.toFixed(2)}
          </Text>
        </div>
      </div>
      <div>
        <Text
          className="inline primary-font-semibold font-light"
          color="#41454B"
        >
          SKU
        </Text>
        <Text className="inline font-thin primary-font-medium">{sku}</Text>
      </div>
      <div>
        <Text
          className="inline primary-font-semibold font-normal"
          color="#41454B"
        >
          In store at{' '}
        </Text>
        <Text className="inline font-thin primary-font-medium">
          {availability}
        </Text>
      </div>
    </div>
  );
}
