import React from "react";
import ReactDOM from "react-dom";
import "./Model.css";
const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};
const ModelOverlay = (props) => {
  return <div className="modal">{props.children}</div>;
};

const Model = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
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
