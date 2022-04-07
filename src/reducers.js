import { SAVE_NAME, ADD_AGE } from "./action";

const initialState = {
  age: 0,
  name:'',
};

function reducer(state = initialState, action) {
    console.log(action.payload)
  switch (action.type) {
    case ADD_AGE:
      return { ...state,age: parseInt(action.payload) + 10 };
      case SAVE_NAME:
          console.log(action.payload)
        return { ...state,name: 'Mr. '+ action.payload };
    default:
      return state;
  }
}

export default reducer;
