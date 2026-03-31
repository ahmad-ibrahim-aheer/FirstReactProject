import fata from "../assets/ahmad.jpg";

function Login() {
  return (
    <>
      <div className="container text-center">
        <div className="login-body row">
          <div className="container col">
            <h2>Login</h2>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Name
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                style={{
                  maxWidth: "70%",
                }}
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Name
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                style={{
                  maxWidth: "70%",
                }}
              />
            </div>

            <button type="button" class="btn btn-primary">
              Login
            </button>
            <a className="pe-auto">
              Don't have an account? <b>Register</b>
            </a>
          </div>

          <div className="container col">
            <img
              className="img-fluid"
              style={{
                display: "",
                overflow: "hidden",
              }}
              src={fata}
              alt="login"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
