// Here we need to first import createStore
import { createStore } from "redux";

// This is reducer function who change the state of central store
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    // Increment the counter by 2 when "increment" action is dispatched
    return {
      counter: state.counter + 5,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 5,
    };
  }
  return state;
};

// Create the store by passing the counterReducer function
const store = createStore(counterReducer);

export default store;
