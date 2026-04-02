import VMC from "../inc/Vmc";

function Aboutus() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / About Us</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
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
