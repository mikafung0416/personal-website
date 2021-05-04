import React from "react";
import ExpItemCSS from "./styles";

const ExpItem = (props) => {
  return (
    <ExpItemCSS>
      {
        <div className="exp">
          <div className={`left left-${props.selector}`}>
            <div className={`date date-${props.selector}`}>{props.date}</div>
          </div>
          <div className="right">
            <div className={`title title-${props.selector}`}>{props.title}</div>
            <div className="desc">
              <ul>
                {props.desc.map((descItem, idx) => (
                  <li key={idx}>{descItem}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      }
    </ExpItemCSS>
  );
};

export default ExpItem;
