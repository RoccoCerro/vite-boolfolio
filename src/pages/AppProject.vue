<template>
  <section class="project">
    <template v-if="project">
      <div class="container">
        <h1>Dettaglio Progetto</h1>
        <p>{{ $route.params.slug }}</p>
        <p>{{ project.title }}</p>
        <p>{{ project }}</p>
        <p>{{ project.technologies ? project.technologies[0].name : 'Nessuna tecnologia' }}</p>
        <p>{{ project.type ? project.type.name : 'Nessun tipo' }}</p>
        <p>{{ slug }}</p>
        <button @click="goBack" class="btn btn-outline-dark">
          Indietro
        </button>
      </div>
    </template>
  </section>
</template>

<script>
  import axios from 'axios'
  // import { stringifyQuery } from 'vue-router';

  export default {
    props:{
      slug: {
        type: String,
        required: true,
      }
    },
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
        axios.get( 'http://127.0.0.1:8000/api/projects/' + this.slug)
        .then(res => {
            this.project = res.data.project
        })
        .catch((err)=>{
          this.$router.push({
            name: 'not-found',
            params: { pathMatch: this.$route.path.substring(1).split('/') },
          })
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