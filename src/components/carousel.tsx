import Carousel from "react-bootstrap/Carousel";

export const ControlledCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src="/images/manikur.png" alt="First slide" />
        <Carousel.Caption>
          <h3>Sale 30%</h3>
          <p>from 01.01 to 07.01</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/maskara.png" alt="Second slide" />

        <Carousel.Caption>
          <h3>Black Friday</h3>
          <p>Sale 70%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/pensel.png" alt="Third slide" />

        <Carousel.Caption>
          <h3>New collections</h3>
          <p>New collections New collections</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
