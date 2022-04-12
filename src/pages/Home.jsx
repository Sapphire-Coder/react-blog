import { useEffect, useState } from 'react'
import { getPosts } from '../services/posts-api'

export default function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        getPosts().then(res => setData(res.data))
    }, [data])

    return (
        <div className='main'>
            <h1>Blog Posts</h1>
            <div id = 'postContainer'>
                {
                    data.map((post, i) => {
                        return(
                            <div key = {i} className = 'posts'>
                                <h2><a href={`/${post._id}`}>{post.title}</a></h2>
                                <h3>{post.body}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}