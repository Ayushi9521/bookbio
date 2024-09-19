const Header = () => {
  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="../../public/iconm.png" alt="logo" />
          <span className="brand">BookBuddy</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#working">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#pricing"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Plans
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Free
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pro
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Team
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
