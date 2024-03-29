import React from "react";
import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
          <Link to="/" className='footer__link'>Home</Link>

            <span href="/" className="footer__link no-cursor">
              About
            </span>
            {/* This about link exists just so the webpage looks good, but later on it should be an link */}
            {/* that leads to an about page. */}
            <Link to="/books" className='footer__link'>Books</Link>
            <Link to="/cart" className='footer__link'>Cart</Link>
          </div>
          <div className="footer__copyright">
            Cppyright &copy; 2024 Library
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
