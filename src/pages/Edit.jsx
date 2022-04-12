import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deletePost, getPost, updatePost } from '../services/posts-api'

export default function Edit() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        getPost(id).then(res => setData(res.data))
    }, [])

    const updPost = e => {
        e.preventDefault()
        const post = { title: e.target.title.value, body: e.target.body.value, comments: data.comments}
        updatePost(id, post)
        navigate(`/${id}`)
    }

    const delPost = () => {
        deletePost(id)
        navigate('/')
    }

    return (
        <div className='main'>
            <h1>Edit Post</h1>
            <form onSubmit={updPost}>
                <input type = 'text' name = 'title' defaultValue={data.title} />
                <textarea name = 'body' cols = '80' rows = '20' defaultValue={data.body}></textarea>
                <input type = 'submit' />
            </form>
            <button type = 'submit' onClick = {delPost}>Delete Post</button>
        </div>
    )
}