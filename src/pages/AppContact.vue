<template>
  <section>
    <div class="container p-5">
      <form v-if="success === false" @submit.prevent="sendMessage" action="">
        <div class="row mb-3">
          <label for="formGroupExampleInput" class="col-sm-2">Nome</label>
          <input type="text" v-model="name" class="col-sm-10 border-opacity-25" id="formGroupExampleInput" placeholder="Nome">
          <small v-if="errors.name">
            {{ errors.name.join(' ') }}
          </small>
        </div>
        <div class="row mb-3">
          <label for="inputEmail4" class="col-sm-2">Email</label>
          <input type="email" v-model="email" class="col-sm-10" id="inputEmail4" placeholder="Email">
          <small v-if="errors.email">
            {{ errors.email.join(' ') }}
          </small>
        </div>
        <div class="row mb-3">
          <label for="exampleFormControlTextarea1" class="col-sm-2">Messaggio</label>
          <textarea class="col-sm-10" v-model="message" id="exampleFormControlTextarea1" rows="3" placeholder="Messaggio..."></textarea>
          <small v-if="errors.message">
            {{ errors.message.join(' ') }}
          </small>
        </div>
        <button class="btn btn-outline-dark">Invia</button>
      </form>
      <div v-else> 
        <p>Grazie per avermi contattato! L'invio è andato a buon fine</p>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return{
        name:'',
        email:'',
        message:'',
        errors: {},
        success: false
      }
    },
    methods:{
      sendMessage(){

        const data = {
          name: this.name,
          email: this.email,
          message: this.message
        }

        axios.post('http://127.0.0.1:8000/api/contacts', data)
        .then(res => {
          if(res.data.success === true) {
            // invio andato bene
          } else {
            // gestiamo gli errori
            this.errors = res.data.errors
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>