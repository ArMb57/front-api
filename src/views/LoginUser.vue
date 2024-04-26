<template>
  <div>
    <h1>Connection</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id='email' v-model="userData.email" required>
      </div>
      <div>
        <label for="pwd">Mot de passe:</label>
       <input type="password" id='pwd' v-model="userData.password" required>
      </div>
      <button type='submit'>Se connecter</button>
    </form>
  </div>
</template>

<script>
import userService from '@/services/userService';
import { mapActions } from 'vuex';
export default {
    data(){
    return {
    userData:{}
    };
  },

  methods:{
    ...mapActions(['loginUser']),
    async login(){
      try{
        await userService.login(this.userData);
        this.loginUser(this.userData.email)
        this.$router.push('/');
      }catch(e){
        console.error(e)
      }
    }
  }

}
</script>

<style>

</style>