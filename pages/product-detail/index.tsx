import {
  Box,
  Divider,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ProductDetail(): React.ReactNode {
  return (
    <div
      style={{
        backgroundColor: '#F8FBF8',
        minHeight: '100vh',
      }}
      className="pt-12"
    >
      <div className="px-14">
        <Heading
          h={5}
          size="lg"
          mb={2}
          className="primary-font-semi-bold-italic whitespace-nowrap"
          color={'#41454B'}
        >
          Product Details
        </Heading>
      </div>

      <Divider className="mx-5 mt-4" />

      <div className="mt-2 px-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-28">
        <div>
          <FormLabel h={6} className="primary-font-semibold" color={'#41454B'}>
            Product Name
          </FormLabel>
          <Input type="text" borderWidth={2} />
          <div className="flex-row justify-between items-center mt-2 grid grid-cols-1 sm:grid-cols-2">
            <div>
              <FormLabel
                h={6}
                className="primary-font-semibold"
                color={'#41454B'}
              >
                SKU
              </FormLabel>
              <Input
                type="text"
                borderWidth={2}
                className="primary-font-medium"
              />
            </div>
            <div className="sm:w-full sm:pl-3 mt-2 sm:mt-0">
              <FormLabel
                h={6}
                className="primary-font-semibold whitespace-nowrap"
                fontWeight={'medium'}
                color={'#41454B'}
              >
                Unit Of Measure
              </FormLabel>
              <Select
                backgroundColor={'#FFA382'}
                color={'white'}
                className="primary-font-medium"
              >
                <option value="option1">Grams</option>
                <option value="option2">Kilograms</option>
                <option value="option3">Packets</option>
                <option value="option1">Boxes</option>
                <option value="option2">Containers</option>
              </Select>
            </div>
          </div>
          <div className="flex-row justify-between items-center mt-2 grid grid-cols-1 sm:grid-cols-2">
            <div className="w-full">
              <FormLabel
                h={6}
                className="primary-font-semibold whitespace-nowrap"
                fontWeight={'medium'}
                color={'#41454B'}
              >
                Type Of Pricing
              </FormLabel>
              <Select
                backgroundColor={'#FFA382'}
                color={'white'}
                className="primary-font-medium"
              >
                <option value="option1">Complex</option>
                <option value="option2">Regular</option>
              </Select>
            </div>
            <div className="sm:pl-3 mt-2 sm:mt-0">
              <FormLabel
                h={6}
                className="primary-font-semibold whitespace-nowrap"
                color={'#41454B'}
              >
                Quantity Remaining
              </FormLabel>
              <Input
                type="text"
                borderWidth={2}
                className="primary-font-medium"
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <FormLabel
              h={6}
              className="primary-font-semibold"
              fontWeight={'medium'}
              color={'#41454B'}
            >
              Category
            </FormLabel>
            <Select
              backgroundColor={'#FFA382'}
              color={'white'}
              className="primary-font-medium"
            >
              <option value="option1">Ices</option>
              <option value="option2">Pre-Rolled</option>
              <option value="option3">Flowers</option>
              <option value="option1">Tablets</option>
              <option value="option2">CBD Products</option>
              <option value="option1">Oil Capsules</option>
              <option value="option2">Oral Sprays</option>
              <option value="option3">Gel</option>
              <option value="option1">Chewable</option>
              <option value="option2">Essential Oil</option>
            </Select>

            <FormLabel
              h={6}
              className="primary-font-semibold mt-2"
              fontWeight={'medium'}
              color={'#41454B'}
            >
              Manufacturer
            </FormLabel>
            <Select
              backgroundColor={'#FFA382'}
              color={'white'}
              className="primary-font-medium"
            >
              <option value="option1">Cresco Labs</option>
              <option value="option2">Aurora Cannabis Inc.</option>
              <option value="option3">Aphria Inc.</option>
              <option value="option1">VIVO Cannabis Inc.</option>
              <option value="option2">Steep Hill, Inc.</option>
              <option value="option1">Willie's Reserve</option>
              <option value="option2">Terrascend Corp</option>
              <option value="option3">GW Pharmaceuticals</option>
              <option value="option1">Truelieve Cannabis</option>
              <option value="option2">Cannaby Growth Corporation</option>
            </Select>

            <FormLabel
              h={6}
              className="primary-font-semibold mt-2"
              fontWeight={'medium'}
              color={'#41454B'}
            >
              Description
            </FormLabel>
            {/* <Input size={'lg'} variant={'filled'} /> */}
            <Textarea />
          </div>
          {/* <div className="flex-row flex justify-between items-center">
            <div>
              <FormLabel h={6} className="primary-font-semibold">
                Product Name
              </FormLabel>
              <Input type="text" width={200} borderWidth={2} />
            </div>
            <div>
              <FormLabel h={6} className="primary-font-semibold">
                Product Name
              </FormLabel>
              <Input type="text" width={200} borderWidth={2} />
            </div>
          </div> */}
        </div>

        <div
          // className="flex justify-center items-center border-2 border-purple-600 flex-1"
          // className="border-2 border-red-600"
          style={{
            height: '100%',
          }}
        >
          <Box className="rounded-3xl px-8 py-20 bg-white">
            {/* <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider> */}
          </Box>
        </div>
      </div>
    </div>
  );
}
