const Footer = () => {
  return (
    <footer className="footer border-top">
      <div className="row">
        <div className="col-xl-7 col-lg-12">
          <span className="brand ps-0">BookBuddy</span>
          <p className="mt-4">
            Copyright © 2024 | BookBuddy All rights reserved
          </p>
        </div>
        <div className="col-xl-5 col-lg-12">
          <div className="d-flex align-items-center justify-content-between">
            <div>Find BookBudy on:</div>
            <i className="bi bi-instagram footerIcon"></i>
            <i className="bi bi-facebook footerIcon"></i>
            <i className="bi bi-linkedin footerIcon"></i>
          </div>
          <ul className="mt-3 footerNav">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
