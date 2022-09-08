import { useReducer } from "react";

// 1. Init State
const initState = 0

// 2. Action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// 3.Reducer

const reducer = (state, action) => {
    switch(action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')

    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    )
}
export default App