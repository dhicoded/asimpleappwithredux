import { computeHeadingLevel } from "@testing-library/react";
import { connect, useSelector, useDispatch } from "react-redux";
import react from "react";

const mapStateToProps = (state) => {
  return {
    age: state.age,
    name: state.name,
  };
};

let Welcome = (props) => {
const name = useSelector((store)=>store.name)
const age = useSelector((store)=>store.age)
const dispatch = useDispatch()
// dispatch({type:"SAVE_NAME",payload:"shameel"})
  return (
    <div>
      <h2>Welcome {name}</h2>
      <h3>You will be {age} after 10 years</h3>
    </div>
  );
};

export default /* connect(mapStateToProps) */(Welcome);