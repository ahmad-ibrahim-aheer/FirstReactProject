import fata from "../assets/ahmad.jpg";

function Login() {
  return (
    <>
      <div className="login-body">
        <div className="left-side">
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
              size={100}
              style={{
                maxWidth: "10px",
              }}
            />
          </div>

          <input type="password" className="input" placeholder="Password" />

          <button className="btn">Login</button>
          <a className="Signup">
            Don't have an account? <b>Register</b>
          </a>
        </div>

        <div className="right-side">
          <img className="image" src={fata} alt="login" />
        </div>
      </div>
    </>
  );
}

export default Login;
