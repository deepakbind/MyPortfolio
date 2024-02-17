import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Deepak Kumar Bind</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100071964353241"
            className="footer__social-link"
            target="_blank"
          >
            {/* <i class="bx bxl-facebook"></i> */}
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/d.e.e.p.a.k__37/"
            className="footer__social-link"
            target="_blank"
          >
            {/* <i class="bx bxl-instagram"></i> */}
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com/rdbind9695"
            className="footer__social-link"
            target="_blank"
          >
            {/* <i class="bx bxl-twitter"></i>
             */}
             <FaXTwitter />
          </a>
        </div>
 
        <span className="footer__copy">
          &#169;DeepakKumarBind.All rights reserver
        </span>
      </div>
    </footer>
  );
};

export default Footer;
