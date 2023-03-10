import React from "react";
import "./ErrorBox.css";
function ErrorBox({ msg }) {
  return (
    <div className="errorbox-msg">
      <h1> {msg}</h1>
    </div>
  );
}

export default ErrorBox;
