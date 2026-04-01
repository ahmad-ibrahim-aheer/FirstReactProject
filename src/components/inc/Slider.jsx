import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/img3.jpg";

function DarkVariantExample() {
  return (
    <>
      {" "}
      {/* <div className="container"> */}
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-25" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h5>Unleashing the light within.</h5>
              <p>
                An epic display of ultimate power. Breaking through the shadows.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-25"
              src={img1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-25"
              src={img1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      {/* </div> */}
    </>
  );
}

export default DarkVariantExample;
