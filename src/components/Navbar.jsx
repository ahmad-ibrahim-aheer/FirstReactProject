function Navbar() {
  return (
    <nav className="nav">
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
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">
          Home
        </button>
        <button type="button" class="btn btn-primary">
          News
        </button>
        <button type="button" class="btn btn-primary">
          Contact
        </button>
        <button type="button" class="btn btn-primary">
          About
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
