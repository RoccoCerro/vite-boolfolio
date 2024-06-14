<template>
  <section class="project">
    <template v-if="project">
      <div class="container">
        <h1>Dettaglio Progetto</h1>
        <p>{{ $route.params.slug }}</p>
        <p>{{ project.title }}</p>
        <button @click="goBack" class="btn btn-outline-dark">
          Indietro
        </button>
      </div>
    </template>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return{
        project: null
      }
    },
    methods:{
      goBack(){
        this.$router.back()
      },
      fetchProject(){
        axios.get('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug )
        .then(res => {
            this.project = res.data.result
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