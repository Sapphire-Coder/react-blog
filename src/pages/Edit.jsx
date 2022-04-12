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
        <div>
            <form onSubmit={updPost}>
                <input type = 'text' name = 'title' defaultValue={data.title} />
                <input type = 'text' name = 'body' defaultValue={data.body} />
                <input type = 'submit' />
            </form>
            <button onClick = {delPost}>Delete Post</button>
        </div>
    )
}