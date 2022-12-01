import React from "react";
import "./Model.css";
const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};
const ModelOverlay = (props) => {
  return <div className="modal">{props.children}</div>;
};

const Model = (props) => {
  return (
    <div>
      <Backdrop />
      <ModelOverlay>{props.children}</ModelOverlay>
    </div>
  );
};

export default Model;
