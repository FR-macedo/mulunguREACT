import Carousel from 'react-bootstrap/Carousel';
import ImagemUm from '../imgs/telas_3d.png';
import ImagemDois from '../imgs/telas_3d.png';
import ImagemTrês from '../imgs/telas_3d.png';

function CarouselIndex() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <ImagemUm text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImagemDois text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImagemTrês text="Third slide" />
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

export default CarouselIndex;