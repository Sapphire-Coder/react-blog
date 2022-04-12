import { useEffect, useState } from 'react'
import { getPosts } from '../services/posts-api'

export default function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        getPosts().then(res => setData(res.data))
        console.log(data)
    }, [])

    return (
        <div>
            <h1>Blog Posts</h1>
            <div id = 'container'>
                {
                    data.map((post, i) => {
                        return(
                            <div key = {i}>
                                <h2>{post.title}</h2>
                                <h3>{post.body}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}