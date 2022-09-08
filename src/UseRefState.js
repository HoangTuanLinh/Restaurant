import {useState, useRef, useEffect} from 'react'


function App() {
    const [count, setCount] = useState(60)

    const timeId = useRef()
    const preCount = useRef()
    const h1Ref = useRef()
    useEffect(() => {
        console.log(h1Ref.current);
    })
    useEffect(() => {
        preCount.current = count
    },[count])
    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount(preCount => preCount -1)
        },1000)
    }
    const handleStop = () => {
        clearInterval(timeId.current)
    }
    console.log(count, preCount.current);
  return (
    <div style={{padding: 32}}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
