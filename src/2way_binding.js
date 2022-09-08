import {useState} from 'react'

// const orders = [100, 200, 300] 

const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]

function App() {
    const [checked, setChecked] = useState([])
    const handelSubmit= () => {
        console.log({ids: checked});
    }
    const handleChecked = (id) => {
        setChecked(pre => {
            const isChecked = checked.includes(id)
            if(isChecked) {
                return checked.filter(item => item !== id)
            }else {
                return [...pre,id]
            }
        })
    }
    console.log(checked);
  return (
    <div style={{padding: 32}}>
        {courses.map(course => (
            <div key={course.id}>
                <input
                type="checkbox"
                checked={checked.includes(course.id)}
                onChange={() => handleChecked(course.id)}
                />
                {course.name}
            </div>
        ))}
        <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}
// function App() {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const handelSubmit= () => console.log({
//         name,
//         email
//     })
//   return (
//     <div style={{padding: 32}}>
//       <input
//       value={name}
//       onChange={e => setName(e.target.value)}
//       />
//       <p>{name}</p>
//       <input 
//       value={email}
//       onChange={e => setEmail(e.target.value)}
//       />
//       <button onClick={handelSubmit}>Change</button>

//     </div>
//   );
// }

export default App;
