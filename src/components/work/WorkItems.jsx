import React from "react";
import { FaArrowRight } from "react-icons/fa";


const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.links} className="work__button">
        Demo <FaArrowRight/>
         
      </a>
    </div>
    
  );
};

export default WorkItems;
