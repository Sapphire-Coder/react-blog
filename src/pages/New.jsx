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
        <div>
            <form onSubmit={newPost}>
                <input type = 'text' name = 'title' />
                <input type = 'text' name = 'body' />
            </form>
        </div>
    )
}