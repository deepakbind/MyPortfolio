import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import ProgrammingLanguages from './ProgrammingLanguages';
import ITConstructs from './ITConstructs';
import OtherSkills from './OtherSkills';

const Skills = () => {
  return (
    <section className="skils section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <ProgrammingLanguages/>
        <ITConstructs/>
        <OtherSkills/>
      </div>
    </section>
  );
};

export default Skills;
