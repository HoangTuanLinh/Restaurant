import {useState} from 'react'


function App() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        console.log(storageJobs);
        return storageJobs
    })
    const handleAdd = () => {
        setJobs(pre => {
            const newJobs = [...pre,job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })
        setJob('')
    }

  return (
    <div>
    <input
    type="text"
    value={job}
    onChange={(e) => setJob(e.target.value)}
    />
    <button onClick={handleAdd}>Add</button>
    <ul>
        {jobs.map((job, index) => (
            <li key={index}>{job}</li>
        ))}
    </ul>
    </div>
  );
}

export default App;
