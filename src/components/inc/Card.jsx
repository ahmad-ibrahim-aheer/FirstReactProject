import image from "../images/img3.jpg";

function Card() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow">
              <img className="w-100 border-bottom" src={image} alt="Services" />
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
  );
}

export default Card;