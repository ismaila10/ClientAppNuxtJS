<template>
  <div class="container">
    <div>
      <Title title="Mon Compte" />
      <p>{{user.firstName}}</p>
      <p>{{user.lastName}}</p>
      <p>{{user.age}}</p>
      <p>{{user.email}}</p>
      <button @click="logout">Deconnexion</button>
    </div>
  </div>
</template>

<script>
import Title from "../components/ui/title";
import VueJwtDecode from "vue-jwt-decode";
export default {
    components: {
      Title
    },
    data: function() {
      return {
        isLogged: false,
        user:{}
      }
    },
    middleware: "auth",
    methods: {
      logout: function() {
        localStorage.removeItem('token');
        this.$store.commit('loggedOut');
        this.isLogged = false
      }
    },
    beforeMount() {
      const token = localStorage.getItem('token');
      if(token) {
        const jwtDecoded = VueJwtDecode.decode(token);
        this.$getMe(jwtDecoded.id, token)
        .then(data=> {
        console.log(data)
        this.isLogged = true
        this.user = data
        })
        .catch(err => console.log(err))
      }
    }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS*/

</style>
