import logo from './logo.svg';
import './App.css';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import React, { useReducer } from 'react';
import { countReducerTWo, initialState } from './useReducer/counterTwo';
export const CounterContext = React.createContext()
function App() {
  const [count, dispatch] =useReducer(countReducerTWo, initialState)
  return (
    <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>

    <div className="App">
      <h1>Count - {count.firstCounter}</h1>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
