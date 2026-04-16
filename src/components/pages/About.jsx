import { Link } from "react-router-dom";
import VMC from "../inc/Vmc";

function Aboutus() {
  return (
    <div>
      <section className="page-banner py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <Link to="/contact" className="btn page-banner-link float-end">
                <strong>Contact Us</strong>
              </Link>
              <Link to="/" className="btn page-banner-link float-end">
                <strong>Home</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-muted">
        <div className="container">
          <h5 className="main-heading">Our Company</h5>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            debitis quasi corrupti quam placeat aperiam doloremque nulla cum
            explicabo sint, numquam, eos qui rerum veritatis sit tenetur,
            eligendi magnam. Error.
          </p>
        </div>
      </section>
      <VMC />
    </div>
  );
}

export default Aboutus;
