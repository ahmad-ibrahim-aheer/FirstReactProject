function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li className="PageName">
          <a href="#" className="nav-btn_top">
            UOSAI
          </a>
        </li>
        <li className="ticker-container">
          <marquee className="moving-text">
            🚀 Latest Announcement: UOSAI is launching new features next week!
            Stay tuned...
          </marquee>
        </li>
        <li className="nav-btn">
          <a href="#" className="nav-btn_top">
            Home
          </a>
        </li>
        <li className="nav-btn">
          <a href="#" className="nav-btn_top">
            News
          </a>
        </li>
        <li className="nav-btn">
          <a href="#" className="nav-btn_top">
            Contact
          </a>
        </li>
        <li className="nav-btn">
          <a href="#" className="nav-btn_top">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
