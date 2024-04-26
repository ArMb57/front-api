<template>
  <div>
    <h1>Ajouter un post</h1>
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">Titre:</label>
        <input type="text" id='title' v-model="post.title">
      </div>
      <div>
        <label for="content">Contenu:</label>
        <textarea id='content' v-model="post.content"></textarea>
      </div>
      <button type='submit'>Créer</button>
    </form>
  </div>
</template>

<script>
import postService from '@/services/postService';

export default {
  data(){
    return{
      post: {
        title:'',
        content:''
      }
    };
  },
  methods: {
    submitPost(){
      postService.createPost(this.post)
      .then(() => this.$router.push({ name: 'postsList' }))
      .catch(error => console.error(error))
    }
  }

}
</script>

<style>

</style>