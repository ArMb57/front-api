<template>
  <div>
    <h1>Liste des posts</h1>
    <button @click="createPost">Ajouter un post</button>
    <ul>
        <li v-for="post in posts" :key="post.id">
            {{ post.title }}
            <button @click="viewDetails(post.id)">Voir détail</button>
            <button @click="editPost(post.id)">Modifier</button>
            <button @click="deletePost(post.id)">Supprimer</button>
        </li>
    </ul>
  </div>
</template>

<script>
import postService from '@/services/postService';
export default {
data(){
    return{
        posts:[],
    }
}, 
methods:{
    async fetchPosts(){
        try{
            const res = await postService.getPosts();
            this.posts = res.data;

        }catch(e){
            console.log(e)
        }
    }, 
    createPost(){
        this.$router.push({ name:'createPost' });
    }, 
    viewDetails(id){
    this.$router.push({ name:'postsDetail', params: {id} });
    }, 
    editPost(id){
    this.$router.push({ name:'updatePost', params: {id} });
    },
    deletePost(id){
        postService.deletePost(id)
        .then(()=>this.fetchPosts())
        .catch(error => console.error(error))
    }
}, 
created(){
    this.fetchPosts();
}
}
</script>

<style>

</style>