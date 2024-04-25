<template>
  <div>
    <h1>Liste des posts</h1>
    <button>Ajouter un post</button>
    <ul>
        <li v-for="post in posts" :key="post.id">
            {{ post.title }}
            <button>Voir détail</button>
            <button>Modifier</button>
            <button>Supprimer</button>
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
    }
}, 
created(){
    this.fetchPosts();
}
}
</script>

<style>

</style>