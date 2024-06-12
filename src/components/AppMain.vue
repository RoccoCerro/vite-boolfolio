<template>
  <main class="page-main">
    <div class="container">
      
      <h1 class="text-center p-4">Progetti</h1>
      
      <div class="row">
        <div v-for="project in projects" class="col">
          <!-- <h4>{{ project.title }}</h4>
          <p>{{ project.slug }}</p> -->
          <ProjectCard :project="project"/>
        </div>
      </div>
      <ul class="d-flex list-unstyled justify-content-center gap-5 p-5">
        <li class="border rounded-circle" @click="changePage(n)" v-for="n in lastPage" :key="n">
          {{ n }}
        </li>
      </ul>
    </div>
  </main>
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
            perPage: 6
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

<style lang="scss" scoped>

  @use '../style/partials/main.scss';

</style>