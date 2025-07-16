import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../image/1d.jpeg';
import img2 from '../image/2d.jpeg';
import img3 from '../image/3d.jpeg';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1} alt="First slide" className="d-block w-100" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="Second slide" className="d-block w-100" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="Third slide" className="d-block w-100" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
  );
}



export default UncontrolledExample;