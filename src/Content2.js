import {memo} from 'react'

function Content({onRun}) {
    console.log(123);
    return (
        <div>
            <h2>Chao anh em f8 </h2>
            <button onClick={onRun}>run</button>
        </div>
    )
}
export default memo(Content)