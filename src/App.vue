<template>
  <nav>
    <router-link to="/">Liste des posts</router-link> |
    <span v-if="!isLoggedIn">
      <router-link to="/register">Inscription</router-link> |
      <router-link to="/login">Connection</router-link> |
    </span> 
    <span v-else>
      <p>Bonjour, {{ userEmail }}</p>
      <button @click="logout">Déconnection</button>
    </span>
  </nav>
  <router-view/>
</template>


<script>

  import { mapGetters, mapActions} from 'vuex';

  export default {
    computed: {
      ...mapGetters(['userEmail', 'isLoggedIn'])
    },
    methods: {
      ...mapActions(['logoutUser']),
       logout(){
        this.logoutUser();
        this.$router.push('/login');
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
