import { useNavigate } from 'react-router-dom'
import { createPost } from '../services/posts-api'

export default function New() {

    const navigate = useNavigate()

    const newPost = e => {
        e.preventDefault()
        const post = {title: e.target.title.value, body: e.target.body.value }
        createPost(post)
        navigate('/')
    }

    return (
        <div className='main'>
            <h1>Create New Post</h1>
            <form onSubmit={newPost}>
                <input type = 'text' name = 'title' />
                <input type = 'text' name = 'body' />
                <input type = 'submit' />
            </form>
        </div>
    )
}