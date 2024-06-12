<template>
  <div>
    <h1>Progetti</h1>
  </div>
  <div class="container">
    <div class="row">
      <div v-for="project in projects" class="col">
        <h4>{{ project.title }}</h4>
        <p>{{ project.slug }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        projects: [],
      }
    },
    methods:{
      fetchProjects(){
        axios.get('http://127.0.0.1:8000/api/project',{
          params: {
            page: 1
          }
        })
        .then(res => {
          this.projects = res.data.results.data
        })
      }
    },
    created() {
      this.fetchProjects();
    }
  }
</script>

<style>

</style>