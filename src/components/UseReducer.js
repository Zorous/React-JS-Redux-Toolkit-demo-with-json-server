import React, { useReducer } from 'react'


const initialState = {count: 0};



function Counter() {
  const [state, dispatch] = useReducer(reducer,initialState);

  function reducer(state, action) {
    // //1
    // switch (action.type) {
    //   case 'increment':
    //     return {count: state.count + action.payload};
    //     // return state = state + 1
    //   case 'decrement':
    //     return {count: state.count - action.payload};
    //     case 'reset':
    //         return {count : 0}
    //   default:
    //     throw new Error();
    // }

   
    if(action.type === "decrement"){return {count : state.count - 1}}
    if(action.type === "increment"){return {count : state.count + 1}}
    if(action.type === "reset"){return {count : 0}}
  }
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement',payload:2})}>-</button>
      <button onClick={() => dispatch({type: 'increment',payload:2})}>+</button>
      <button onClick={() => dispatch({type: 'reset',payload:0})}>Reset</button>
    </>
  );
}

export default Counter;