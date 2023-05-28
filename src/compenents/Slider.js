import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  return (
    <Carousel showThumbs={false}>
        <div>
            <img src="assets/images/1.jpg" />
        </div>
        <div>
            <img src="assets/images/2.jpg" />
        </div>
        <div>
            <img src="assets/images/3.jpg" />
        </div>
    </Carousel>
  )
}

export default Slider