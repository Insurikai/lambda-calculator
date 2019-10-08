import React,{ useState } from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton'

//import any components needed

//Import your array data to from the provided data file

export const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className="operators">
      {operatorState.map((element)=>{return <OperatorButton key={`operators ${operatorState.indexOf(element)}`} operator={element.char}/>;})}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
