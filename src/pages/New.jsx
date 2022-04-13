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
            <div id = 'newForm'>
                <form onSubmit={newPost}>
                    <label>Title:</label>
                    <input type = 'text' name = 'title' />
                    <label>Post:</label>
                    <textarea name = 'body' cols = '80' rows = '20'></textarea>
                    <input type = 'submit' />
                </form>
            </div>
        </div>
    )
}