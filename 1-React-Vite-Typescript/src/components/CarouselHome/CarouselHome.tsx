import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ maxWidth: "50%", height: "auto", objectFit: 'contain' }}
          src="src/assets/images/1.jpg"
          alt="1"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ maxWidth: "50%", height: "auto", objectFit: 'contain' }}
          src="src/assets/images/2.jpg"
          alt="2"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ maxWidth: "50%", height: "auto", objectFit: 'contain' }}
          src="src/assets/images/3.jpg"
          alt="3"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
