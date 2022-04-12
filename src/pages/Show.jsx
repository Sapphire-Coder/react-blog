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
                <div id = 'context'>
                    <h3>{data.body}</h3>
                </div>
                <div id = 'editBtn'>
                   <button onClick = {() => navigate(`/${id}/edit`)}>Edit Post</button>
                </div>
            </div>
            <div id = 'commentSection'>
                {
                    comments.map((comment, i) => {
                        return (
                            <div key = {i} className = 'comment'>
                                <h3 style={{textDecorationLine: 'underline'}}>Name:</h3>
                                <h3>{comment.name}</h3>
                                <p style={{textDecorationLine: 'underline'}}>Comment:</p>
                                <p>{comment.message}</p>
                            </div>
                        )
                    })
                }
                <form onSubmit={addComment} id = 'commentBox'>
                    <label>Name: </label>
                    <input type = 'text' name = 'name' /> <br/>
                    <label>Comment: </label>
                    <textarea name = 'message' cols = '40' rows = '10'></textarea>
                    <input type = 'submit' id = 'comBtn'/>
                </form>
            </div>
        </div>
    )
}