import { useReducer, useRef } from "react"



//1 init atate
export const initState = {
    job: '',
    jobs: []
}
//2 Action
export const SET_JOB = 'set_job'
export const ADD_JOB = 'add_job'
export const DELETE_JOB = 'delete_job'

export const setJob = payload => {
    return {
        type: SET_JOB,
        payload 
    }
}
export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
export const deleteJob = payload => { 
    return {
        type: DELETE_JOB,
        payload
    }
}
//3 reducer
const reducer = (state, action) => {
    console.log('Action: ', action)
    console.log('pre state: ', state)
    let newState
    switch(action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload,1)
            newState = {
                state,
                jobs: newJobs
            }
            break
        default:
            return new Error('Invalif action.')
        }
    console.log('newState: ',newState);
    return newState
}

function App () {
    const [state, dispatch] = useReducer(reducer, initState)
    const {job, jobs} = state
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    const inputRef = useRef()
    return (
        <div>
            <h3>To do</h3>
            <input
            ref={inputRef}
            value={job}
            placeholder="enter todo ..."
            onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                        &times;    
                        </span>
                     </li>
                ))}
            </ul>
        </div>
    )
}
export default App