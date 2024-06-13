<template>
  <main class="page-main">
    
    <AppHero />

    <div class="container">
      
      <div class="row">
        <div v-for="project in projects" class="col-lg-4 col-md-6 col-sm-12 p-2">
          <!-- <h4>{{ project.title }}</h4>
          <p>{{ project.slug }}</p> -->
          <ProjectCard :project="project"/>
        </div>
      </div>
      <ul class="d-flex list-unstyled justify-content-center gap-5 p-5">
        <li class="border rounded-circle" @click="changePage(n)" v-for="n in lastPage" :key="n" :class="currentPage == n ? 'bg-light': '' ">
          {{ n }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
  import axios from "axios";
  import ProjectCard from './ProjectCard.vue'; 
  import AppHero from './AppHero.vue'; 

  export default {
    components:{
      ProjectCard,
      AppHero,
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
        axios.get('http://127.0.0.1:8000/api/projects',{
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