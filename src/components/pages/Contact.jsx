function Contact() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Contact Us</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1" for="">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1" for="">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1" for="">
                      Email
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1" for="">
                      Message
                    </label>
                    <textarea
                      name=""
                      id=""
                      rows="3"
                      className="form-control"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className="form-group py-3">
                    <button type="button" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border-start">
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
