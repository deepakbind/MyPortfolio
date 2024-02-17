import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journery</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">MJPRU-Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil--calendar-alt"></i>
                  2020-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">IBICNS SRN Bhadohi</h3>
                <span className="qualification__subtitle">State-Board</span>
                <div className="qualification__calender">
                  <i className="uil uil--calendar-alt"></i>
                  2019-12th
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IBICNS SRN Bhadohi</h3>
                <span className="qualification__subtitle">State Board</span>
                <div className="qualification__calender">
                  <i className="uil uil--calendar-alt"></i>
                  2017-10th
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              {/* <div>
                <h3 className="qualification__title">M.Tech</h3>
                <span className="qualification__subtitle">Further</span>
                <div className="qualification__calender">
                  <i className="uil uil--calendar-alt"></i>?
                </div>
              </div> */}
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MJPRU IT-Clinic </h3>
                <span className="qualification__subtitle">
                  Technical Team Member
                </span>
                <div className="qualification__calender">
                  <i className="uil uil--calendar-alt"></i>
                  2023-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Website Developed</h3>
                <span className="qualification__subtitle">RIFMJPRU</span>
                <div className="qualification__calender">
                  <i className="uil uil--calendar-alt"></i>
                  2023-April
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Bharat Intern</span>
                <div className="qualification__calender">
                  <i className="uil uil--calendar-alt"></i>
                  2023-OCT
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
