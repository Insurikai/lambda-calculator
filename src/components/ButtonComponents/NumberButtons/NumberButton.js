import React from "react";

export default (props) => {
  if(props.number == 0){return ( <button className="number zero">{props.number}</button> );}
  return (
    <button className="number">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};