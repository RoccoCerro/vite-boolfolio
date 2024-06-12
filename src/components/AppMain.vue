<template>
  <div>
    <h1>Progetti</h1>
  </div>
  <div class="container">
    <div class="row">
      <div v-for="project in projects" class="col">
        <!-- <h4>{{ project.title }}</h4>
        <p>{{ project.slug }}</p> -->
        <ProjectCard :project="project"/>
      </div>
    </div>
    <ul>
      <li @click="changePage(n)" v-for="n in lastPage" :key="n">
        {{ n }}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";
  import ProjectCard from './ProjectCard.vue'; 

  export default {
    components:{
      ProjectCard
    },
    data() {
      return {
        projects: [],
        currentPage: 1,
        lastPage: null
      }
    },
    methods:{
      changePage(n){
        if( n === this.currentPage ){
          return
        }

        this.currentPage = n
        this.fetchProjects()
      },
      fetchProjects(){
        axios.get('http://127.0.0.1:8000/api/project',{
          params: {
            page: this.currentPage,
            perPage: 3
          }
        })
        .then(res => {
          this.projects = res.data.results.data,
          this.lastPage = res.data.results.last_page
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