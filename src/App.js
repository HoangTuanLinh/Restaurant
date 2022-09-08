import {useState} from 'react'
import Content from './Content';
// const orders = [100, 200, 300]

function App() {
  
  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((acc,curr) => acc + curr)
  //   return total
  // })
  // const [info, setInfo] = useState({
  //   name: 'Nguyen van a',
  //   age: 18 ,
  //   address: 'Ha Noi, VN'
  // })

  // const handleIncrese = () => {
  //   // setCounter(counter + 1)
  //   setCounter(preState => preState + 1)
  // }
  // const handleUpdate = () => {
  //   setInfo({
  //     ...info,
  //     bio: 'dnfhjfbhd'
  //   })
  // }
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      {/* <h1>{JSON.stringify(info)}</h1> */}
      {/* <button onClick={handleUpdate}>Increase</button> */}
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Content />}
    </div>
  );
}

export default App;
