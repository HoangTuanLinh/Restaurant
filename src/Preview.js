import {useState, useEffect} from 'react'

function App() {
    const [avata, setAvata] = useState()
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avata)
        }
    },[avata])
    const handlePreviewAvata = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvata(URL.createObjectURL(file))
        e.target.value = null
    }
    return (
        <div>
            <input
            type="file"
            onChange={handlePreviewAvata}
            />
            {avata && ( 
                <img src={avata} alt="" width="80%"/>
            )}
        </div>
    )
}
export default App