//Dependencies
import React from "react";

//Style
import "./Spinner.css";

const spinner = props => (
  <div className="spinner">
    <div className="lds-circle">
      <div> </div>
    </div>
  </div>
);

export default spinner;
