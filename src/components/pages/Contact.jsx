import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <section className="page-banner py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <Link to="/about" className="btn page-banner-link float-end">
                <strong>About Us</strong>
              </Link>
              <Link to="/" className="btn page-banner-link float-end">
                <strong>Home</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card shadow surface-card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1" htmlFor="phoneNumber">
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="tel"
                      className="form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      className="form-control"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className="form-group py-3">
                    <button type="button" className="btn btn-warning w-100">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="col-md-6 contact-sidebar">
                  <h5 className="main-heading">Address Information</h5>
                  <div className="underline"></div>
                  <p>
                    #83, Sargodha, Kirana View Sargodha, 40100-Punjab, Pakistan
                  </p>
                  <p>Phone : +92 3000000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
