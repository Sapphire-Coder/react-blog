import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost } from '../services/posts-api'

export default function Show() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        getPost(id).then(res => setData(res.data))
    })

    return (
        <div>
            <h1>{data.title}</h1>
            <h2>{data.body}</h2>
            <button onClick = {() => navigate(`/${id}/edit`)}>Edit Post</button>
            <div>
                {
                    data.comments.map(comment => {
                        <div>
                            <h3>{comment.name}</h3>
                            <p>{comment.message}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}