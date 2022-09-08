import {useState} from 'react'
import {useEffect} from 'react'

// const orders = [100, 200, 300] 

function App() {
    const [countDown, setCountDown] = useState(180)
    const timeId = useEffect(() => {
        setTimeout(() => {
            setCountDown(countDown -1)
        },1000)
        return () => clearTimeout(timeId)
    },[countDown])
    // useEffect(() => {
    //     setInterval(() => {
    //         setCountDown(preState => preState -1)
    //     },1000)
    // },[])
    
  return (
    <div style={{padding: 32}}>
      <h1>{countDown}</h1>
    </div>
  );
}

export default App;
