import {useLayoutEffect, useState, useCallback} from 'react'
import Content2 from './Content2'

// const orders = [100, 200, 300] 
function App() {
    const [count, setCount] = useState(0)
    const handleRun = useCallback(() => {
        setCount(pre =>pre + 1)
    })
    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0)
        }
    },[count])
  return (
    <div style={{padding: 32}}>
        <Content2 onRun={handleRun}/>
        <h1>{count}</h1>
    </div>
  );
}

export default App;
