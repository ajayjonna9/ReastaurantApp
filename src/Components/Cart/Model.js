import React from "react";
import ReactDOM from "react-dom";
import "./Model.css";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onclick}></div>;
};
const ModelOverlay = (props) => {
  return <div className="modal">{props.children}</div>;
};

const Model = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onclick={props.onclick} />,
        document.getElementById("overlays")
      )}
      ;
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        document.getElementById("overlays")
      )}
      ;
    </React.Fragment>
  );
};

export default Model;
