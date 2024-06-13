<template>
  <section class="project">
    <div class="container">
      <h1>Dettaglio Progetto</h1>
      <p>{{ $route.params.slug }}</p>
      <p>{{ console.log(project)  }}</p>
      <button @click="goBack" class="btn btn-outline-dark">
        Indietro
      </button>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        project: []
      }
    },
    methods:{
      goBack(){
        this.$router.back()
      },
      fetchProject(){
        axios.get('http://127.0.0.1:8000/api/project/' + this.$route.params.slug )
        .then(res => {
            this.project = res.data.results.data
        })
      }
    },
    created(){
      this.fetchProject();
    }
  }
</script>

<style lang="scss" scoped>

</style>