import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "../inc/Vmc";
import image from "../images/img3.jpg";

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">My Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                rem, necessitatibus laborum consequuntur nulla reprehenderit
                sapiente deleniti officiis nihil cum minima animi perspiciatis
                inventore quaerat, voluptatibus sunt similique id esse.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  className="w-100 border-bottom"
                  src={image}
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Services 1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Autem recusandae consectetur repellat. Accusamus architecto
                    quasi, consequuntur, distinctio quia recusandae a aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VMC />
    </div>
  );
}

export default Home;
