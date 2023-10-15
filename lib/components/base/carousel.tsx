import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Flex } from '@chakra-ui/react';
import SmallCard from '@lib/components/pos/small-card';
import Slider from 'react-slick';

const categoryData = [
  { title: 'All Items', image: '/images/all-items.png' },
  { title: 'Capsules', image: '/images/capsules.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
  { title: 'Tinctures', image: '/images/tinture.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
  { title: 'Flowers', image: '/images/flowers.png' },
  { title: 'Drinks', image: '/images/drinks.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
  { title: 'All Items', image: '/images/all-items.png' },
  { title: 'Capsules', image: '/images/capsules.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
  { title: 'Tinctures', image: '/images/tinture.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
  { title: 'Flowers', image: '/images/flowers.png' },
  { title: 'Drinks', image: '/images/drinks.png' },
  { title: 'Edibles', image: '/images/edibles.png' },
];

const PosCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 6,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {categoryData.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Flex gap="30px" mt="10px" key={index}>
          <SmallCard title={item.title} image={item.image} />
        </Flex>
      ))}
    </Slider>
  );
};

export default PosCarousel;
