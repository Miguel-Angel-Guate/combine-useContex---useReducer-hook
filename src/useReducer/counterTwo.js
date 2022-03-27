export const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
export const countReducerTWo = (state, action) => {
    switch (action.type) {
        // firt example in CounterTwo.js
        // case 'increment':
        //     return {firstCounter: state.firstCounter + 1}
        // case 'decrement':
        //     return {firstCounter: state.firstCounter - 1}
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2': 
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return  initialState
        default:
            return state
    }
}