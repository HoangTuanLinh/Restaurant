import {useState} from 'react'

// const orders = [100, 200, 300] 
const gifts = [
    'CPU i9',
    'RAM 32GB RGB',
    'RGB Keyboard',
]
function App() {
    const randomGift = () => {
        const index = Math.floor(Math.random()* gifts.length)
        setItem(gifts[index])
    }
    const [item, setItem] = useState()
  return (
    <div style={{padding: 32}}>
      <h1> { item ||'Chua co phan thuong'}</h1>
      <button onClick={randomGift}>Lay thuong</button>
    </div>
  );
}

export default App;
