import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api', 
    withCredentials:true ,
    headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
    }
});

export default {
    getPosts(){
        return apiClient.get('/posts');
    }, 
    getPost(id){
        return apiClient.get(`/posts/${id}`)
    },
    createPost(postData){
        return apiClient.post('/posts', postData )
    },
    updatePost(id, postData){
        return apiClient.put(`/posts/${id}`, postData )
    },
    deletePost(id){
        return apiClient.delete(`/posts/${id}`)
    }
}