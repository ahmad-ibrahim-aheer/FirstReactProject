import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Card from "../inc/Card";

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
      <Card/>
    </div>
  );
}

export default Home;
