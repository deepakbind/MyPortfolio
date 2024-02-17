import React from "react";
import "./social.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/d.e.e.p.a.k__37/"
        className="home__social-icon"
        target="_blank"
      >
        {/* <i class="uil uil-instagram"></i> */}
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/in/deepak-kumar-bind-1a9927239/"
        className="home__social-icon"
        target="_blank"
      >
        {/* <i class="uil uil-linkedin-alt"></i> */}
        <FaLinkedinIn />
      </a>

      <a
        href="https://github.com/deepakbind"
        className="home__social-icon"
        target="_blank"
      >
        {/* <i class="uil uil-github-alt"></i> */}
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
