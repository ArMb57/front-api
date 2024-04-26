<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import postService from '@/services/postService';
export default {
  data(){
    return {
      post: null
    };
  },
  methods: {
    fetchPosts(){
      let id = this.$route.params.id;
      postService.getPost(id)
      .then(res => this.post = res.data)
      .catch(err => console.error(err))
    }
  }, 
  created(){
    this.fetchPosts();
  }

}
</script>

<style>

</style>