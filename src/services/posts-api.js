import axios from 'axios'
const URL = 'http://localhost:3001/posts/'

export const getPosts = () => {
    return axios.get(URL)
}

export const getPost = id => {
    return axios.get(`${URL}${id}`)
}

export const deletePost = id => {
    return axios.delete(`${URL}${id}`)
}

export const createPost = createdPost => {
    return axios.post(`${URL}`, createdPost)
}

export const updatePost = (id, updatedPost) => {
    return axios.put(`${URL}${id}`, updatedPost)
}