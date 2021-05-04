import React, { useState } from "react";
import CarouselCSS from "./styles";
import ProjectCard from "../card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const ProjectCarousel = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.projects.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.projects) || length <= 0) {
    return null;
  }
  return(
    <CarouselCSS>
        <FaAngleLeft className='left-arrow arrows' onClick={prevSlide} />
        <FaAngleRight className='right-arrow arrows' onClick={nextSlide} />
        {props.projects.map((proj, idx) => (
            <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
                {idx === current &&
                    <ProjectCard
                    photo={proj.photo}
                    name={proj.name}
                    description={proj.description}
                    link={proj.link}
                    key={idx}
                    />
                }
            </div>
        ))}
    </CarouselCSS>
  );

};

export default ProjectCarousel;
