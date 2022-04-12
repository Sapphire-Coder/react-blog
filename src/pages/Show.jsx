import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost, updatePost } from '../services/posts-api'

export default function Show() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        getPost(id).then(res => {
            setData(res.data)
            setComments(res.data.comments)
        })
    }, [data])

    const addComment = e => {
        e.preventDefault()
        const comment = comments
        comment.push({ name: e.target.name.value, message: e.target.message.value })
        const post = { title: data.title, body: data.body, comments: comment }
        updatePost(id, post)
        e.target.name.value = null
        e.target.message.value = null
    }

    return (
        <div className='main'>
            <div id = 'post'>
                <h1>{data.title}</h1>
                <h3>{data.body}</h3>
                <div id = 'editBtn'>
                   <button onClick = {() => navigate(`/${id}/edit`)}>Edit Post</button>
                </div>
            </div>
            <div>
                {
                    comments.map((comment, i) => {
                        return (
                            <div key = {i}>
                                <h3>{comment.name}</h3>
                                <p>{comment.message}</p>
                            </div>
                        )
                    })
                }
            </div>
            <form onSubmit={addComment} id = 'commentBox'>
                <label>Name</label><br/>
                <input type = 'text' name = 'name' /> <br/>
                <label>Comment</label><br/>
                <input type = 'text' name = 'message' /> <br/>
                <input type = 'submit' />
            </form>
        </div>
    )
}