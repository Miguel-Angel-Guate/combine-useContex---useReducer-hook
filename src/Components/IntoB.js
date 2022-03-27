import { useContext } from "react";
import { CounterContext } from "../App";
const IntoB = () => {
    const counterContext = useContext(CounterContext)
    return ( <>
    <h2>Into B</h2>
    <h2>{counterContext.countState.firstCounter}</h2>
    <div>
            <button onClick={() => counterContext.countDispatch({type:'increment', value: 1})}>Increment</button>
            <button onClick={() => counterContext.countDispatch({type: 'decrement', value: 1})}>Decremen</button>
            <button onClick={()=> counterContext.countDispatch({type:'reset'})}>Reset</button>
            <button onClick={()=> counterContext.countDispatch({type: 'increment', value: 5})}>Increment with 5 value</button>
            <button onClick={()=> counterContext.countDispatch({type: 'decrement', value: 5})}>decrement with 5 value</button>

        </div>

    </> );
}
 
export default IntoB;