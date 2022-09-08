import { useEffect } from "react"
import { useState } from "react"

const tabs = ['posts','comments','albums','photos','todos','users']
function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [item, setItem] = useState('posts')
    const [goToTop, setGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${item}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    },[item])
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200) {
                setGoToTop(true)
            }else {
                setGoToTop(false)
            }
        }
            // setGoToTop(window.scrollY >= 200)
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
        }
    },[])
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div>
            <h1>{width}</h1>
            {tabs.map(tab => (
                <button
                key={tab} 
                style={item === tab ? {
                    color: '#fff',
                    backgroundColor: '#333'
                } : {}}
                onClick={() => setItem(tab)}>{tab}
                </button>
            ))}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title  || post.name}</li>
                ))}
            </ul>
            {goToTop && (
                <button
                style={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px'
                }}
                >Go to top</button>
            )}
        </div>
    )
}

export default Content