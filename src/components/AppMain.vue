<template>
  <div>
    <h1>Progetti</h1>
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