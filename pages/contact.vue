<template>
    <!-- mdp ismailadiallolionelmessi  SG.kJoSPORfTUCO9A3NyCGOVQ.XLeerCwA5HOyYH49jLJSLjqin-q-E0bIP4q4jaoq1uU-->
    <div class="flex items-center h-screen w-full bg-teal-lighter">
    <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <h1 class="block w-full text-center text-grey-darkest mb-6">Contact</h1>
      <form class="mb-4 md:flex md:flex-wrap md:justify-between">
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Nom Complet</label>
          <input class="border py-2 px-3 text-grey-darkest" type="text" v-model="name" name="name" id="name">
        </div>
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Email</label>
          <input class="border py-2 px-3 text-grey-darkest" type="email" v-model="email" name="email" id="email">
        </div>
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Sujet</label>
          <input class="border py-2 px-3 text-grey-darkest" type="text" v-model="subject" name="subject" id="subject">
        </div>
        <div class="flex flex-col mb-6 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="message">Message</label>
          <textarea class="border py-2 px-3 text-grey-darkest" type="texte" v-model="message" name="message" id="message">
          </textarea>
        </div>
        <!-- <input class="block bg-teal hover:bg-teal-dark text-dark uppercase text-lg mx-auto p-4 rounded" type="submit" value="envoyer"> -->
        <button @click.prevent="send" class="block bg-teal hover:bg-teal-dark text-dark uppercase text-lg mx-auto p-4 rounded" type="submit">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        data: function(){
            return {
                email: "",
                name: "",
                message: "",
                subject: ""
            }
        },
        methods: {
            send: function() {
              fetch('api/send-email')
              .then(res => res.json())
              .then(data => console.log(data))
              .catch(err => console.log(err))
              alert("iso")
              console.log(this.message)                              
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>