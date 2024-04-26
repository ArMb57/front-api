<template>
  <div>
    <h1>Modifier un post</h1>
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">Titre:</label>
        <input type="text" id='title' v-model="post.title">
      </div>
      <div>
        <label for="content">Contenu:</label>
        <textarea id='content' v-model="post.content"></textarea>
      </div>
      <button type='submit'>Mettre à jour</button>
    </form>
  </div>
</template>

<script>
import postService from '@/services/postService';
export default {
  data(){
    return {
      post: {
        id: this.$route.params.id,
        title: '',
        content: ''
      }
    };
  },
  methods:{
  fetchPost(){
    postService.getPost(this.post.id)
    .then(res => this.post = res.data)
    .catch(e => console.error(e))
    }, 
    submitPost(){
      postService.updatePost(this.post.id, this.post)
      .then(() => this.$router.push({name: 'postsList'}))
      .catch(e => console.error(e))
    }
  }, 
  created(){
    this.fetchPost()
  }

}
</script>

<style>

</style>