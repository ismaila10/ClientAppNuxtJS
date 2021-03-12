<template>
  <div class="flex items-center h-screen w-full bg-teal-lighter">
    <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <h1 class="block w-full text-center text-grey-darkest mb-6">Login</h1>
      <form class="mb-4 md:flex md:flex-wrap md:justify-between">
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Email</label>
          <input class="border py-2 px-3 text-grey-darkest" type="email" v-model="email" name="email" id="email">
        </div>
        <div class="flex flex-col mb-6 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="password">Mot de Passe</label>
          <input class="border py-2 px-3 text-grey-darkest" type="password" v-model="password" name="password" id="password">
        </div>
        <button @click.prevent="login" class="block bg-teal hover:bg-teal-dark text-dark uppercase text-lg mx-auto p-4 rounded" type="submit">Se Connecter</button>
      </form>
      <a class="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker" href="/login">Pas de compte ? Inscrivez-vous!</a>
    </div>
  </div>
</template>

<script>
import FormGroup from "../components/ui/formGroup";
import ButtonForm from "../components/ui/buttonForm";
    export default {
        components: {
            FormGroup,
            ButtonForm
        },
        data: function(){
            return {
                email: "",
                password: "",
                messageError: "",
            }
        },
        methods: {
            login: function() {
              const body = {
                email: this.email,
                password: this.password
              }
              this.$login(body)
                  .then(data => {
                    console.log(data)
                    if(!data.auth){
                      this.messageError = data.message;
                    }
                    else {
                      let item = data.token;
                      localStorage.setItem('token', item);
                      this.$router.push('account');
                    }
                  }
                  )
                  .catch(error => console.log('Authorization failed : ' + error.message));
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>