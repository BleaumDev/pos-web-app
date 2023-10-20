import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Flex } from '@chakra-ui/react';
import SmallCard from '@lib/components/pos/small-card';
import carouselData from 'data/carouselData';
import Slider from 'react-slick';

const PosCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {carouselData.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Flex gap="30px" mt="10px" key={index}>
          <SmallCard title={item.title} image={item.image} />
        </Flex>
      ))}
    </Slider>
  );
};

export default PosCarousel;
