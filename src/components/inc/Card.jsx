import image from "../images/img3.jpg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  className="w-100 border-bottom"
                  src={image}
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Autem recusandae consectetur repellat. Accusamus architecto
                    quasi, consequuntur, distinctio quia recusandae a aspernatur
                  </p>
                  <Link to="/about" className="btn btn-link">
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  className="w-100 border-bottom"
                  src={image}
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Service 2</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Autem recusandae consectetur repellat. Accusamus architecto
                    quasi, consequuntur, distinctio quia recusandae a aspernatur
                  </p>
                  <Link to="/about" className="btn btn-link">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  className="w-100 border-bottom"
                  src={image}
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Service 3</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Autem recusandae consectetur repellat. Accusamus architecto
                    quasi, consequuntur, distinctio quia recusandae a aspernatur
                  </p>
                  <Link to="/about" className="btn btn-link">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
