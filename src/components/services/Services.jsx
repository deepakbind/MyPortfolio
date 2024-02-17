import React, { useState } from "react";
import "./services.css";
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Services = () => {
  const [toggleStates, setToggleStates] = useState([false, false, false]);

  const toggleTab = (index) => {
    const newToggleStates = toggleStates.map((state, i) => (i === index ? !state : state));
    setToggleStates(newToggleStates);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">What I Learn</span>

      <div className="services__container container grid">
        {[0, 1, 2].map((index) => (
          <div className="services__content" key={index}>
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                Website <br /> Designer
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(index)}>
              View More
              <FaArrowRight />
            </span>

            <div
              className={
                toggleStates[index]
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                {/* Conditionally render IoMdClose icon when modal is active */}
                {toggleStates[index] && <IoMdClose onClick={() => toggleTab(index)} className="services__modal-close" />}
                
                <h3 className="services__modal-title">Website Designer</h3>
                <p className="services__modal-description">
                  Experience with more than 2 years, build the website, learn to
                  improve more, and developed the RIF website, which is
                  the official website of RIFMJPRU.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Website page development.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create UI/UX element interactions.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
