import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa"; // phone & email icons

function Footer() {
  return (
    <footer className="site-footer pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">

          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-2">Company Information</h5>
            <div className="footer-divider mb-3"></div>
            <p className="links small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim, nisl at volutpat facilisis.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-2">Quick Links</h5>
            <div className="footer-divider mb-3"></div>
            <ul className="list-unstyled">
              <li className="mb-2"><Link className="links" to="/">Home</Link></li>
              <li className="mb-2"><Link className="links" to="/about">About</Link></li>
              <li className="mb-2"><Link className="links" to="/contact">Contact</Link></li>
              <li className="mb-2"><Link className="links" to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-2">Contact Information</h5>
            <div className="footer-divider mb-3"></div>
            <p className="links small mb-1">
              #83, Kirana View Sargodha, Punjab
            </p>
            <p className="links small mb-1">
              <FaPhone className="me-2" /> +92 3086772082
            </p>
            <p className="links small mb-1">
              <FaPhone className="me-2" /> +92 8888XXXXXX
            </p>
            <p className="links small mb-1">
              <FaEnvelope className="me-2" /> email@domain.com
            </p>
          </div>

        </div>

        <div className="footer-bottom text-center mt-3 pt-3 small">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
