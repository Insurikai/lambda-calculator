import React from "react";

export default (props) => {
  return (
    <button className="function">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </button>
  );
};