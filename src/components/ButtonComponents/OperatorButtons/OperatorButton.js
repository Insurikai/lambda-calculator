import React from "react";

export default (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator}
    </button>
  );
};
