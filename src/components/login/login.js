import { computeHeadingLevel } from "@testing-library/react";
import { connect } from "react-redux";
import react from "react";
import {Link} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    age: state.age,
    name:state.name
  };
};

let Login = (props) => {
  let handleSubmit = () => {
    let aage=document.getElementById("age").value;
    let nname=document.getElementById("name").value;
    props.dispatch({ type: "ADD_AGE",payload:aage });
    props.dispatch({ type: "SAVE_NAME",payload:nname });
  };


  return (
    <div>
      <label>Enter your name</label>
      <input type="text" placeholder="Name" id="name"></input>
      <br></br>
      <label>Enter your age</label>
      <input type="text" placeholder="Number" id="age"></input>
      <br></br>
      <button label="Save name" onClick={handleSubmit}>
        Save the name and take me to the next page
      </button>
    <h2>Age after 10 years {props.age}</h2>
    </div>
  );
};

export default connect(mapStateToProps)(Login);
//export default Login;