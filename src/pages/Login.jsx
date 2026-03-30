import fata from "../assets/ahmad.jpg";

function Login() {
  return (
    <>
      <div className="login-body">
        <div className="left-side">
          <h2>Login</h2>

          <input className="input" placeholder="Enter Your Name" />

          <input type="password" class="input" placeholder="Password" />

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
