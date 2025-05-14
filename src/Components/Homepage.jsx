import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import shopping from "../assests/image3.jpg"
import mens from "../assests/menwear.jpg"
import women from "../assests/womenfashion1.jpg"
import kids from "../assests/kidswear.jpg"

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div className='sliding'>
        <img src={shopping} alt="Slide 1"  style={{ height: '620px', objectFit: 'cover' }}/>
        <p className="legend"><h6>Sale is Live</h6></p>
      </div>
      <div>
        <img src={mens} alt="Slide 2" style={{ height: '620px', objectFit: 'cover' }} />
        <p className="legend"> Top Brands 50% off on Mens wear</p>
      </div>
      <div>
        <img src={women} alt="Slide 2" style={{ height: '620px', objectFit: 'cover' }} />
        <p className="legend">Top Brands 50% off on Womens wear</p>
      </div>
      <div>
        <img src={kids} alt="Slide 2" style={{ height: '620px', objectFit: 'cover' }} />
        <p className="legend">Top Brands 50% off on Kids wear</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
