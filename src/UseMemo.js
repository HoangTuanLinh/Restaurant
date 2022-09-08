import {useState, useMemo, useRef} from 'react'

function App() {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [products, setProducts] = useState([])

    const nameRef = useRef()
    const handleSubmit = () => {
        setProducts([...products,{
            name,
            price : Number(price)
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }
    const total = useMemo(() => {
        const result = products.reduce((acc,curr) => {
            console.log("re-render");        
            return acc + curr.price
        }
        ,0)
        return result
    },[products])
    return (
        <div>
            <input
            ref={nameRef}
            value={name}
            placeholder="Enter Name ..." 
            onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
            value={price}
            placeholder="Enter price ..." 
            onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            <p>Total: {total}</p>
            <ul>
                {products.map((product,index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default App