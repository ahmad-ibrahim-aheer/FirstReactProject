import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const themeOptions = [
  { id: "light", label: "Light mode", icon: FaSun },
  { id: "dark", label: "Dark mode", icon: FaMoon },
  { id: "system", label: "System theme", icon: FaDesktop },
];

function NavScrollExample({ theme, themePreference, setThemePreference }) {
  return (
    <>
      <Navbar
        expand="lg"
        className="app-navbar border-bottom"
        data-bs-theme={theme}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            WIC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto align-items-lg-center gap-lg-2">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact us
              </Nav.Link>
              <div
                className="theme-toggle-group"
                role="group"
                aria-label="Theme selection"
              >
                {themeOptions.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    className={`theme-toggle-btn ${
                      themePreference === id ? "is-active" : ""
                    }`}
                    onClick={() => setThemePreference(id)}
                    aria-label={label}
                    title={label}
                    aria-pressed={themePreference === id}
                  >
                    <Icon aria-hidden="true" />
                  </button>
                ))}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
